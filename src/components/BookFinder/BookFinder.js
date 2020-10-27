import React, { useState } from 'react'

const BookFinder = (props) => {
    const { keyword, setKeyword, setPrice, setPriceStatus } = props
    const [ search, setSearch ] = useState(keyword)
    const [ searchingPrice, setSchingPrice ] = useState({st:'', ed:''})

    const handleSubmit = e => {
        e.preventDefault()
        setKeyword(search)
        setPrice({
            st : searchingPrice.st,
            ed : searchingPrice.ed
        })
        searchingPrice.st !== '' && searchingPrice.ed !== '' ?
        setPriceStatus(true) : setPriceStatus(false)
    }

    const priceOnchange = e => {
        const { name, value } = e.target
        setSchingPrice({
            ...searchingPrice,
            [name]:value
        })
    }
    return (
        <div>
            검색어 입력 <input type="text"
            defaultValue={keyword}
            onChange={e => setSearch(e.target.value)} />
            <div>
                가격 필터링 <input type="number" name="st" onChange={priceOnchange}/> - <input type="number" name="ed" onChange={priceOnchange}/>
            </div>

            <button type="button"
            className="btn"
            onClick={ handleSubmit }>검색</button>
        </div>
    );
};

export default BookFinder