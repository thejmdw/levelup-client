import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js"
import { GameForm } from "./game/GameForm.js"
import { GameProvider } from "./game/GameProvider.js"
import { EventList } from "./game/EventList.js"
import { EventForm } from "./game/EventForm.js"
import { EventProvider } from "./game/EventProvider.js"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <EventProvider>
            <GameProvider>
                <Route exact path="/games">
                    <GameList />
                </Route>

                <Route exact path="/games/new">
                    <GameForm />
                </Route>


                <Route exact path="/events">
                    <EventList />
                </Route>

                <Route exact path="/events/new">
                    <EventForm />
                </Route>
            
            </GameProvider>
            </EventProvider>
        </main>
    </>
}
