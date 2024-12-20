import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { fetchTeams, fetchPlayers } from '../../api/controller'
import { NBAContext } from './NBAContext'

export const NBAProvider = ({ children }) => {
  const [teams, setTeams] = useState([])
  const [players, setPlayers] = useState([])
  const [teamSelections, setTeamSelections] = useState([null, null])
  const [playerSelections, setPlayerSelections] = useState([[], []])
  const [modalSelection, setModalSelection] = useState(null)

  useEffect(() => {
    const getTeams = async () => {
      try {
        const teamsData = await fetchTeams()
        const teamsByName = teamsData.reduce((acc, team) => {
          acc[team.name] = team
          return acc
        }, {})
        setTeams(teamsByName)
      } catch (error) {
        console.error('Error fetching teams:', error)
      }
    }

    const getPlayers = async () => {
      try {
        const playersData = await fetchPlayers()
        const playersByTeam = playersData.reduce((acc, player) => {
          if (!acc[player.team_name]) {
            acc[player.team_name] = []
          }
          acc[player.team_name].push(player)
          return acc
        }, {})
        setPlayers(playersByTeam)
      } catch (error) {
        console.error('Error fetching players:', error)
      }
    }

    getTeams()
    getPlayers()
  }, [])

  return (
    <NBAContext.Provider value={{ teams, teamSelections, setTeamSelections, 
      players, playerSelections, setPlayerSelections, modalSelection, setModalSelection }}
    >
      {children}
    </NBAContext.Provider>
  )
}

NBAProvider.propTypes = {
  children: PropTypes.node.isRequired
}
