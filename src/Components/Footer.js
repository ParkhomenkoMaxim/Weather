import React, { Component } from "react";
import { Col, Container, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../cssModules/Footer.css';


class Footer extends Component {

  render() {
    return (
      <div className = "footerTop">
      <a name="footer"></a>
       <Container >
                    <Row className="pt-5 mb-3 text-center d-flex justify-content-center">
                        <Col md="2" className="b-3">
                            <h6><a className = "fontUp" href="#!">About</a></h6>
                        </Col>
                        <Col md="2" className="b-3">
                            <h6><a className = "fontUp" href="#!">Products</a></h6>
                        </Col>
                        <Col md="2" className="b-3">
                            <h6><a className = "fontUp" href="#!">Somewhere</a></h6>
                        </Col>
                        <Col md="2" className="b-3">
                            <h6><a className = "fontUp" href="#!">Help</a></h6>
                        </Col>
                        <Col md="2" className="b-3">
                            <h6><a className = "fontUp" href="#!">Contact</a></h6>
                        </Col>
                    </Row>

                  	  <hr style = {{ borderColor: 'gray',margin: '0 15%'}}/> 

                    <Row className="d-flex text-center justify-content-center mb-md-0 mb-4">
                        <Col md="8" sm="12" className="mt-5">
                            <p className = "text-white" style={{lineHeight: '1.7rem'}}>Не самый нужный футер sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                        aut fugit, sed quia consequuntur.</p></Col>
                    </Row>

             		  <hr className="clearfix d-md-none " style={{margin: '10% 15% 5%'}}/>

                    <Row className="pb-3">
                        <Col md="12">                       
                            <div className="mb-2 mt-2 d-flex justify-content-center">
                                <a href = "https://uk-ua.facebook.com/" target="_blank"  rel="noopener noreferrer">
                                <FontAwesomeIcon icon={["fab","facebook"]} className = "fa-2x mr-md-4 text-white" />
                                </a>
                                <a href = "https://twitter.com/?lang=ru" target="_blank"  rel="noopener noreferrer">
                                <FontAwesomeIcon icon={["fab","twitter"]} className = "fa-2x mr-md-4 text-white"/>
                                </a>
                                <a href = "https://plus.google.com/discover" target="_blank"  rel="noopener noreferrer">
                                <FontAwesomeIcon icon={["fab","google-plus"]} className = "fa-2x mr-md-4 text-white" />
                                </a>
                                <a href = "https://www.instagram.com/?hl=ru" target="_blank"  rel="noopener noreferrer">
                                <FontAwesomeIcon icon={["fab","instagram"]} className = "fa-2x mr-md-4 text-white"/>
                                </a>
                                <a href = "https://ru.linkedin.com/" target="_blank"  rel="noopener noreferrer">
                                <FontAwesomeIcon icon={["fab","linkedin"]} className = "fa-2x text-white"/>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
                <div className= "footerBottom text-center pt-3 pb-1 " >
                    <Container fluid>
                       <p className = "text-white">Данные взяты с <a href = "https://openweathermap.org/" className = "link">Openweathermap.org</a></p>
                    </Container>
                </div>
      </div>
    );
  }
}


export default Footer;