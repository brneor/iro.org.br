import React from "react"
import { Jumbotron } from "reactstrap"
import { 
  Container,
  Row,
  Col,
} from "reactstrap"
import MainNavBar from "../components/mainnavbar" 
import MainJumbotron from "../components/jumbotron" 
import Footer from "../components/mainfooter"
import "bootstrap/dist/css/bootstrap.min.css";

// O CSS da imagem está com 100% de largura e altura, dar atenção a isso.
export default () => (
  <div>
  <MainNavBar />
  <Jumbotron fluid className="hero hero_heidelberg"></Jumbotron>
    <Container>
        <Row className="mb-3">
            <Col>
            <h1 className="display-3 text-dark text-center text_font_tinos font_variant_smallcaps">Catecismo de Heidelberg</h1>
            <p className="text-center text_font_tinos"></p>
            </Col>
        </Row>
      {/* Rodapé */}
      <Footer />
    </Container>
  </div>
)
