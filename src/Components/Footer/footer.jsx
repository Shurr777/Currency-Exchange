import React from 'react';
import advertising from "../../assets/razmesti_reklamu_enl-2.png"
import {Overlay} from "./FooterStyle";

const Footer = () => {
    return (
        <Overlay>
            <img src={advertising} alt="Image"/>
        </Overlay>
    );
};

export default Footer;