import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { useHistory } from "react-router-dom"

export const GameList = () => {
    const history = useHistory()
    const { games, getGames } = useContext(GameContext)


    useEffect(() => {
        getGames()
    }, [])

    return (
        <>
        <article className="games">
        <header className="events__header">
                <h1>Level Up Games</h1>
            </header>
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
