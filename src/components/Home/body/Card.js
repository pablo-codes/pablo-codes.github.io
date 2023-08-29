import React, { useState } from "react";
import { useEffect } from "react";
import './Card.css'
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { TbTextResize } from 'react-icons/tb'
import { SiSolidity } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { RxDot } from 'react-icons/rx'

const Card = () => {
    const [currentCard, setCurrentCard] = useState(0);

    const handleClick = () => {
        setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
    };


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


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    const renderButtons =

        <>

            <RxDot style={{ color: "blue", height: "2rem", width: "2rem" }} />
            <RxDot style={{ color: "blue", height: "1.5rem", width: "1.5rem" }} />
            <RxDot style={{ color: "blue", height: "1.5rem", width: "1.5rem" }} />
            <RxDot style={{ color: "blue", height: "1.5rem", width: "1.5rem" }} />
        </>


    const renderCards = () => {
        return cards.map((card, index) => {
            const cardStyles = {
                display: currentCard === index ? 'block' : 'none',
            };
            let icon = null;

            if (card.title === 'Web Development') {
                icon = <HiOutlineComputerDesktop />;
            } else if (card.title === 'UI/UX Design') {
                icon = <TbTextResize />
            } else if (card.title === 'Smart Contracts Development') {
                icon = <SiSolidity />
            } else {
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
        <div className="info-list-w-icon">

            {renderCards()}
            {renderButtons}
            <button onClick={handleClick}>Next Card</button>
        </div>
    );
};

export default Card;
