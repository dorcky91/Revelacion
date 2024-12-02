import React, { useEffect, useState, useRef } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import genero from "../../assets/images/genero.png";
import { motion } from "framer-motion";
import CountDown from "../countdown/CountDown";
import StartButton from "../startButton/StartButton";
import Confetti from "react-confetti";

import "./Home.css";

// Importa imágenes
import photo1 from "../../assets/images/photo1.jpg";
import photo2 from "../../assets/images/photo2.jpg";
import photo3 from "../../assets/images/photo3.jpg";
import photo4 from "../../assets/images/photo4.jpg";
import photo5 from "../../assets/images/photo5.jpg";
import photo6 from "../../assets/images/photo6.jpg";
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
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Reproducir música
  const playMusic = () => {
    const audio = audioRef.current;
    audio.loop = true;
    audio
      .play()
      //   .then(() => setIsMusicPlaying(true))
      .catch((err) => console.error("Error al reproducir música:", err));
  };

  //   // Mostrar confetti por unos segundos
  //   useEffect(() => {
  //     const confettiTimer = setTimeout(() => setShowConfetti(false), 5000);
  //     return () => clearTimeout(confettiTimer);
  //   }, []); // Solo al montar

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
            holaaaaaaaaaaaaaaaa Mis papis y yo te invitamos a descubrir cuál
            será mi género 👼🏼👶🏼
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
              <h1 className="nombre-mama">Anette</h1>
              <h1 className="separar-nombre">&</h1>
              <h1 className="nombre-papa">Orlando</h1>
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
                animate={{ scale: 1.5 }}
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
