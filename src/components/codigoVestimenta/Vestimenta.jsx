import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import vestimentaIcon from "../../assets/images/vestimenta.png";
import camisaRosa from "../../assets/images/camisaRosa.png";
import camisaAzul from "../../assets/images/camisaAzul.png";
import "./Vestimenta.css";

const Vestimenta = () => {
  return (
    <section id="sectionVestimenta">
      <h1 id="title-vestimenta">Código de vestimenta</h1>
      <Container fluid>
        <Row>
          <Col id="card-vestimenta">
            <img id="vestimentaIcon" src={vestimentaIcon} />
            <div
              id="codigo-vestimenta"
              className="d-flex align-items-center justify-content-center gap-3 mb-4">
              <img src={camisaRosa} />
              <div>
                <h6 className="mb-0 team-azul">¿Team Azul?</h6>
                <h6 className="mb-0 or">O</h6>
                <h6 className="mb-0 team-rosa">¿Team Rosa?</h6>
              </div>
              <img src={camisaAzul} />
            </div>
            <p className="descripcion-vestimenta">
              ¡Deja que los colores de tu atuendo revelen tu predicción y únete
              a la diversión!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Vestimenta;
