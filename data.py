# A dictionary used to map full NBA team names to its abbreviation
NBA_TEAMS = [
    "Atlanta Hawks",
    "Boston Celtics",
    "Brooklyn Nets",
    "Charlotte Hornets",
    "Chicago Bulls",
    "Cleveland Cavaliers",
    "Dallas Mavericks",
    "Denver Nuggets",
    "Detroit Pistons",
    "Golden State Warriors",
    "Houston Rockets",
    "Indiana Pacers",
    "Los Angeles Clippers",
    "Los Angeles Lakers",
    "Memphis Grizzlies",
    "Miami Heat",
    "Milwaukee Bucks",
    "Minnesota Timberwolves",
    "New Orleans Pelicans",
    "New York Knicks",
    "Oklahoma City Thunder",
    "Orlando Magic",
    "Philadelphia 76ers",
    "Phoenix Suns",
    "Portland Trail Blazers",
    "Sacramento Kings",
    "San Antonio Spurs",
    "Toronto Raptors",
    "Utah Jazz",
    "Washington Wizards"
]

# The base URL for salaries and players
HOOPS_HYPE_BASE_URL = "https://hoopshype.com"

# A dictionary of NBA players mapped to their team, which should be ignored by the scraper
SCRAPER_PLAYER_EXCEPTIONS = {
    "Eric Bledsoe": "Portland Trail Blazers", # Retired - paid by Portland
    "Jaren Jackson Jr": "Memphis Grizzlies", # Temporary - player page is bugged
    "Reggie Jackson": "Charlotte Hornets", # Active - paid by Charlotte
    "Ricky Rubio": "Cleveland Cavaliers" # Retired - paid by Cleveland
}