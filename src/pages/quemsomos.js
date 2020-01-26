import React from "react"
import { 
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardImg 
} from "reactstrap"
import MainNavBar from "../components/mainnavbar" 
import MainJumbotron from "../components/jumbotron" 
import "bootstrap/dist/css/bootstrap.min.css";

export default () => (
  <div>
    <MainNavBar />
    <MainJumbotron />
    <Container>
      <Row className="mb-3">
        <Col>
          <h1 className="display-3 text-dark text-center text_font_default font_variant_smallcaps">Quem somos</h1>
          <p className="text-center text_font_default"></p>
        </Col>
      </Row>
    </Container>
  </div>
)
