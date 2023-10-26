import React, { useEffect, useRef, useState } from 'react'
import Card from './Card';

const Body = () => {

    function downloadImage(url, name) {
        const link = document.createElement('a');
        link.href = url;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    const [currentCard, setCurrentCard] = useState(0);

    const handleDownload = () => {
        const imageUrl =
            'https://res.cloudinary.com/dyevylpk8/image/upload/v1697720742/Okpani_Francis%20CV.pdf'; // Replace with your image URL
        const imageName = 'OKPANI_FRANCIS_CV.pdf'; // Replace with your desired image name
        downloadImage(imageUrl, imageName);
    };
    const headingRef = useRef(null);


    const handleClick = () => {
        setCurrentCard((prevCard) => (prevCard + 1) % 4);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCard((prevCard) => (prevCard + 1) % 4);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    useEffect(() => {
        const texts = ['Web Designer', 'SC Developer', 'Web Developer'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            let currentText = texts[textIndex];

            if (!isDeleting) {
                currentText = currentText.substring(0, charIndex + 1) + "|";
            }

            headingRef.current.textContent = currentText;

            if (!isDeleting && charIndex === currentText.length - 1) {
                isDeleting = true;
                setTimeout(type, 1000); // Delay before starting the deletion
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 200); // Delay before typing the next text
            } else if (isDeleting) {
                charIndex--;
                setTimeout(type, 100); // Deleting speed (adjust as needed)
            } else {
                charIndex++;
                setTimeout(type, 100); // Typing speed (adjust as needed)
            }
        };

        type();
    }, []);



    return (
        <div id="main" className="site-main">
            <div id="main-content" className="single-page-content">
                <div id="primary" className="content-area">
                    <div id="content" className="page-content site-content single-post" role="main">
                        {/* <!-- Home Page Top Part --> */}
                        <div className="row">
                            <div className=" col-xs-12 col-sm-12">
                                <div className="home-content">
                                    <div className="row flex-v-align">

                                        <div className="col-sm-12 col-lg-5">
                                            <div className="home-photo">
                                                <div className="hp-inner" style={{ backgroundImage: `url(${require("../../images/pablo-codes.png")})`, backgroundPosition: "calc(50% + -2.88319px) calc(50% + 6.05079px)" }}>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-lg-7">
                                            <div className="home-text hp-left">
                                                <div className="owl-carousel text-rotation owl-loaded owl-drag">




                                                    <h2 style={{ color: '#007ced', textDecoration: 'underline', textAlign: 'center' }} ref={headingRef}></h2>
                                                    <h1 className='text'>Francis Okpani</h1>
                                                    <p className='text'>Hello, I'm Francis Okpani, a passionate MERN stack web developer and smart contracts developer. With a strong background in web development and a keen interest in blockchain technology, I specialize in creating dynamic and innovative digital solutions.</p>

                                                    <div className="home-buttons">
                                                        <button className="btn btn-primary" onChange={(e) => {

                                                        }} onClick={handleDownload}>Download CV</button>
                                                        <a href="https://wa.me/2349036543366" target="_self" className="btn btn-secondary">Contact</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Home Page Top Part --> */}

                            {/* <!-- Services --> */}
                            <div className="row">
                                <div className="col-xs-12 col-sm-12">
                                    <div className="p-50"></div>

                                    <div className="block-title">
                                        <h2>What I Do</h2>
                                        <p>
                                            As a skilled MERN stack web developer and smart contracts developer, I offer a range of services to help businesses and individuals achieve their digital goals.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">

                                <Card />




                            </div>
                            {/* <!-- /Services --> */}


                            <div className="p-40"></div>



                            <div className="p-40"></div>

                        </div>
                    </div>

                    {/* <!-- Fun Facts --> */}
                    <div className="row">
                        <div className="col-xs-12 col-sm-12">
                            <div className="block-title">
                                <h2>Fun Facts</h2>


                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="info-list-w-icon">
                                <div className="info-block-w-icon">
                                    <div className="ci-icon">
                                        <i className="linecons linecons-pen"></i>
                                    </div>

                                    <div className="ci-text">
                                        <h4>Dance Enthusiast</h4>
                                        <p>
                                            When I'm not immersed in the world of web development, you can find me on the dance floor. I love expressing myself through dance and enjoy exploring various styles, from hip-hop to salsa.
                                        </p>
                                    </div>
                                </div>

                                <div className="info-block-w-icon">
                                    <div className="ci-icon">
                                        <i className="linecons linecons-display"></i>
                                    </div>

                                    <div className="ci-text">
                                        <h4>Melodic Voice</h4>
                                        <p>Singing is another passion of mine. I find joy in belting out tunes and exploring different genres. Whether it's performing in the shower or simply singing along to my favorite songs, music is an integral part of my life.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6">
                            <div className="info-list-w-icon">

                                <div className="info-block-w-icon">
                                    <div className="ci-icon">
                                        <i className="linecons linecons-shop"></i>
                                    </div>

                                    <div className="ci-text">
                                        <h4> Movie Buff</h4>
                                        <p>I have a deep appreciation for the art of filmmaking. From classic masterpieces to the latest blockbusters, I love immersing myself in captivating storytelling and thought-provoking cinema. Ask me for movie recommendations anytime!</p>
                                    </div>
                                </div>

                                <div className="info-block-w-icon">
                                    <div className="ci-icon">
                                        <i className="linecons linecons-megaphone"></i>
                                    </div>

                                    <div className="ci-text">
                                        <h4>Debugging Detective</h4>
                                        <p>Troubleshooting code is like solving a puzzle for me. I thoroughly enjoy diving into complex problems and helping others debug their code. It's rewarding to unravel the mystery and find elegant solutions to programming challenges.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-sm-3">
                                <div className="lm-info-block gray-default">
                                    <i className="linecons linecons-heart"></i>
                                    <h4>Happy Clients</h4>

                                    <span className="lm-info-block-value">2</span>
                                    <span className="lm-info-block-text"></span>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-3">
                                <div className="lm-info-block gray-default">
                                    <i className="linecons linecons-clock"></i>
                                    <h4>Working Hours</h4>
                                    <span className="lm-info-block-value">420</span>
                                    <span className="lm-info-block-text"></span>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-3 ">
                                <div className="lm-info-block gray-default">
                                    <i className="linecons linecons-star"></i>
                                    <h4>Awards Won</h4>
                                    <span className="lm-info-block-value">pending</span>
                                    <span className="lm-info-block-text"></span>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-3 ">
                                <div className="lm-info-block gray-default">
                                    <i className="linecons linecons-cup"></i>
                                    <h4>Tea Consumed</h4>
                                    <span className="lm-info-block-value">100</span>
                                    <span className="lm-info-block-text"></span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Fun Facts --> */}

                        <div className="p-40"></div>

                        {/* <!-- Pricing --> */}
                        <div className="row">
                            <div className=" col-xs-12 col-sm-12 ">
                                <div className="block-title">
                                    <h2>Pricing</h2>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className=" col-xs-12 col-sm-12 ">
                                <div className="fw-pricing clearfix row">

                                    <div className="fw-package-wrap col-md-4 ">
                                        <div className="fw-package">
                                            <div className="fw-heading-row">
                                                <span>Bronze</span>
                                            </div>

                                            <div className="fw-pricing-row">
                                                <span>$64</span>
                                                <small>per month</small>
                                            </div>
                                            <div className="fw-default-row">Website design and development.</div>
                                            <div className="fw-default-row">Front-end development.</div>
                                            <div className="fw-default-row">Website development (simple).</div>
                                        </div>
                                    </div>

                                    <div className="fw-package-wrap col-md-4 highlight-col ">
                                        <div className="fw-package">
                                            <div className="fw-heading-row">
                                                <span>Silver</span>
                                            </div>

                                            <div className="fw-pricing-row" >
                                                <span>$128</span>
                                                <small>per month</small>
                                            </div>
                                            <div className="fw-default-row">Complex web apps with MERN stack.</div>
                                            <div className="fw-default-row">Scalable, secure web apps.</div>
                                            <div className="fw-default-row"> Website maintenance and updates.</div>
                                            <div className="fw-default-row">Web apps optimized for performance and SEO.</div>
                                        </div>
                                    </div>

                                    <div className="fw-package-wrap col-md-4 default-col " style={{ cursor: "not-allowed" }}>
                                        <div className="fw-package">
                                            <div className="fw-heading-row">
                                                <span>Gold</span>
                                            </div>

                                            <div className="fw-pricing-row">
                                                <span>$256</span>
                                                <small>per month</small>
                                            </div>
                                            <div className="fw-default-row">Custom MERN stack solutions.</div>
                                            <div className="fw-default-row">Lead MERN stack teams.</div>
                                            <div className="fw-default-row">MERN stack architecture consulting.</div>
                                            <div className="fw-default-row">MERN stack performance optimization.</div>
                                            <div className="fw-default-row">MERN stack security audits.</div>
                                            <del>Not Possible for now </del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /Pricing --> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Body