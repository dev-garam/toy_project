import React from 'react'
import './Book.css'
import {numberFormat} from '../../utills/numberFormat'

const book = (props) => {
    const {
        authors,
        contents,
        datetime,
        price,
        publisher,
        sale_price,
        thumbnail,
        title,
        translators,
        url
    } = props.data
    
    return (
        <div className="book">
            <img
                className="thumbnail"
                src={thumbnail}
                alt="사진없음"
                
            />
            <div className="content">
                <a className="title"href={url}>
                    {title}
                </a>
                <p className="etc">
                    {`${authors} 지음 `}
                    <span className="txt_bar"> | </span>
                    {`${translators} 옮김`}
                    <span className="txt_bar"> | </span>
                    {publisher}
                    <span className="txt_bar"> | </span>
                    {datetime.substring(0,10)}
                </p>
                <p className="contents">
                    {contents}
                </p>
                <span className="price">
                    {`정가 : ${numberFormat(price)}원`}
                    <span className="txt_bar"> | </span>
                    {sale_price !== -1 && `판매가 : ${numberFormat(sale_price)}원`}
                </span>
            </div>
        </div>
    );
};

export default book;