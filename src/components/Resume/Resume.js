import React from 'react'

const Resume = () => {
    return (


        <div id="main" className="site-main">
            <div id="main-content" className="single-page-content">
                <div id="primary" className="content-area">
                    <div className="page-title">
                        <h1>Portfolio</h1>
                        <div className="page-subtitle">
                            <h4>My Works</h4>
                        </div>
                    </div>

                    <div
                        id="content"
                        className="page-content site-content single-post"
                        role="main"
                    >
                        <div className="row">
                            <div className=" col-xs-12 col-sm-12 ">
                                {/* <!-- Portfolio Content --> */}
                                <div id="portfolio_content_q" className="portfolio-content">
                                    <ul className="portfolio-filters">
                                        <li className="active">
                                            <a
                                                className="filter btn btn-sm btn-link"
                                                data-group="category_all"
                                            >All</a
                                            >
                                        </li>
                                    </ul>

                                    {/* <!-- Portfolio Grid --> */}
                                    <div
                                        className="portfolio-grid three-columns shuffle"
                                        style={{ position: "relative", overflow: "hidden", height: "906.657px", transition: "height 450ms ease-out 0s" }}
                                    >
                                        {/* <!-- Portfolio Item 1 --> */}
                                        <figure
                                            className="item standard shuffle-item filtered"

                                            style={{
                                                position: "absolute", top: "0px", left: "0px", visibility: "visible", transition: "transform 450ms ease-out 0s, opacity 450ms ease-out 0s"
                                            }}>
                                            <div className="portfolio-item-img">
                                                <img
                                                    src={require('../../img/1.jpg')}
                                                    alt="Project 1"
                                                    title=""
                                                />
                                                <a
                                                    href="https://lmpixels.com/demo/leven-html-new/full-width-light/portfolio-project-2.html"
                                                    className="ajax-page-load"
                                                ></a>
                                            </div>

                                            <i className="far fa-file-alt"></i>
                                            <h4 className="name">Project 1</h4>
                                        </figure>
                                        <figure
                                            className="item lbaudio shuffle-item filtered"
                                            style={{ position: "absolute", bottom: "100%", right: "0px", visibility: "visible", opacity: "1", transform: "translate3d(0px, 302px, 0px) scale3d(1, 1, 1)", transition: "transform 450ms ease-out 0s, opacity 450ms ease-out 0s" }}
                                        >
                                            <div className="portfolio-item-img">
                                                <img
                                                    src={require('../../img/4.jpg')}
                                                    alt="Project 2"
                                                    title=""
                                                />
                                                <a
                                                    href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221650664&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
                                                    className="lightbox mfp-iframe"
                                                    title="Project 2"
                                                ></a>
                                            </div>

                                            <i className="fas fa-volume-up"></i>
                                            <h4 className="name">Project 2</h4>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume