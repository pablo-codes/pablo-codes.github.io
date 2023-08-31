import React, { useState } from "react";
import { useEffect } from "react";
import './Card.css'
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { TbTextResize } from 'react-icons/tb'
import { SiSolidity } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { RxDot, RxDotFilled } from 'react-icons/rx'

const Card = () => {
    const [currentCard, setCurrentCard] = useState(0);
    const [onDisplay, setDisplay] = useState(0)
    const [intervalId, setIntervalId] = useState(null)



    const cards = [
        {
            id: 1,
            title: "Web Development",
            content: `
          Build dynamic and responsive web applications using the MERN stack.
          Develop custom features and functionalities to meet your specific requirements.
          Ensure clean and efficient code that follows best practices and industry standards.
          Optimize websites for performance, scalability, and user experience.
        `,
            icon: HiOutlineComputerDesktop,
        },
        {
            id: 2,
            title: "UI/UX Design",
            content: `
          Create visually stunning and intuitive user interfaces.
          Design cohesive and engaging user experiences that align with your brand identity.
          Develop wireframes and prototypes to bring your ideas to life.
          Implement modern design trends and best practices to enhance usability and accessibility.
        `,
            icon: TbTextResize,
        },
        {
            id: 3,
            title: "Smart Contracts Development",
            content: `
          Design and develop secure and efficient smart contracts on blockchain platforms.
          Utilize Solidity and other relevant languages to create custom contract solutions.
          Implement business logic and rules within smart contracts for decentralized applications.
          Conduct rigorous testing and security audits to ensure contract reliability.
        `,
            icon: SiSolidity,
        },
        {
            id: 4,
            title: "API Development and Integration",
            content: `
          Design and develop robust APIs to facilitate seamless data exchange between applications.
          Integrate third-party APIs and services to enhance functionality and expand capabilities.
          Implement authentication and authorization mechanisms to ensure data security.
        `,
            icon: BsGlobe,
        },
    ];

    const restartInterval = () => {
        clearInterval(intervalId); // Clear the existing interval
        const newIntervalId = setInterval(() => {
            setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
            setDisplay((prevDis) => (prevDis + 1) % cards.length);
        }, 4000);
        setIntervalId(newIntervalId); // Set the new interval ID
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
            setDisplay((prevDis) => (prevDis + 1) % cards.length)

        }, 4000);
        setIntervalId(interval)
        return () => {
            clearInterval(interval);
        };
    }, []);
    const renderButtons = () => {
        return cards.map((_, index) => (
            < div key={index} style={{ display: "inline" }} >
                {onDisplay === index ? (
                    <RxDotFilled
                        style={{ color: 'blue', height: '2rem', width: '2rem' }}
                    />
                ) : (
                    <RxDot
                        onClick={() => {
                            setDisplay(index);
                            setCurrentCard(index);
                            setIntervalId()

                        }}
                        style={{ color: 'blue', height: '1.5rem', width: '1.5rem', display: "inline" }}
                    />
                )}
            </div>
        ))
    }

    const renderCards = () => {
        return cards.map((card, index) => {

            const cardStyles = {
                display: currentCard === index ? 'flex' : "none",
                // height: currentCard === index ? 'auto' : 0,
                visibility: currentCard === index ? 'visible' : 'hidden',
                opacity: currentCard === index ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out, height 0.5s ease-in-out',
                overflow: 'hidden'
            };
            let icon = null;
            const marg = document.querySelector(".block-title h2")

            if (card.title === 'Web Development') {
                // marg.style.setProperty('--marginsit', "25%")
                icon = <HiOutlineComputerDesktop />;
            } else if (card.title === 'UI/UX Design') {
                //marg.style.setProperty('--marginsit', "50%")
                icon = <TbTextResize />
            } else if (card.title === 'Smart Contracts Development') {
                //marg.style.setProperty('--marginsit', "75%")
                icon = <SiSolidity />
            } else {
                //marg.style.setProperty('--marginsit', "100%")
                icon = <BsGlobe />
            }

            return (
                <div key={card.id} className="info-block-w-icon" style={cardStyles}>

                    <div className="ci-icon">
                        {/* Render the chosen icon or a placeholder */}
                        {<i className="linecons linecons-shop">{icon} </i>}
                    </div>

                    <div className="ci-text">
                        <h4>{card.title}</h4>
                        <p>{card.content}</p>
                    </div>
                </div>
            );
        });
    }

    return (
        <div className="info-list-w-icon" style={{ alignContent: "center" }} >

            {renderCards()}
            <div style={{ textAlign: "center" }}>
                {renderButtons()}
            </div>

        </div>
    );
};

export default Card;
