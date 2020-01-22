import React from "react"
import { Link } from "gatsby"
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
import Carousel from "../components/carousel"
// import Hero from "../components/hero" 
import Image from "../components/image"
import Footer from "../components/mainfooter"
import "bootstrap/dist/css/bootstrap.min.css";

// O CSS da imagem está com 100% de largura e altura, dar atenção a isso.
export default () => (
  <div>
  <MainNavBar />
  <MainJumbotron />
    <Container>
      {/* Main content */}
      <Row className="mt-3 justify-content-center">
        <Col sm="12" md={{ size: 6 }} className="justify-content-center">
          <Image 
            src="images/iro-logo-200.png"
            height="200" 
            width="200"
            className="m-auto" 
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <h1 className="display-3 text-dark text-center text_font_tinos font_variant_smallcaps">A Igreja Reformada Ortodoxa</h1>
          <p className="text-center text_font_tinos">Somos uma comunidade cristã que crê e proclama o evangelho de Nosso Senhor Jesus Cristo, buscando manter vivas as tradições da Reforma Protestante, por meio de uma vida e ensino em conformidade à ortodoxia bíblica.</p>
        </Col>
      </Row>

      {/* Cards menores */}
      <Row className="mt-5">
        <Col>
          <h1 className="display-3 text-dark text-center text_font_tinos font_variant_smallcaps">Em que cremos</h1>
        </Col>
      </Row>
      <Row className="my-3 mx-auto">
        <Col>
          <Card className="border-0" tag={Link} to="/confissao_belga">
            <Image 
              src="images/belgic-confession.jpg"
              height="340" 
              width="340"
              className="m-auto"
            />
            <CardBody>
              <CardText className="text-center text_font_tinos font_variant_smallcaps ">
              Confissão Belga
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="border-0" tag={Link} to="/heidelberg">
            <Image 
              src="images/heidelberg.jpg"
              height="340" 
              width="340"
              className="m-auto" 
            />
            <CardBody>
              <CardText className="text-center text_font_tinos font_variant_smallcaps ">
              Catecismo de Heidelberg
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="border-0" tag={Link} to="/westminster">
            <Image 
              src="images/westminster.jpg"
              height="340" 
              width="340"
              className="m-auto" 
            />
            <CardBody>
              <CardText className="text-center text_font_tinos font_variant_smallcaps ">
              Confissão de fé de Westminster
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Carousel */}
      <Row className="justify-content-center my-2">
        <Col>
          <Carousel />
        </Col>
      </Row>

      {/* Rodapé */}
      <Footer />
    </Container>
  </div>
)
