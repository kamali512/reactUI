import React from 'react'
import "./card.css"
const Card = ()  => {
    return (
        <div className="container">
            <div className="row">
                <div className='col-md-4'>
                    <header className=' main-header'>
                        <div className='main-navbar'>
                            <h1>React JS</h1>
                        </div>
                        <section className='main-section'>
                            <h1>Hello React</h1>
                        </section>
                    </header>
                </div>


                <div className='col-md-4'>
                    <header className=' main-header'>
                        <nav className='main-navbar'>
                            <h1>React JS</h1>
                        </nav>
                        <section className='main-section'>
                            <h1>Hello React</h1>
                        </section>
                    </header>
                </div>

                <div className='col-md-4'>
                    <header className=' main-header'>
                        <nav className='main-navbar'>
                            <h1>React JS</h1>
                        </nav>
                        <section className='main-section'>
                            <h1>Hello React</h1>
                        </section>
                    </header>
                </div>
        
            </div>
        </div>
    )
}

export default Card;