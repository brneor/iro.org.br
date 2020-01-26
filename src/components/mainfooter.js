import React from "react"
import Image from "../components/image"
import { Container, Col, Row } from "reactstrap"

const CustomFooter = (props) => {
  return (
    <div>
      <footer className="bg-dark text-light mt-5 footer text_font_default">
        <Container>
          <Row>
            <Col>
              <p><span class="smallcaps">Encontre-nos</span></p>
              <p className="links">
                <a href="mailto:contato@iro.org.br" target="blank" title="Email"><img src="/email-icon.svg" /></a>
                <a href="https://facebook.com/sola.scriptura500" target="blank" title="Facebook"><img src="/facebook-icon.svg" /></a>
                <a href="https://youtube.com/" target="blank" title="You Tube"><img src="/youtube-icon.svg" /></a>
              </p>
            </Col>
            <Col>
              <p><span class="smallcaps">Conheça a Igreja</span></p>
              <p className="info text_font_default">
                <span>Av. Sete, 1140</span>
                <span>Juiz de Fora MG, CEP: 36063-000</span>
              </p>

              <p className="info text_font_default">
                <span>Terça: 19h30</span>
                <span>Sexta: 19h30</span>
                <span>Domingo: 19h</span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col><p class="copyright">© 2020 Igreja Reformada Ortodoxa</p></Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default CustomFooter;
