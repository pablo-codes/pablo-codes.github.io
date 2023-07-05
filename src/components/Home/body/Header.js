import React from 'react'

const Header = () => {
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
                        <li className="menu-item menu-item-has-children current-menu-item">
                            <a href="/">About Me</a>

                        </li>

                        <li className="menu-item">
                            <a href="#/portfolio">Portfolio</a>
                        </li>



                        <li className="menu-item">
                            <a href="#/contact">Contact</a>
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