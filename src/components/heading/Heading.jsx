import React from 'react'

const Heading = ({title}) => {
    return (
        <div className='pb-7'>
            <h1 className='text-4xl font-bold mb-2  '>{title}</h1>
            <div className="w-10 h-1 outline-0 border-none bg-green-400 rounded-3xl"></div>
        </div>
    )
}

export default Heading;