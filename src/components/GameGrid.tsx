import React from 'react'
import useGames from '../hooks/useGames'

const GameGrid = () => {
    const {games, errors} = useGames()
    console.log(games)

    return (
        <ul>
            {games.map(game => <li key={game.id}>{game.name}</li>)}
        </ul>
    )
}

export default GameGrid