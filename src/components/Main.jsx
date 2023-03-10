import React from 'react'
import Card from './card/Card';

const Main = () => {
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
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <img src="./images/imgbook_2.jpeg" alt="" />
                </div>
            </div>
            <div className="container">
                <Card />
            </div>
        </>
    );
}; 

export default Main