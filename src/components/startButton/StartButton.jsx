import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import FlujoInteractivo from "../flujoInteractivo/FlujoInteractivo";
import "./StartButton.css";

const StartButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleStartPress = () => {
    setShowModal(true); // Mostrar el flujo interactivo en un modal o pantalla
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1,
        }}>
        <Button size="lg" className="start-button" onClick={handleStartPress}>
          Ir al evento
        </Button>
      </motion.div>

      {/* Modal para el flujo interactivo */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Body>
          <FlujoInteractivo />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default StartButton;
