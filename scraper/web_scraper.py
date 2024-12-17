import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient

from data import HOOPS_HYPE_BASE_URL, NBA_TEAMS, SCRAPER_PLAYER_EXCEPTIONS


def soupify(url):
    try:
        request = requests.get(url, timeout=15)
        request.raise_for_status()
        return BeautifulSoup(request.content, 'html.parser')
    except Exception as e:
        print(f"Error occurred while fetching request: {e}")


def start_scraper():
    # connect to db
    connection = MongoClient("mongodb://localhost:27017/")
    db = connection['nba']
    team_collection, player_collection = db['Teams'], db['Players']
    # iterate through each NBA team, and scrape salary data for each team
    for team_index, team in enumerate(NBA_TEAMS, start=1):
        team_data, player_data = scrape_team_data(team_index, team)
        try:
            team_collection.insert_one(team_data)
            player_collection.insert_many(player_data)
        except Exception as e:
            print(f"Error occured while trying to insert records: {e}")


def scrape_team_data(team_index, team_name):
    # scrape salary page for specified team
    soup = soupify(f"{HOOPS_HYPE_BASE_URL}/salaries/{team_name.lower().replace(' ', '_')}/")
    team_record, player_records = None, []
    # status message for console
    print(f"Scraping team data for: {team_name}")
    team_salary = soup.find("div", class_="payroll-totals").find("span").text.strip()
    # find all players for specified team
    players = soup.find("tbody").find_all("tr")
    # iterate through each individual player, and scrape data
    for player in players:
        player_data = scrape_player_data(player, team_index, team_name)
        if player_data:
            player_records.append(player_data)

    team_record = {
        "_id": team_index,
        "name": team_name,
        "salary": team_salary
    }

    return team_record, player_records


def scrape_player_data(player, team_id, team_name):
    # check whether or not the player name is stored as an anchor tag or td tag
    anchor = player.find("a")
    player_name = anchor.text.strip() if anchor else player.find("td", class_="name").text.strip()
    player_record = None
    # if the player is not listed as an exception, or does not match the team in which the player
    # is exempted from (i.e. Reggie Jackson), continue to scrape
    if not (player_name in SCRAPER_PLAYER_EXCEPTIONS
            and SCRAPER_PLAYER_EXCEPTIONS[player_name] == team_name):
        # status message for console
        print(f"\tScraping player data for: {player_name}")
        # scrape salary page for player to obtain bio information
        player_bio_info = scrape_player_bio(anchor, player_name)
        # scrape player salaries
        salary_tags = player.find_all("td")
        if salary_tags:
            player_salary_info = scrape_player_salaries(salary_tags)
        else:
            raise ValueError(f"Error while fetching {player_name}'s salaries")

        player_record = {
            "team_id": team_id,
            "details": player_bio_info,
            "contract": player_salary_info
        }

    return player_record


def scrape_player_bio(anchor, player_name):
    if anchor:
        soup = soupify(f"{HOOPS_HYPE_BASE_URL}/player/{player_name.lower().replace(' ', '-')}/salary/")
        img_tag = soup.find("img", alt=player_name)
        number_tag = soup.find("div", class_="player-jersey")
        position_tag = soup.find("span", class_="player-bio-text-line-value")
        player_headshot = img_tag.get('src') if img_tag else '-'
        player_number = number_tag.text.strip() if number_tag else '-'
        player_position = position_tag.text.strip() if position_tag else '-'
    else:
        player_headshot, player_number, player_position = '-', '-', '-'

    player_bio_info = {
        "name": player_name,
        "headshot": player_headshot,
        "number": player_number,
        "position": player_position
    }

    return player_bio_info


def scrape_player_salaries(salary_tags):
    player_salaries, player_contract_length = [], 0
    for i in range(1, len(salary_tags)):
        # convert text into an int - remove commas and monetary sign
        int_salary = int(salary_tags[i].text.strip().replace(',', '')[1::])
        player_salaries.append(int_salary)
        # if salary is non-zero, increment contract length by 1
        if int_salary:
            player_contract_length += 1

    player_salary_info = {
        "salaries": player_salaries,
        "length": player_contract_length
    }

    return player_salary_info


def main():
    start_scraper()


if __name__ == "__main__":
    main()
