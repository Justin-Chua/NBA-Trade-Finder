import requests
from bs4 import BeautifulSoup

from data import HOOPS_HYPE_BASE_URL, NBA_TEAMS

# DATA THAT NEEDS TO BE SCRAPED:
# TEAMS
# - Name - done
# - Current Salary - done
# PLAYERS
# - Name - done
# - Headshot link
# - Jersey Number - done
# - Position - done
# - Salary for next 5 years - done
# - Length of contract - done
# - Contract statuses (player options, team options) - for V2

def soupify(url): 
    return BeautifulSoup(requests.get(url).content, "html.parser") 

def scrape_team_data(team_name):
    # scrape salary page for specified team
    soup = soupify(f"{ HOOPS_HYPE_BASE_URL }/salaries/{ team_name.lower().replace(" ", "_") }/")
    team_salary = soup.find("div", class_="payroll-totals").find("span").text.strip()
    # do database stuff here - replace print
    print(team_name + " | " + team_salary)

    players = soup.find("tbody").find_all("tr")
    for player in players:
        scrape_player_data(player)

def scrape_player_data(player):
    # check whether or not the player name is stored as an anchor tag or td tag
    anchor = player.find("a")
    if anchor:
        player_name = anchor.text.strip()
    else:
        player_name = player.find("td", class_="name").text.strip()

    # scrape salary page for player to obtain number and position
    soup = soupify(f"{ HOOPS_HYPE_BASE_URL }/player/{ player_name.lower().replace(" ", "-") }/salary/")
    player_headshot = soup.find("img", alt=player_name).get("src")
    player_number = soup.find("div", class_="player-jersey").text.strip()
    player_position = soup.find("span", class_="player-bio-text-line-value").text.strip()

    player_salaries, contract_length = [], 0
    unfiltered_player_salaries = player.find_all("td")
    for i in range (1, len(unfiltered_player_salaries)):
        # convert text into an int - remove commas and monetary sign
        int_salary = int(unfiltered_player_salaries[i].text.strip().replace(",", "")[1::])
        player_salaries.append(int_salary)
        # if salary is non-zero, increment contract length by 1
        if int_salary:
            contract_length += 1
    # do database stuff here - replace print
    print(player_name)
    print("Headshot URL:", player_headshot)
    print("Number:", player_number)
    print("Position:", player_position)
    print("Contract length:", contract_length)
    print("Player salaries:", player_salaries)
        
def main():
    # iterate through each NBA team, and scrape salary data for each team
    for team in NBA_TEAMS:
        scrape_team_data(team)

if __name__ == "__main__":
    main()
