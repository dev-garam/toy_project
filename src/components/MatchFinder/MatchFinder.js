import React from 'react'
import Calendar from './Calendar'
import League from './League'

const MatchFinder = (props) => {
    return (
        <div>
            <League setLeagueId={props.setLeagueId} leagueId={props.leagueId} />
            <Calendar setRange={props.setRange} />
        </div>
    )
}

export default MatchFinder
