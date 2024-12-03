import React, { useState } from "react";
import globoRosa from "../../assets/images/globoRosa.png";
import globoAzul from "../../assets/images/globoAzul.png";
import Confetti from "react-confetti";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig"; // Asegúrate de que tu configuración de Firebase esté correcta
import { Container, Row, Col, Button } from "react-bootstrap";

const GlobosInteraccion = ({ userName, onComplete }) => {
  const [result, setResult] = useState(null); // "niño" o "niña"
  const [showConfetti, setShowConfetti] = useState(false);
  const [hideText, setHideText] = useState(false);

  const playSound = () => {
    const audio = new Audio("../../assets/audio/cancion.mp3"); // Ruta válida del sonido
    audio.play();
  };

  const handleBalloonClick = async (gender) => {
    setResult(gender === "boy" ? "¡Es niño!" : "¡Es niña!");
    playSound();
    setShowConfetti(true);
    setHideText(true);

    // Guardar en Firestore
    try {
      await addDoc(collection(db, "eventData"), {
        name: userName,
        selection: gender === "boy" ? "niño" : "niña",
        timestamp: new Date(),
      });
      console.log("Datos guardados en Firestore");
    } catch (error) {
      console.error("Error al guardar en Firestore:", error);
    }

    // Ocultar después de 5 segundos
    setTimeout(() => onComplete(), 5000);
  };

  return (
    <Container className="globos-interaccion py-3">
      <Row>
        <Col className="text-start">
          {!hideText && (
            <h5 className="mb-5">
              ¡Haz clic en un globo y adivina si seré niño o niña!❤️❤️❤️
            </h5>
          )}
        </Col>
      </Row>
      <Row className="justify-content-center globos-container mb-4">
        <Col xs={6} md={3} className="d-flex justify-content-center">
          <img
            src={globoRosa}
            alt="Globo rosa"
            className="globo globo-rosa"
            onClick={() => handleBalloonClick("girl")}
          />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center">
          <img
            src={globoAzul}
            alt="Globo azul"
            className="globo globo-azul"
            onClick={() => handleBalloonClick("boy")}
          />
        </Col>
      </Row>
      {result && (
        <Row className="resultado text-center mt-4">
          {showConfetti && <Confetti />}
          <h1>{result}</h1>
        </Row>
      )}
      <Row className="text-center">
        <Col>
          <Button
            className="btn-continuar"
            variant="primary"
            onClick={onComplete}>
            Cerrar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default GlobosInteraccion;
