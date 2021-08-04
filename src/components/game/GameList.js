import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { useHistory } from "react-router-dom"
import { useHistory } from 'react-router-dom'

export const GameForm = () => {
    const history = useHistory()
    const { createGame, getGameTypes, gameTypes } = useContext(GameContext)

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentGame, setCurrentGame] = useState({
        skillLevel: 1,
        numberOfPlayers: 0,
        title: "",
        maker: "",
        gameTypeId: 0
    })

    /*
        Get game types on initialization so that the <select>
        element presents game type choices to the user.
    */
    useEffect(() => {
        getGameTypes()
    }, [])

    /*
        REFACTOR CHALLENGE START

        Can you refactor this code so that all property
        state changes can be handled with a single function
        instead of five functions that all, largely, do
        the same thing?

        One hint: [event.target.name]
    */
    const changeGameState = (event) => {
        const newGameState = { ...currentGame }
        newGameState[event.target.name] = event.target.value
        setCurrentGame(newGameState)
    }

    // const changeGameMakerState = (event) => {
    //     const newGameState = { ...currentGame }
    //     newGameState.maker = event.target.value
    //     setCurrentGame(newGameState)
    // }

    // const changeGamePlayersState = (event) => {
    //     const newGameState = { ...currentGame }
    //     newGameState.numberOfPlayers = event.target.value
    //     setCurrentGame(newGameState)
    // }

    // const changeGameSkillLevelState = (event) => {
    //     const newGameState = { ...currentGame }
    //     newGameState.skillLevel = event.target.value
    //     setCurrentGame(newGameState)
    // }

    const changeGameTypeState = (event) => {
        const newGameState = { ...currentGame }
        newGameState.gameTypeId = event.target.value
        setCurrentGame(newGameState)
    }
    /* REFACTOR CHALLENGE END */

    return (
        <>
        <article className="games">
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.title} by {game.maker}</div>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        <div className="game__skillLevel">Skill level is {game.skill_level}</div>
                    </section>
                })
            }
        </article>

        <button className="btn btn-2 btn-sep icon-create"
        onClick={() => {
            history.push("/games/new")
        }}
        >Register New Game</button>
</>

    )
}
