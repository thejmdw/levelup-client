import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { EventContext } from "./EventProvider.js"
import { useHistory } from "react-router-dom"


export const EventForm = () => {
    const { games, getGames } = useContext(GameContext)
    const { createEvent } = useContext(EventContext)
    
    const history = useHistory()

    const [currentEvent, setCurrentEvent] = useState({
        gameId: 0,
        hostId: 0,
        description: "",
        date: "",
        time: ""
    })

    useEffect(() => {
        // Get all existing games from API
        getGames()
    }, [])

    const changeEventState = (e) => {
        // ...
        const newEventState = { ...currentEvent }
        newEventState[e.target.name] = e.target.value
        setCurrentEvent(newEventState)
    }
    
    const changeEventGameState = (e) => {
        // ...
        const newEventState = { ...currentEvent }
        newEventState.gameId = e.target.value
        setCurrentEvent(newEventState)
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Schedule New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="gameId">Game: </label>
                    <select name="gameId" className="form-control"
                        value={ currentEvent.gameId }
                        onChange={ changeEventGameState }>
                        <option value="0">Select a game...</option>
                        {
                            games.map(game => (
                                <option value={game.id}>{game.title}</option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentEvent.description}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input type="date" name="date" required autoFocus className="form-control"
                        value={currentEvent.date}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="time">Time: </label>
                    <input type="time" name="time" required autoFocus className="form-control"
                        value={currentEvent.time}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>

            {/* Create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()

                    // Create the event
                    const event = {
                        gameId: parseInt(currentEvent.gameId),
                        hostId: currentEvent.hostId,
                        description: currentEvent.description,
                        date: currentEvent.date,
                        time: currentEvent.time
                    }

                    // Send POST request to your API
                    createEvent(event)
                        .then(() => history.push("/events"))

                    // Once event is created, redirect user to event list
                }}
                className="btn btn-primary">Create Event</button>
        </form>
    )
}
