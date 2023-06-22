import { Container,Row } from "react-bootstrap"
import doc from '../../assets/docHome.png'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faSquare } from '@fortawesome/free-solid-svg-icons'
function Home(){
    return(
        <>
            <header>
                <Container>
                    <Row>
                        <div className="col-md-7 left">
                            <h5>We Provide All Health Care Solution</h5>
                            <h2>Protect Your Health And Take Care To Of Your Health</h2>
                            <button><a href="#">Read More</a></button>
                        </div>
                        <div className="col-md-5">
                            <div className="right">
                                <img src={doc} alt="doctor"/>
                                <FontAwesomeIcon icon={faSquare}/>
                                <span>+</span>
                            </div>
                        </div>
                    </Row>
                </Container>
            </header>
        </>
    )
}
export default Home