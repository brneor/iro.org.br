import React from "react"
import { Container, Row, Col } from "reactstrap"
import MainNavBar from "../components/mainnavbar" 
import MainJumbotron from "../components/jumbotron" 
// import Hero from "../components/hero" 
import Image from "../components/image"
import "bootstrap/dist/css/bootstrap.min.css";

// O CSS da imagem está com 100% de largura e altura, dar atenção a isso.
export default () => (
  <div>
  <MainNavBar />
  <MainJumbotron />
    <Container>
      <Row className="mt-2 justify-content-center">
        <Col sm="12" md={{ size: 6, offset: 3 }} className="justify-content-center">
          <Image src="images/iro-logo-200.png"/>
        </Col>
      </Row>
      <Row>
        <Col>
        </Col>
      </Row>
    </Container>
  </div>
)
