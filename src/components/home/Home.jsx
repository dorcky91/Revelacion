import React, { useEffect, useState, useRef } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import genero from "../../assets/images/genero.png";
import { motion } from "framer-motion";
import CountDown from "../countdown/CountDown";
import StartButton from "../startButton/StartButton";
import Confetti from "react-confetti";

import "./Home.css";

// Importa imágenes
import photo1 from "../../assets/images/sesion3.jpg";
import photo2 from "../../assets/images/sesion5.jpg";
import photo3 from "../../assets/images/sesion7.jpg";
import photo4 from "../../assets/images/sesion8.jpg";
import photo5 from "../../assets/images/sesion10.jpg";
import photo6 from "../../assets/images/sesion11.jpg";
import playIcon from "../../assets/images/play.png";
import pauseIcon from "../../assets/images/pausar.png";

// Importa la música de fondo
import backgroundMusic from "../../assets/audio/bebe.mp3";

const Home = () => {
  // Lista de imágenes con rutas importadas
  const images = [photo1, photo2, photo3, photo4, photo5, photo6];

  // Estados para la funcionalidad
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Índice de la imagen actual
  const [isPlaying, setIsPlaying] = useState(true); // Control de música
  const [showModal, setShowModal] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false); // Control de confetti

  const revealDate = new Date("2025-01-04T14:00:00"); // Fecha de la revelación

  // Referencia al audio
  const audioRef = useRef(new Audio(backgroundMusic));

  // Control de la música
  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.loop = true;
      audio
        .play()
        .catch((e) => console.error("Error reproduciendo música:", e));
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0; // Reinicia el audio al desmontar
    };
  }, [isPlaying]);

  // Cambiar imágenes de fondo
  useEffect(() => {
    let timeout;
    const interval = setInterval(() => {
      // Añadir la clase `hidden` para empezar la transición
      const bgElement = document.getElementById("bg-image-home");
      if (bgElement) {
        bgElement.classList.add("hidden");
      }

      // Esperar 500ms antes de cambiar la imagen (coincide con la duración de la transición)
      timeout = setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

        // Remover la clase `hidden` para mostrar la nueva imagen
        if (bgElement) {
          bgElement.classList.remove("hidden");
        }
      }, 500); // 500ms coincide con el tiempo de transición CSS
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [images.length]);

  // Pre-cargar imágenes
  useEffect(() => {
    const preloadImages = (imageArray) => {
      imageArray.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages(images);
  }, [images]);

  // Reproducir música
  const playMusic = () => {
    const audio = audioRef.current;
    audio.loop = true;
    audio
      .play()
      .catch((err) => console.error("Error al reproducir música:", err));
  };

  // Cerrar el modal y reproducir la música
  const handleModalClose = () => {
    setShowModal(false);
    playMusic();
    setShowConfetti(true); // Muestra el confeti

    // Ocultar el confeti después de 5 segundos
    setTimeout(() => setShowConfetti(false), 10000);
  };

  return (
    <section id="home">
      {/* Confetti */}
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      {/* Modal emergente */}
      <Modal
        className="modalHome"
        style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
        show={showModal}
        onHide={handleModalClose}
        centered
        backdrop="static" // No permite cerrar clickeando fuera
        keyboard={false}>
        <Modal.Header className="bg-dark" closeButton>
          <Modal.Title>¡Bienvenid@!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <p>
            Mis papis y yo te invitamos a descubrir cuál será mi género 👼🏼👶🏼
          </p>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="primary" onClick={handleModalClose}>
            Entrar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Fondo dinámico */}
      <div
        id="bg-image-home"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}></div>
      <Container fluid className="pb-5">
        <Row className="mb-5">
          <Col>
            <div id="entrada">
              <h1 className="nombre-papa">Orlando</h1>
              <h1 className="separar-nombre">&</h1>
              <h1 className="nombre-mama">Anette</h1>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="descripcion">
                <p>Te invitamos a la revelación de género de nuestr@ bebé</p>
              </motion.div>

              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.6 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}>
                <img src={genero} alt="Género" className="img-genero" />
              </motion.div>
            </div>
            <CountDown
              revealDate={revealDate}
              onFinish={() => alert("¡Es hora de la revelación!")}
            />
            <StartButton />

            {/* Botón de control de música */}
            <div className="music-control">
              <button onClick={() => setIsPlaying((prev) => !prev)}>
                <img
                  className="btn-musica"
                  src={isPlaying ? pauseIcon : playIcon}
                  alt={isPlaying ? "Pausar" : "Reproducir"}
                />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
