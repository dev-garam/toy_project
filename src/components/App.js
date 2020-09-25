import React, { useState } from 'react'
import MatchTemplate from './MatchTemplate/MatchTemplate'
import MatchFinder from './MatchFinder'
import Match from './Match'
import dateFormatter from '../utils/dateFormatter'
const App = () => {
    const [range, setRange] = useState({
        stDate: '',
        edDate: '',
    })
    const [leagueId, setLeagueId] = useState(148)

    const handleRange = (range) => {
        setRange({
            ...range,
            stDate: dateFormatter(range[0]),
            edDate: dateFormatter(range[1]),
        })
    }

    const handleLeagueId = (leagueId) => {
        setLeagueId(leagueId)
    }
    return (
        <div>
            <MatchTemplate
                header={
                    <MatchFinder
                        setRange={handleRange}
                        setLeagueId={handleLeagueId}
                        leagueId={leagueId}
                    ></MatchFinder>
                }
            >
                <Match
                    setLeagueId={handleLeagueId}
                    setRange={handleRange}
                    range={range}
                    leagueId={leagueId}
                ></Match>
            </MatchTemplate>
        </div>
    )
}

export default App
