import React from 'react'

const Container = ({ children }) => {
    return (
        <>
            <div className="mx-auto">
                {children}
            </div>
        </>
    )
}

export default Container