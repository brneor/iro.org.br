import React from "react"
import Image from "../components/image"
import { Container, Col, Row } from "reactstrap"

const CustomFooter = (props) => {
  return (
    <div>
      <footer className="bg-dark text-light py-5 mt-5 footer text_font_default">
        <Container>
          <Row>
            <Col>
              <h1>Encontre-nos</h1>
              <p className="links">
                <a href="https://facebook.com/sola.scriptura500" target="blank"><Image src="images/facebook-icon.png" /></a>
                <a href="https://youtube.com/" target="blank"><Image src="images/youtube-icon.png" /></a>
                <a href="mailto:contato@iro.org.br" target="blank"><Image src="images/email-icon.png" /></a>
              </p>
            </Col>
            <Col>
              <h1>Conheça a Igreja</h1>
              <p className="info text_font_default">
                <span className="bold">Endereço</span>
                <span>Av. Sete, 1140</span>
                <span>Juiz de Fora MG, CEP: 36063-000</span>
              </p>

              <p className="info text_font_default">
                <span className="bold">Horário dos cultos</span>
                <span>Terça: 19h30</span>
                <span>Sexta: 19h30</span>
                <span>Domingo: 19h</span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col><p>© 2020 Igreja Reformada Ortodoxa</p></Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default CustomFooter;
