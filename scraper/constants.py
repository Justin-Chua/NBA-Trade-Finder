import json


def load_json(file_name):
    with open(file_name, 'r', encoding='utf-8') as file:
        return json.load(file)


# The base URL for salaries and players
HOOPS_HYPE_BASE_URL = "https://hoopshype.com"
# A dictionary that maps full NBA team names to its abbreviation
NBA_TEAMS = load_json("./static-data/nba_teams.json")
# A dictionary that maps NBA players to a team, representing players that should be ignored by the scraper
SCRAPER_PLAYER_EXCEPTIONS = load_json("./static-data/scraper_player_exceptions.json")
