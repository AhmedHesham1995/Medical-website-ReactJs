import { Container,Row } from "react-bootstrap";
import foot from '../../assets/foot.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import face from '../../assets/face.png';
import twitter from '../../assets/twitter.png';
import insta from '../../assets/insta.png';
import linked from '../../assets/linked.png';
import { Link } from "react-router-dom";
import './Footer.css'
function Footer(){
    return(
        <footer>
            <Container>
                <Row>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <img src={foot} alt=""/>
                        <p>
                            Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.
                        </p>
                        <div className="cont">
                            <div className="icon"><FontAwesomeIcon icon={faPhone}/></div>
                            <div className="number">
                                <h5>
                                    Contact Us
                                </h5>
                                <h4>
                                    +01 123 456 7890
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link href="#">About Us</Link></li>
                            <li><Link href="#">Services</Link></li>
                            <li><Link href="#">Booking</Link></li>
                            <li><Link href="#">Faq's</Link></li>
                            <li><Link href="#">Blogs</Link></li>
                            <li><Link href="#">Out Team</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                    <h3>Our Service</h3>
                        <ul>
                            <li>Dental Care</li>
                            <li>Cardiac Clinic</li>
                            <li>Massege Therapy</li>
                            <li>Cardiology</li>
                            <li>Precise Diagnosis</li>
                            <li>Abmbulance Services</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 subscribe">
                        <h3>Subcribe</h3>
                        <form>
                            <input type="email" placeholder="Email address"/>
                            <input type="submit" value="Subscribe Now"/>
                        </form>
                        <div className="social">
                            <div><Link href="#"><img src={face} alt=""/></Link></div>
                            <div><Link href="#"><img src={twitter} alt=""/></Link></div>
                            <div><Link href="#"><img src={insta} alt=""/></Link></div>
                            <div><Link href="#"><img src={linked} alt=""/></Link></div>
                        </div>
                        <span>+</span>
                    </div>
                    <hr/>
                    <div className="copy">Copyright © 2022 Design & Developed by <span>ThemeTrades</span></div>
                </Row>
            </Container>
        </footer>
        
    )
}

export default Footer