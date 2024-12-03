import React, { useState } from "react";
import { Col, Row, Button, Container, Modal } from "react-bootstrap";
import regaloIcon from "../../assets/images/regalos.png";
import amazon from "../../assets/images/amazon.png";
import liverpool from "../../assets/images/liverpool.png";
import efectivo from "../../assets/images/efectivo1.png";
import "./Regalo.css";

const Regalo = () => {
  // Estado para controlar la visibilidad del modal de efectivo
  const [showModal, setShowModal] = useState(false);

  // Función para abrir el modal
  const handleShowModal = () => setShowModal(true);

  // Función para cerrar el modal
  const handleCloseModal = () => setShowModal(false);

  return (
    <section id="sectionRegalo">
      <h1 id="title-regalo">Regalos</h1>
      <Container fluid>
        <Row>
          <Col id="card-regalo">
            <img id="regaloIcon" src={regaloIcon} alt="Regalo" />
            <p className="descripcion-regalo mb-4">
              Tu compañía es el mayor regalo que podrías darnos. Si deseas
              obsequiarnos algo, será de corazón.
            </p>

            {/* Botón de Amazon - Redirigir a la mesa de regalos */}
            <Button
              variant="primary"
              className="btn-amazon w-100 d-flex align-items-center gap-1 mb-4 p-3"
              onClick={() =>
                window.open(
                  "https://www.amazon.com.mx/baby-reg/your-registry/39CQ0O2MP7X3J?ref_=br_mw_ql_yr",
                  "_blank"
                )
              }>
              <img height={50} src={amazon} alt="Logo Amazon" />
              Amazon
            </Button>

            {/* Botón de Liverpool - Redirigir a la mesa de regalos */}
            <Button
              variant="primary"
              className="btn-liverpool w-100 d-flex align-items-center gap-1 mb-4 p-3"
              onClick={() =>
                window.open(
                  "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51560200",
                  "_blank"
                )
              }>
              <img height={50} src={liverpool} alt="Logo Liverpool" />
              Liverpool
            </Button>

            {/* Botón de Efectivo - Mostrar modal con datos bancarios */}
            <Button
              variant="primary"
              className="btn-efectivo w-100 d-flex align-items-center gap-1 mb-4 p-3"
              onClick={handleShowModal}>
              <img height={50} src={efectivo} alt="Foto de una tarjeta" />
              En caso de que no sepas que regalar 😊❤️
            </Button>

            {/* Modal con los datos bancarios */}
            <Modal centered show={showModal} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>Datos Bancarios</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h5>BBVA</h5>
                <p>Anette Gabriela Flores López</p>
                <p>Número de cuenta: 151 135 5859</p>
                <p>Clave Interbancaria: 012 180 01511355859 1</p>
                <p>Número de tarjeta: 4152 3143 1763 4338</p>
                {/* Agrega más datos si es necesario */}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Regalo;
