import React from "react";
import imgHero4 from "../../assets/images/photo4.jpg";
import imgHero1 from "../../assets/images/photo1.jpg";
import imgHero2 from "../../assets/images/photo2.jpg";
import imgHero3 from "../../assets/images/photo3.jpg";
import imgHero5 from "../../assets/images/photo5.jpg";
import "./HeroReveal.css";
import { Carousel, Col, Container } from "react-bootstrap";

const HeroReveal = () => {
  return (
    <section id="heroImgReveal">
      <Container fluid className="px-0 mb-3">
        <Col>
          {/* Carousel de imágenes */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 object-fit-cover"
                height={450}
                src={imgHero4}
                alt="Imagen de Agradecimiento"
              />
              <Carousel.Caption className="carousel-hero">
                <h5>
                  ¡Gracias a Dios!
                  {/* ¡Ya Casi Estoy Aquí! */}
                </h5>
                <p className="small">
                  {/* Con mucho amor, estoy contando los días para conocerlos */}
                  Te agradecemos, Señor, por protegernos, por darnos salud y por
                  permitirnos vivir este hermoso momento.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 object-fit-cover"
                height={450}
                src={imgHero1} // Agrega una nueva imagen
                alt="Una niña bonita"
              />
              <Carousel.Caption className="carousel-hero">
                <h5>¡Dios lo hizo posible!</h5>
                {/* <h5>¡Una Pequeña Gran Noticia!</h5> */}
                <p className="small">
                  Gracias por cuidar de nosotros y guiarnos en este hermoso
                  camino.
                  {/* Con tu bendición, nuestro sueño se está haciendo
                  realidad. */}
                </p>
                {/* <p className="small">
                  Muy pronto iluminaré su mundo con mi llegada🎉👣
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 object-fit-cover"
                height={450}
                src={imgHero2} // Agrega una nueva imagen
                alt="Un niño bonito"
              />
              <Carousel.Caption className="carousel-hero">
                <h5>¡La Espera Termina Pronto!</h5>
                <p className="small">
                  Estoy preparándome para ser el nuevo motivo de alegría en su
                  vida💗💙
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 object-fit-cover"
                height={450}
                src={imgHero3} // Agrega una nueva imagen
                alt="Un niño bonito"
              />
              <Carousel.Caption className="carousel-hero">
                <h5>¡Ya Vengo!</h5>
                <p className="small">
                  Estoy en camino, ansios@ por conocerlos y recibir su cariño
                  🎀🎈
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 object-fit-cover"
                height={450}
                src={imgHero5} // Agrega una nueva imagen
                alt="Un niño bonito"
              />
              <Carousel.Caption className="carousel-hero">
                <h5>¡Hola, Mundo!</h5>
                <p className="small">
                  Pronto estaré aquí para llenar sus días de amor y sonrisas
                  🎀💙
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Agrega más Carousel.Item para más imágenes */}
          </Carousel>{" "}
        </Col>
      </Container>
    </section>
  );
};

export default HeroReveal;
