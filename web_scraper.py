import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient

from data import HOOPS_HYPE_BASE_URL, NBA_TEAMS, SCRAPER_PLAYER_EXCEPTIONS

def soupify(url): 
    return BeautifulSoup(requests.get(url).content, "html.parser") 

def scrape_team_data(team_index, team_name):
    # connect to db
    connection = MongoClient("mongodb://localhost:27017/")
    db = connection["nba"]
    team_collection, player_collection = db["Teams"], db["Players"]
    # status message for console
    print("Scraping team data for: ", team_name)
    # scrape salary page for specified team
    soup = soupify(f"{ HOOPS_HYPE_BASE_URL }/salaries/{ team_name.lower().replace(" ", "_") }/")
    team_salary = soup.find("div", class_="payroll-totals").find("span").text.strip()
    # upsert record into our db
    record = {
        "_id": team_index,
        "name": team_name,
        "salary": team_salary
    }
    team_collection.update_one(
        { "_id": team_index },
        { "$set": record },
        upsert=True)

    # find all players for specified team
    players = soup.find("tbody").find_all("tr")
    # here we filter and remove all documents matching the current team, with a team id
    # that is greater than the length of "players", but less than the starting player_id
    # for the team to follow. This will handle the case in which a player is traded. 
    max_player_id, next_team_starting_id = (100 * team_index) + len(players), (100 * (team_index + 1))
    player_collection.delete_many({ "_id": { "$gt": max_player_id , "$lt": next_team_starting_id }})
    # iterate through each individual player, and scrape data
    for player_index, player in enumerate(players):
        scrape_player_data(player, player_collection, player_index, team_index, team_name)

def scrape_player_data(player, player_collection, player_index, team_id, team_name):
    player_id = (team_id * 100) + player_index
    # check whether or not the player name is stored as an anchor tag or td tag
    anchor = player.find("a")
    player_name = anchor.text.strip() if anchor else player.find("td", class_="name").text.strip()
    # if the player is not listed as an exception, or does not match the team in which the player
    # is exempted from (i.e. Reggie Jackson), continue to scrape
    if not (player_name in SCRAPER_PLAYER_EXCEPTIONS.keys() \
        and SCRAPER_PLAYER_EXCEPTIONS[player_name] == team_name):
        # status message for console
        print("\tScraping player data for: ", player_name)
        # scrape salary page for player to obtain number and position
        if anchor:
            soup = soupify(f"{ HOOPS_HYPE_BASE_URL }/player/{ player_name.lower().replace(" ", "-") }/salary/")
            img_tag = soup.find("img", alt=player_name)
            player_headshot = img_tag.get("src") if img_tag else ""
            player_number = soup.find("div", class_="player-jersey").text.strip()
            player_position = soup.find("span", class_="player-bio-text-line-value").text.strip()
        else:
            player_headshot, player_number, player_position = "-", "-", "-"

        player_salaries, player_contract_length = [], 0
        unfiltered_player_salaries = player.find_all("td")
        for i in range (1, len(unfiltered_player_salaries)):
            # convert text into an int - remove commas and monetary sign
            int_salary = int(unfiltered_player_salaries[i].text.strip().replace(",", "")[1::])
            player_salaries.append(int_salary)
            # if salary is non-zero, increment contract length by 1
            if int_salary:
                player_contract_length += 1

        # upsert record into our db
        record = {
            "_id": player_id,
            "team_id": team_id,
            "details": {
                "name": player_name,
                "headshot": player_headshot,
                "number": player_number,
                "position": player_position
            },
            "contract": {
                "salaries": player_salaries,
                "length": player_contract_length
            }
        }
        player_collection.update_one(
            { "_id" : player_id },
            { "$set": record },
            upsert=True
        )

def main():
    # iterate through each NBA team, and scrape salary data for each team
    for team_index, team in enumerate(NBA_TEAMS, start=1):
        scrape_team_data(team_index, team)

if __name__ == "__main__":
    main()
