import React from 'react'
import { BsGithub, BsLinkedin, BsDiscord } from 'react-icons/bs'
const Footer = () => {
    return (
        <footer className="site-footer clearfix">
            <div className="footer-social">
                <ul className="footer-social-links">
                    <li>
                        <a href="https://github.com/pablo-codes" target="_blank"><BsGithub /></a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/francis-okpani" target="_blank"><BsLinkedin /></a>
                    </li>

                    <li>
                        <a href="https://discord.com/users/pablo-codes" target="_blank"><BsDiscord /></a>
                    </li>
                </ul>
            </div>

            <div className="footer-copyrights">
                <p>© 2023 All rights reserved. pablo-codes</p>
            </div>
        </footer>
    )
}

export default Footer