import React from "react"
import { Jumbotron } from "reactstrap"
import { 
  Container,
  Row,
  Col,
} from "reactstrap"
import MainNavBar from "../components/mainnavbar" 
import Footer from "../components/mainfooter"
import "bootstrap/dist/css/bootstrap.min.css";

// O CSS da imagem está com 100% de largura e altura, dar atenção a isso.
export default () => (
  <div>
  <MainNavBar />
  <Jumbotron fluid className="hero hero_dort"></Jumbotron>
    <Container>
        <Row className="mb-3">
            <Col>
            <h1 className="display-3 text-dark text-center text_font_default font_variant_smallcaps">Cânones de Dort</h1>
            <p className="text-center text_font_default"></p>
            </Col>
        </Row>
      {/* Rodapé */}
      <Footer />
    </Container>
  </div>
)
