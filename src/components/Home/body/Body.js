import React, { useEffect, useRef } from 'react'
import img from '../../images/pablo-codes.png'
const Body = () => {

    function downloadImage(url, name) {
        const link = document.createElement('a');
        link.href = url;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const handleDownload = () => {
        const imageUrl = 'https://res.cloudinary.com/dyevylpk8/image/upload/v1688570985/OKPANI_FRANCIS_CV_poxotc.pdf'; // Replace with your image URL
        const imageName = 'OKPANI_FRANCIS_CV.pdf'; // Replace with your desired image name
        downloadImage(imageUrl, imageName);
    };
    const headingRef = useRef(null);

    useEffect(() => {
        const texts = ['Web Designer', 'Smart Contract Developer', 'Web Developer'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentText = texts[textIndex];
            if (isDeleting) {
                headingRef.current.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                headingRef.current.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, 1000); // Delay before starting the deletion
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 200); // Delay before typing the next text
            } else {
                setTimeout(type, 100); // Typing speed (adjust as needed)
            }
        };

        type();
    }, []);

    // return (
    //     <button onClick={handleDownload}>Download Image</button>
    // );




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

                                        <div className="col-sm-12 col-md-5 col-lg-5">
                                            <div className="home-photo">
                                                <div className="hp-inner" style={{ backgroundImage: `url(${img})`, backgroundPosition: "calc(50% + -2.88319px) calc(50% + 6.05079px)" }}>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-7 col-lg-7">
                                            <div className="home-text hp-left">
                                                <div className="owl-carousel text-rotation owl-loaded owl-drag">




                                                    <h2 style={{ color: '#007ced' }} ref={headingRef}></h2>


                                                    <h1>Francis Okpani</h1>
                                                    <p>Hello, I'm Francis Okpani, a passionate MERN stack web developer and smart contracts developer. With a strong background in web development and a keen interest in blockchain technology, I specialize in creating dynamic and innovative digital solutions</p>

                                                    <div className="home-buttons">
                                                        <button className="btn btn-primary" onClick={handleDownload}>Download CV</button>
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
                                        {/* 
                                        Consulting and Technical Guidance:

                                        Provide expert advice and guidance on web development and smart contracts.
                                        Assess project requirements and recommend optimal technology solutions.
                                        Offer insights on industry trends, best practices, and emerging technologies.
                                        Support you throughout the development lifecycle, from ideation to deployment. */}
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
                                                <h4>Web Development</h4>
                                                <p>
                                                    Build dynamic and responsive web applications using the MERN stack.
                                                    Develop custom features and functionalities to meet your specific requirements.
                                                    Ensure clean and efficient code that follows best practices and industry standards.
                                                    Optimize websites for performance, scalability, and user experience.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="info-block-w-icon">
                                            <div className="ci-icon">
                                                <i className="linecons linecons-display"></i>
                                            </div>

                                            <div className="ci-text">
                                                <h4>User Interface (UI) Design</h4>
                                                <p>Create visually stunning and intuitive user interfaces.
                                                    Design cohesive and engaging user experiences that align with your brand identity.
                                                    Develop wireframes and prototypes to bring your ideas to life.
                                                    Implement modern design trends and best practices to enhance usability and accessibility.</p>
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
                                                <h4>Smart Contracts Development</h4>
                                                <p>
                                                    Design and develop secure and efficient smart contracts on blockchain platforms.
                                                    Utilize Solidity and other relevant languages to create custom contract solutions.
                                                    Implement business logic and rules within smart contracts for decentralized applications.
                                                    Conduct rigorous testing and security audits to ensure contract reliability.</p>
                                            </div>
                                        </div>

                                        <div className="info-block-w-icon">
                                            <div className="ci-icon">
                                                <i className="linecons linecons-megaphone"></i>
                                            </div>

                                            <div className="ci-text">
                                                <h4>API Development and Integration</h4>
                                                <p>Design and develop robust APIs to facilitate seamless data exchange between applications.
                                                    Integrate third-party APIs and services to enhance functionality and expand capabilities.
                                                    Implement authentication and authorization mechanisms to ensure data security.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

                                    <span className="lm-info-block-value">578</span>
                                    <span className="lm-info-block-text"></span>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-3">
                                <div className="lm-info-block gray-default">
                                    <i className="linecons linecons-clock"></i>
                                    <h4>Working Hours</h4>
                                    <span className="lm-info-block-value">4,780</span>
                                    <span className="lm-info-block-text"></span>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-3 ">
                                <div className="lm-info-block gray-default">
                                    <i className="linecons linecons-star"></i>
                                    <h4>Awards Won</h4>
                                    <span className="lm-info-block-value">15</span>
                                    <span className="lm-info-block-text"></span>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-3 ">
                                <div className="lm-info-block gray-default">
                                    <i className="linecons linecons-cup"></i>
                                    <h4>Coffee Consumed</h4>
                                    <span className="lm-info-block-value">1,286</span>
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
                                                <span>Silver</span>
                                            </div>

                                            <div className="fw-pricing-row">
                                                <span>$64</span>
                                                <small>per month</small>
                                            </div>



                                            <div className="fw-default-row">Lorem ipsum dolor</div>
                                            <div className="fw-default-row">Pellentesque scelerisque</div>
                                            <div className="fw-default-row">Morbi eu sagittis</div>
                                        </div>
                                    </div>

                                    <div className="fw-package-wrap col-md-4 highlight-col ">
                                        <div className="fw-package">
                                            <div className="fw-heading-row">
                                                <span>Gold</span>
                                            </div>

                                            <div className="fw-pricing-row">
                                                <span>$128</span>
                                                <small>per month</small>
                                            </div>



                                            <div className="fw-default-row">Lorem ipsum dolor</div>
                                            <div className="fw-default-row">Pellentesque scelerisque</div>
                                            <div className="fw-default-row">Morbi eu sagittis</div>
                                            <div className="fw-default-row">Donec non diam</div>
                                            <div className="fw-default-row">
                                            </div>
                                        </div>
                                    </div>

                                    <div className="fw-package-wrap col-md-4 default-col ">
                                        <div className="fw-package">
                                            <div className="fw-heading-row">
                                                <span>Platinum</span>
                                            </div>

                                            <div className="fw-pricing-row">
                                                <span>$256</span>
                                                <small>per month</small>
                                            </div>

                                            <div className="fw-button-row">

                                            </div>

                                            <div className="fw-default-row">Lorem ipsum dolor</div>
                                            <div className="fw-default-row">Pellentesque scelerisque</div>
                                            <div className="fw-default-row">Morbi eu sagittis</div>
                                            <div className="fw-default-row">Donec non diam</div>
                                            <div className="fw-default-row">Aenean nec libero</div>
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