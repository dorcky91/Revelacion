import React from "react";
import { Col, Row, Container, Carousel } from "react-bootstrap";
import gracias from "../../assets/images/gracias.png";
import agradecimiento from "../../assets/images/agradecimiento.png";
import girl from "../../assets/images/girl.png"; // Otra imagen de ejemplo
import boy from "../../assets/images/boy.png"; // Otra imagen de ejemplo
import "./Agradecimiento.css";

const Agradecimiento = () => {
  return (
    <section id="sectionAgradecimiento">
      <h1 id="title-agradecimiento">Agradecimiento</h1>
      <Container fluid py-5>
        <Row>
          <Col id="card-agradecimiento">
            <img id="agradecimientoIcon" src={gracias} alt="Gracias" />
            <p className="descripcion-agradecimiento text-start mb-4">
              Gracias de antemano por ser parte de este momento tan especial
              para nosotros. Nos llena de emoción compartir con ustedes la
              revelación del sexo de nuestro bebé. Su compañía hace este día aún
              más significativo.
            </p>

            {/* Carousel de imágenes */}
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 object-fit-cover"
                  height={450}
                  src={agradecimiento}
                  alt="Imagen de Agradecimiento"
                />
                <Carousel.Caption className="carousel-caption">
                  <h5>Dos Corazones, Un Latido</h5>
                  <p className="small">
                    Nuestro amor crece cada día y ahora tiene un latido propio.
                    ¡Seremos papás!
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 object-fit-cover"
                  height={450}
                  src={girl} // Agrega una nueva imagen
                  alt="Una niña bonita"
                />
                <Carousel.Caption className="carousel-caption">
                  <h5>La Aventura Comienza</h5>
                  <p className="small">
                    Estamos listos para vivir el capítulo más hermoso de nuestra
                    historia: ser padres.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 object-fit-cover"
                  height={450}
                  src={boy} // Agrega una nueva imagen
                  alt="Un niño bonito"
                />
                <Carousel.Caption className="carousel-caption">
                  <h5>Un Regalo de Amor</h5>
                  <p className="small">
                    El milagro de la vida llegó para recordarnos que los sueños
                    sí se cumplen.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              {/* Agrega más Carousel.Item para más imágenes */}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Agradecimiento;
