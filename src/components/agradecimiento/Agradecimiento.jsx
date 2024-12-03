import React from "react";
import { Col, Row, Container, Carousel } from "react-bootstrap";
import gracias from "../../assets/images/gracias.png";
import sesion1 from "../../assets/images/sesion1.jpg";
import sesion2 from "../../assets/images/sesion2.jpg";
import sesion4 from "../../assets/images/sesion4.jpg";
import sesion6 from "../../assets/images/sesion6.jpg";
import sesion9 from "../../assets/images/sesion9.jpg";
import "./Agradecimiento.css";

const Agradecimiento = () => {
  return (
    <section id="sectionAgradecimiento">
      <h1 id="title-agradecimiento">Agradecimiento</h1>
      <Container fluid>
        <Row>
          <Col id="card-agradecimiento">
            <img id="agradecimientoIcon" src={gracias} alt="Gracias" />
            <p className="descripcion-agradecimiento text-start mb-4">
              Hoy, con el corazón lleno de gratitud, celebramos la bendición de
              saber que un ser maravilloso está por llegar. Gracias a Dios por
              darnos la oportunidad de ser padres, por la protección que nos
              ofrece cada día y por el amor infinito que sentimos por este bebé.
            </p>

            {/* Carousel de imágenes */}
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block carousel-img w-100 object-fit-cover"
                  height={450}
                  src={sesion1}
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
                  className="d-block w-100 object-fit-cover ajustar-img"
                  height={450}
                  src={sesion2} // Agrega una nueva imagen
                  alt="Foto de pareja"
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
                  className="d-block carousel-img w-100 object-fit-cover"
                  height={450}
                  src={sesion4} // Agrega una nueva imagen
                  alt="Foto de pareja"
                />
                <Carousel.Caption className="carousel-caption">
                  <h5>Gracias, Señor, Por La Vida</h5>
                  <p className="small">
                    Con cada día que pasa, agradecemos a Dios por este bebé que
                    pronto llegará a nuestra vida. Gracias por guiarnos y
                    protegernos.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block carousel-img w-100 object-fit-cover"
                  height={450}
                  src={sesion6} // Agrega una nueva imagen
                  alt="Foto de pareja"
                />
                <Carousel.Caption className="carousel-caption">
                  <h5>Nuestra Aventura Comienza</h5>
                  <p className="small">
                    Viaje lleno de amor, sueños y emociones nos ha transformado.
                    Agradecemos a todos por acompañarnos y darnos fuerza.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block carousel-img w-100 object-fit-cover"
                  height={450}
                  src={sesion9} // Agrega una nueva imagen
                  alt="Foto de pareja"
                />
                <Carousel.Caption className="carousel-caption">
                  <h5>Pronto Seremos Tres</h5>
                  <p className="small">
                    Nuestra familia está por crecer, pero el amor que sentimos
                    el uno por el otro nunca dejará de expandirse.
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
