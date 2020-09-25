import React from 'react'
import './MatchTemplate.scss'

const MatchTemplate = (props) => {
    return (
        <div className="template">
            <div>{props.header}</div>
            <div>{props.children}</div>
        </div>
    )
}

export default MatchTemplate
