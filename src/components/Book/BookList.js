import React, {useEffect, useState} from 'react'
import {booksSearch} from '../../utills/api'
import Book from './Book'
import {priceCompare} from '../../utills/priceCompare'
import ReactPaginate from "react-paginate"
import './BookList.css'

const BookList = (props) => {
  const [ data, setData ] = useState(null)
  const { keyword, price, priceStatus, page, setPage } = props
  const [ totalPage, setTotalPage ] = useState(null)
  
  const getData = async () => {
      const params = {
        query: keyword,
        sort: "accuracy",
        size : 10,
        page : page+1
      }
  
      const { data } = await booksSearch(params)
      setData(data.documents)
      setTotalPage(data.meta.pageable_count)
    }

    const changePage = (num) => {
      setPage(num.selected)
    }

    useEffect(() => {
      getData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
      getData()
      setPage(0)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyword])

    useEffect(() => {
      getData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    return (
      <div>
        <div>
            {data &&
            !data.error &&
            data.map((d,i) => 
              !priceStatus ?
              <Book key={i} data={d}/>
              :
              d.sale_price !== -1 ?
              priceCompare(price, d.sale_price) && <Book key={i} data={d}/>
              :priceCompare(price, d.price) && <Book key={i} data={d}/>
            )}
          </div>
            <ReactPaginate
              pageCount={Math.ceil(totalPage/10)}
              pageRangeDisplayed={11}
              marginPagesDisplayed={0}
              breakLabel={""}
              previousLabel={"이전"}
              nextLabel={"다음"}
              onPageChange={changePage}
              containerClassName={"pagination"}
              activeClassName={"active"}
              subContainerClassName={'pages pagination'}
              initialPage={0}
              forcePage={page}>
            </ReactPaginate>
        </div>
    )
}

export default BookList