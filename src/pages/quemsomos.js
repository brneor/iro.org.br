import React from "react"
import { Link } from "gatsby"
import { 
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
} from "reactstrap"
import MainNavBar from "../components/mainnavbar" 
import Footer from "../components/mainfooter"
import Image from "../components/image"
import MainJumbotron from "../components/jumbotron" 
import "bootstrap/dist/css/bootstrap.min.css";

export default () => (
  <div>
    <MainNavBar />
    <MainJumbotron />
    <Container>
      <Row className="mb-3">
        <Col id="confissao">
          <h1 className="display-3 text-dark text-center text_font_default font_variant_smallcaps">Quem somos</h1>
          <p><span className="smallcaps">Sola Scriptura</span> (somente as Escrituras): Cremos que a Bíblia Sagrada é a Palavra de Deus, a perfeita revelação de sua vontade ao homem e norma suprema para a prática e vivência cristãs. Sendo infalível, é a base de todo conhecimento e verdade para o cristão <cite>(2 Timóteo 3.16-17)</cite>.</p>

          <p><span className="smallcaps">Sola Gratia</span> (somente a graça): Cremos que a salvação dos homens se dá somente pela graça de Deus, isto é, pelo amor e santa aliança de Deus com seu povo. Desse modo, repudiamos a crença de que o homem é salvo unicamente por intermédio de suas boas obras; antes, sendo salvo por Cristo mediante a fé (que também é dom de Deus), o homem, movido pelo poder do Espírito Santo, é levado à prática de boas obras, não para sua salvação, mas para a promoção da glória de Deus. Assim, a salvação é um ato soberano de Deus, e não há nesse ato intervenção ou participação dos esforços humanos <cite>(Efésios 2.8-9; Jonas 2.9)</cite>.</p>

          <p><span className="smallcaps">Sola Fide</span> (somente a fé): cremos que os homens são justificados e salvos pela fé em Jesus, que é concedida por Deus. Não existe nada no homem natural e não regenerado que lhe recomende a Deus. Pelo contrário, como diz o apóstolo Paulo, todos pecaram e destituídos estão da glória de Deus. Logo, somente pela fé no sacrifício expiatório de Cristo Jesus é que podemos ser salvos <cite>(Efésios 2.8)</cite>.</p>

          <p><span className="smallcaps">Solus Christus</span> (somente Cristo): cremos que Jesus Cristo, verdadeiramente homem e verdadeiramente Deus, é o único Mediador entre Deus e os homens. Só o seu sangue derramado na cruz do Calvário nos permite a reconciliação com Deus Pai <cite>(Atos 4.12; 1 Timóteo 2.5; 2 Coríntios 5.19)</cite>.</p>

          <p><span className="smallcaps">Soli Deo Gloria</span> (somente a Deus a glória): cremos que só existe um Deus, que nos é revelado na Bíblia. Cremos, portanto, na Trindade, conforme definida nos credos históricos: três Pessoas distintas (Pai, Filho e Espírito Santo) que subsistem eternamente numa só essência, as quais são igualmente onipotentes, oniscientes e eternas. É somente a esse Deus único que o homem (sua criação) deve prestar todo louvor, honra e glória, já que o Senhor, o Deus dos patriarcas e da igreja, não admite dividir sua glória com outrem <cite>(Êxodo 20.3-5; Isaías 42.8)</cite>.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="display-3 text-dark text-center text_font_default font_variant_smallcaps">Nossos presbíteros</h1>
        </Col>
      </Row>
      <Row className="my-3 mx-auto">
        <Col>
          <Card className="border-0">
            <Image 
              src="images/Davi.jpg"
              height="240" 
              width="240"
              className="m-auto avatar-rounded"
            />
            <CardBody>
              <CardText className="text-center text_font_default font_variant_smallcaps ">
              Davi Peixoto
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="border-0">
            <Image 
              src="images/Fabricio.jpg"
              height="240" 
              width="240"
              className="m-auto avatar-rounded" 
            />
            <CardBody>
              <CardText className="text-center text_font_default font_variant_smallcaps ">
              Favrício Tavares
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="border-0">
            <Image 
              src="images/JoseCarlos.jpg"
              height="240" 
              width="240"
              className="m-auto avatar-rounded" 
            />
            <CardBody>
              <CardText className="text-center text_font_default font_variant_smallcaps ">
              José Carlos Bastos
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Footer />
    </Container>
  </div>
)
