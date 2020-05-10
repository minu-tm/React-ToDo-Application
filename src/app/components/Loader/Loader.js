import React from 'react';
import '../Loader/Loader.css'

const loader = ()=>{
    return(
        <div id="myDiv" className="animate-bottom">
            <h2>Tada!</h2>
            <p>Loading....</p>
        </div>
    )
}

export default loader;