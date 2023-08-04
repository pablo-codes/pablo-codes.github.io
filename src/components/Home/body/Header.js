import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const path = useLocation()


    const [about, SetAbout] = useState('0.55')
    const [contact, SetContact] = useState('0.55')
    useEffect(() => {
        const url = path.pathname
        if (url == "/contact") {
            SetAbout("0.55")
            SetContact("1")
        }
        else {
            SetAbout('1')
            SetContact("0.5")
        }
        console.log(path.pathname)
    }, [])


    return (

        <header id="site_header" className="header">
            <div className="header-content clearfix">

                {/* <!-- Text Logo --> */}
                <div className="text-logo">
                    <a href="https://lmpixels.com/demo/leven-html-new/full-width-light/index.html">
                        <div className="logo-symbol">F</div>
                        <div className="logo-text">Francis <span>Okpani</span></div>
                    </a>
                </div>
                {/* <!-- /Text Logo --> */}

                {/* <!-- Navigation --> */}
                <div className="site-nav mobile-menu-hide">
                    <ul className="leven-classic-menu site-main-menu">
                        <li className="menu-item ">
                            <a href="/" style={{ opacity: `${about}` }}>About Me</a>

                        </li>

                        {/* <li className="menu-item">
                            <a href="#/portfolio">Portfolio</a>
                        </li> */}



                        <li className="menu-item" >
                            <a href="#/contact" style={{ opacity: `${contact}` }}>Contact</a>
                        </li>
                    </ul>
                </div>

                {/* <!-- Mobile Menu Toggle --> */}
                <a className="menu-toggle mobile-visible">
                    <i className="fa fa-bars"></i>
                </a>
                {/* <!-- Mobile Menu Toggle --> */}
            </div>
        </header>
        // <!-- /Header -->
    )
}

export default Header