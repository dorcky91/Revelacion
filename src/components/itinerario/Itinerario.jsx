import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import itinerarioIcon from "../../assets/images/itinerario.png";
import recepcion from "../../assets/images/recepcion.png";
import buffet from "../../assets/images/buffet.png";
import show from "../../assets/images/show.png";
import convivencia from "../../assets/images/convivencia.png";
import "./Itinerario.css";

const Itinerario = () => {
  return (
    <section id="sectionItinerario">
      <h1 id="title-itinerario">Itineraio</h1>
      <Container fluid py-5>
        <Row>
          <Col id="card-itinerario">
            <img id="itinerarioIcon" src={itinerarioIcon} />
            <div
              id="actividades"
              className="d-flex align-items-center gap-5 mb-3">
              <img src={recepcion} />
              <div>
                <p className="text-start mb-0">Bienvenid@ al evento</p>
                <p className="text-start mb-0">14:00 - 14:30</p>
              </div>
            </div>
            <div
              id="actividades"
              className="d-flex align-items-center gap-5 mb-3">
              <img src={buffet} />
              <div>
                <p className="text-start mb-0">Buffet</p>
                <p className="text-start mb-0">14:30 - 16:30</p>
              </div>
            </div>
            <div
              id="actividades"
              className="d-flex align-items-center gap-5 mb-3">
              <img src={show} />
              <div>
                <p className="text-start mb-0">Espectáculo y entretenimiento</p>
                <p className="text-start mb-0">17:00 - 17:45</p>
              </div>
            </div>
            <div
              id="actividades"
              className="d-flex align-items-center gap-5 mb-3">
              <img src={convivencia} />
              <div>
                <p className="text-start mb-0">Botanas y convivio</p>
                <p className="text-start mb-0">18:00 - En adelante</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Itinerario;
