import React, { useState } from 'react'
import BookTemplate from './BookTemplate/BookTemplate'
import BookFinder from './BookFinder/BookFinder'
import Book from './Book/BookList'
const App = () => {
  const [ keyword, setKeyword ] = useState("귀욤뮈소")
  const [ price, setPrice ] = useState({st:'', ed:''})
  const [ priceStatus, setPriceStatus ] = useState(false)
  const [ page, setPage ] = useState(0)
  return (
    <div>
      <BookTemplate
        header={
        <BookFinder
          setKeyword={setKeyword}
          keyword={keyword}
          setPrice={setPrice}
          setPriceStatus={setPriceStatus}
      ></BookFinder>}
      >
        <Book
          keyword={keyword}
          price={price}
          priceStatus={priceStatus}
          page={page}
          setPage={setPage}
        ></Book>
      </BookTemplate>
    </div>
  )
}

export default App