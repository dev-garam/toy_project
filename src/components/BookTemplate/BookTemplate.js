import React from 'react'

const BookTemplate = (props) => {
    return (
        <div>
            <div className="template">
            <div>{props.header}</div>
            <div>{props.children}</div>
        </div>
        </div>
    );
};

export default BookTemplate