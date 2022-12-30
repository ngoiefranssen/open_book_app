import React from 'react'

const Main = () =>{
    return(
        <>
        <div className='header'>
            <div className='row1'>
                <h1>A room without book is like <br/> a boby without a soul</h1>
            </div>
            <div className='row2'>
                <h2>Find your book</h2>
                <div className='search'>
                    <input type='text' placeholder='Enter your book name....' />
                </div>
            </div>
        </div>
        </>
    );
};

export default Main