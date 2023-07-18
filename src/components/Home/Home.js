import React from 'react'
import Body from './body/Body'
import Footer from './body/Footer'
import Header from './body/Header'
import '../../css/main.css'
// import '../../css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <div className="lm-animated-bg" style={{ backgroundPosition: "calc(50% + -2.88319px) calc(50% + 6.05079px)" }}></div>
            <div className="page-scroll">
                <div id="page_container" className="page-container bg-move-effect animated transition-flip-in-right" data-animation="transition-flip-in-right">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home