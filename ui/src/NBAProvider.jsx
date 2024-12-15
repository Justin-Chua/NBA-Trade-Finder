import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { fetchTeams, fetchPlayers } from '../../api/controller'
import { NBAContext } from './NBAContext'

export const NBAProvider = ({ children }) => {
  const [teams, setTeams] = useState([])
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const getTeams = async () => {
      try {
        const teamsData = await fetchTeams()
        setTeams(teamsData)
      } catch (error) {
        console.error('Error fetching teams:', error)
      }
    }

    const getPlayers = async () => {
      try {
        const playersData = await fetchPlayers()
        setPlayers(playersData)
      } catch (error) {
        console.error('Error fetching players:', error)
      }
    }

    getTeams()
    getPlayers()
  }, [])

  return (
    <NBAContext.Provider value={{ teams, players }}>
      {children}
    </NBAContext.Provider>
  )
}

NBAProvider.propTypes = {
  children: PropTypes.node.isRequired
}
