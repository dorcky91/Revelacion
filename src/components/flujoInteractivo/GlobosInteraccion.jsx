import React, { useState } from "react";
import globoRosa from "../../assets/images/globoRosa.png";
import globoAzul from "../../assets/images/globoAzul.png";
import Confetti from "react-confetti";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig"; // Asegúrate de que tu configuración de Firebase esté correcta
import { Container, Row, Col, Button, Alert } from "react-bootstrap";

const GlobosInteraccion = ({ userName, onComplete }) => {
  const [result, setResult] = useState(null); // "niño" o "niña"
  const [showConfetti, setShowConfetti] = useState(false);
  const [hideText, setHideText] = useState(false);
  const [error, setError] = useState(false); // Estado para el mensaje de error

  const playSound = () => {
    const audio = new Audio("../../assets/audio/cancion.mp3"); // Ruta válida del sonido
    audio.play();
  };

  const handleBalloonClick = async (gender) => {
    setResult(gender === "boy" ? "¡Es niño!" : "¡Es niña!");
    playSound();
    setShowConfetti(true);
    setHideText(true);
    setError(false); // Elimina el mensaje de error si seleccionó un globo

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

  const handleContinueClick = () => {
    if (!result) {
      setError(true); // Muestra el mensaje de error si no se seleccionó un globo
    } else {
      onComplete(); // Si seleccionó, permite continuar
    }
  };

  return (
    <Container className="globos-interaccion py-3">
      <Row>
        <Col className="text-start">
          {!hideText && (
            <div className="mb-3">
              <h5 className="fw-bold">¡Descubre lo que tu corazón te dice!</h5>
              <p>
                Observa los globos y selecciona el que creas que refleja mi
                género❤️❤️❤️
              </p>
            </div>
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
      {error && (
        <Row className="mt-2">
          <Col>
            <Alert variant="danger" className="text-center">
              Por favor selecciona un globo para continuar.
            </Alert>
          </Col>
        </Row>
      )}
      <Row className="text-center">
        <Col>
          <Button
            className="btn-continuar"
            variant="primary"
            onClick={handleContinueClick}>
            Cerrar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default GlobosInteraccion;
