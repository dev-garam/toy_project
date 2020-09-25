import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Match from './Match'
import dateFormatter from '../../utils/dateFormatter'
import * as key from '../../apikey'

const MatchList = (props) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const { range, leagueId } = props
    const getData = async () => {
        const { stDate, edDate } = range

        let to = ''
        let from = ''

        stDate ? (from = dateFormatter(stDate)) : (from = '2020-09-19')
        edDate ? (to = dateFormatter(edDate)) : (to = '2020-09-20')

        try {
            setLoading(true)
            const url = `https://apiv2.apifootball.com/?action=get_events&from=${from}&to=${to}&league_id=${leagueId}&APIkey=${key.apikey}`
            const response = await axios.get(url)
            setData(response.data)
        } catch (e) {
            console.error(e)
        }
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [range])

    useEffect(() => {
        getData()
    }, [leagueId])
    return (
        <div>
            {loading && <h2 style={{ textAlign: 'center' }}>data loading..</h2>}
            {!loading &&
                data &&
                !data.error &&
                data.map((d) => <Match key={d.match_id} data={d} />)}
        </div>
    )
}

export default MatchList
