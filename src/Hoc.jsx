import React from 'react'

// eslint-disable-next-line no-unused-vars
const Hoc = (WrapedComponent) => {
    return function(){
        return(
            <div>
                <p>new component</p>
                <WrapedComponent name={"apputan"}/>

            </div>
        )
    }
}

export default Hoc
