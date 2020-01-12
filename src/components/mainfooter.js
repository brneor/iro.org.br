import React from "react"
import { Container, Col, Row } from "reactstrap"

const CustomFooter = (props) => {
  return (
    <div>
      <footer className="bg-dark text-light py-5 mt-5 footer">
        <Container>
          <Row>
            <Col>
              Texto do rodapé
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default CustomFooter;
