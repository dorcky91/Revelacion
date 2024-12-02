import React, { useState } from "react";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate

const EntradaEvento = ({ onStart }) => {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Inicializamos el hook de navegación

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMessage("Por favor, introduce tu nombre");
      return;
    }

    // Recuperar datos desde localStorage
    const storedParticipants =
      JSON.parse(localStorage.getItem("participants")) || [];

    // Verificar si el nombre ya existe
    const alreadyParticipated = storedParticipants.some(
      (participant) => participant.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyParticipated) {
      setErrorMessage("Ya participaste ❤️😊");
      // Redirigir al usuario a la página '/reveal'
      navigate("/reveal");
    } else {
      // Si el nombre no existe, guardar el nuevo participante
      storedParticipants.push({ name });
      localStorage.setItem("participants", JSON.stringify(storedParticipants));

      // Continuar al siguiente paso
      setErrorMessage(""); // Limpiar cualquier error previo
      onStart(name);
    }
  };

  return (
    <section className="entrad-envento py-5">
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md={6}>
            <h4 className="mb-3">¡Bienvenido al Evento!</h4>
            <p className="mb-4">¿Qué crees que soy: niño o niña?</p>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="formulario-entrada mb-3">
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  isInvalid={!!errorMessage}
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="btn-continuar w-100">
                Continuar
              </Button>
            </Form>

            {/* Mostrar mensaje de error si el usuario ya participó */}
            {errorMessage && (
              <Alert variant="danger" className="mt-3">
                {errorMessage}
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EntradaEvento;
