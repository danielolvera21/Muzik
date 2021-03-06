import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faFacebook,
    faTwitter
} from "@fortawesome/free-brands-svg-icons"


function Footer() {
    return (
        <section className="footer">
            <h2>Made with Questionable Confidence by BMD Squared, Inc. </h2>
            <div className="social-container">

                <a href="https://github.com/danielolvera21/Muzik"
                    rel="noreferrer"
                    target="_blank"
                    className="Instagram">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>

                <a href="https://github.com/danielolvera21/Muzik"
                    rel="noreferrer"
                    target="_blank"
                    className="Facebook">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>

                <a href="https://github.com/danielolvera21/Muzik"
                    rel="noreferrer"
                    target="_blank"
                    className="Twitter">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>

            </div>
            <p> &copy; 2021 BMD Squared, Inc.</p>
        </section>
    );
}

export default Footer;