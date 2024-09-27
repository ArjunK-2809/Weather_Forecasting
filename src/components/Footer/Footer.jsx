import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="">
                <div className="footer-data">
                    <div className="locn" style={{display:'flex', flexDirection:'column'}}>
                        <h3 style={{textAlign:'center'}}>IIT PALAKKAD</h3>
                        <a target='blank' href="https://maps.google.com/maps?q=Nila+Campus,Kanjikode,Kerala+678623"><i className="fas fa-map-marker-alt"></i> Nila Campus, Kanjikode, Kerala 678623</a>
                    </div>

                    <div className="" style={{display:'flex', flexDirection:'column'}}>
                        <h5 style={{textAlign:'center'}}>Reach Us</h5>
                        <div className="footer-icons">
                            <a target='blank' href="https://www.instagram.com/yacc.iitpkd"><i className="fa-brands fa-instagram"></i></a>
                            <a target='blank' href="https://discord.gg/sVtEgQCqCk"><i className="fa-brands fa-discord"></i></a>
                            <a target='blank' href="https://chat.whatsapp.com/HkDMUJbL2pUGonK18Hw0hM"><i className="fa-brands fa-whatsapp"></i></a>
                            <a target='blank' href="https://www.linkedin.com/in/yacc-yet-another-coding-club-b10a7a241"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="" style={{display:'flex', flexDirection:'column'}}>
                        <h5 style={{textAlign:'center'}}>Contact Us</h5>
                        <a href='mailto:yacc@iitpkd.ac.in' style={{textDecoration: 'none', color:'white'}}>
                            <i className="fa-solid fa-envelope"></i> yacc@iitpkd.ac.in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer