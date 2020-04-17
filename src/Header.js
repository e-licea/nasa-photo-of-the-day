import React from 'react'

export default function Header(props) {

    const {date} = props;
    return (


        <div>
            <h1>NASA Photo of the Day</h1>
            <h3>{date}</h3>
        </div>
    )
}
