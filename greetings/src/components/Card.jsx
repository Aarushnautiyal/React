import React from 'react'

export default function Card({name,id,email}) {
    return (
            <div className='card'>
                <img src={`https://robohash.org/${id}`} alt="avatar" />
                <h1>{name}</h1>
                <h2>{email}</h2>
            </div>
    )
}
