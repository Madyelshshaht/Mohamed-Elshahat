import React from 'react'

const Skills_Card = ({img  , title }) => {
    return (
        <>
            <div className="card  text-white rounded-lg">
                <img src={img} alt="HTML_Img" style={{ objectFit: "fill" , aspectRatio: "2/2" , backgroundColor: "transparent" }} className='m-auto p-2 md:w-30 w-24 '/>
            </div>
        </>
    )
}

export default Skills_Card;

