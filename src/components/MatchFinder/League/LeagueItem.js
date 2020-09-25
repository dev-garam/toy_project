import React, { Fragment } from 'react'
import './LeagueItem.scss'

const LeagueItem = (props) => {
    const { league_name, league_id, selected, setLeagueId } = props
    return (
        <div>
            <Fragment>
                <span
                    className={`league ${selected && 'selected'}`}
                    onClick={() => setLeagueId(league_id)}
                    style={{ cursor: 'pointer' }}
                >
                    {league_name}
                </span>
            </Fragment>
        </div>
    )
}

export default LeagueItem
