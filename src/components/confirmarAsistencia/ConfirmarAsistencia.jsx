import React, { useState } from "react";
import { Col, Row, Button, Container, Form, Card } from "react-bootstrap";
import asistenciaIcon from "../../assets/images/asistencia.png";
import "./ConfirmarAsistencia.css";

const ConfirmarAsistencia = () => {
  // Estado para los campos del formulario
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    comment: "",
  });

  const [hasStartedTyping, setHasStartedTyping] = useState(false); // Nuevo estado

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "comment" && value.length > 0) {
      setHasStartedTyping(true); // Cambia a `true` cuando el usuario empieza a escribir
    } else if (value.length === 0) {
      setHasStartedTyping(false); // Cambia a `false` si el campo está vacío
    }

    setFormData({ ...formData, [name]: value });
  };

  // Función para determinar el color basado en los caracteres restantes
  const maxCharacters = 200;
  const remainingCharacters = maxCharacters - formData.comment.length;

  const getRemainingCharactersColor = (remaining) => {
    if (remaining > 100) return "green"; // Más de 100 caracteres restantes
    if (remaining > 50) return "yellow"; // Entre 100 y 50 caracteres
    return "red"; // 50 o menos caracteres restantes
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Construir el cuerpo del correo electrónico
    const attendanceText =
      formData.attendance === "asistire" ? "Asistiré" : "No asistiré";
    const emailBody = `Nombre: ${formData.name}\nAsistencia: ${attendanceText}\nMensaje: ${formData.comment}`;

    // Abrir el cliente de correo con los datos
    window.open(
      `mailto:gabyflowe@gmail.com?cc=orlandoappolon1@gmail.com&subject=Confirmación de asistencia&body=${encodeURIComponent(
        emailBody
      )}`
    );

    // alert("¡Gracias por tu respuesta!");

    // Limpiar el formulario
    setFormData({
      name: "",
      attendance: "",
      comment: "",
    });

    setHasStartedTyping(false); // Reinicia el estado al enviar
  };

  return (
    <section id="sectionAsistencia">
      <h1 id="title-asistencia">Confirmar asistencia</h1>
      <Container fluid py-5>
        <Row>
          <Col id="card-asistencia">
            <img id="asistenciaIcon" src={asistenciaIcon} />
            <p className="descripcion-asistencia mb-4">
              Nos haría muy felices saber si podremos contar contigo,
              ¡agradeceríamos mucho tu confirmación!
            </p>

            <Card className="card-asistencia p-2">
              <Card.Body>
                <Form id="formularioAsistencia" onSubmit={handleSubmit}>
                  {/* Campo de nombre */}
                  <Form.Group className="mb-4" controlId="formName">
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Escribe tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Radio buttons para asistencia */}
                  <Form.Group className="mb-4">
                    <div className="d-flex">
                      <Form.Check
                        type="radio"
                        id="asistire"
                        label="Asistiré"
                        name="attendance"
                        value="asistire"
                        checked={formData.attendance === "asistire"}
                        onChange={handleChange}
                        className="me-3"
                        required
                      />
                      <Form.Check
                        type="radio"
                        id="noAsistire"
                        label="No asistiré"
                        name="attendance"
                        value="noAsistire"
                        checked={formData.attendance === "noAsistire"}
                        onChange={handleChange}
                      />
                    </div>
                  </Form.Group>

                  {/* Textarea para comentarios */}
                  <Form.Group className="mb-4" controlId="formComment">
                    <Form.Control
                      as="textarea"
                      name="comment"
                      rows={3}
                      maxLength={200}
                      placeholder="Mensaje o comentario"
                      value={formData.comment}
                      onChange={handleChange}
                    />
                    {/* Mostrar texto solo después de que el usuario empieza a escribir */}
                    {hasStartedTyping && (
                      <Form.Text
                        className="text-start"
                        style={{
                          color:
                            getRemainingCharactersColor(remainingCharacters),
                        }}>
                        {remainingCharacters} caracteres restantes
                      </Form.Text>
                    )}
                  </Form.Group>

                  {/* Botón de enviar */}
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn-submit w-100">
                    Enviar
                  </Button>

                  <p className="fw-bold small text-start mt-4 ">
                    NOTA: Fecha límite de confirmación, 25 de diciembre 2024
                  </p>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ConfirmarAsistencia;
