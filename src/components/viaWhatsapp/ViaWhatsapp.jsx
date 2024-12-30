import { Col, Row, Button, Container } from "react-bootstrap";
import viaWhatsappIcon from "../../assets/images/chat.png";
import whatsappMama from "../../assets/images/whatsappMama.png";
import whatsappPapa from "../../assets/images/whatsappPapa.png";
import "./ViaWhatsapp.css";

const ViaWhatsapp = () => {
  // Números de teléfono de Anette y Orlando
  const anettePhoneNumber = "+522222603239"; // Número de Anette
  const orlandoPhoneNumber = "+522216416886"; // Número de Orlando

  // Mensaje predefinido para confirmar asistencia
  const message = "¡Hola! Confirmo mi asistencia al evento.";

  return (
    <section id="sectionWhatsapp">
      <h1 id="title-whatsapp">Vía whatsapp</h1>
      <Container fluid>
        <Row>
          <Col id="card-whatsapp">
            <img id="viaWhatsappIcon" src={viaWhatsappIcon} />
            <p className="descripcion-whatsapp mb-4">
              También puedes confirmar tu asistencia vía WhatsApp, según tu
              preferencia
            </p>

            {/* Botón para abrir el WhatsApp de Orlando */}
            <Button
              variant="primary"
              className="btn-whatsappPapa w-100 d-flex align-items-center gap-1 mb-3"
              onClick={() =>
                window.open(
                  `https://wa.me/${orlandoPhoneNumber}?text=${encodeURIComponent(
                    message
                  )}`,
                  "_blank"
                )
              }>
              <img height={20} src={whatsappPapa} alt="WhatsApp Orlando" />
              Confirmar con papá
            </Button>

            {/* Botón para abrir el WhatsApp de Anette */}
            <Button
              variant="primary"
              className="btn-whatsappMama w-100 d-flex align-items-center gap-1"
              onClick={() =>
                window.open(
                  `https://wa.me/${anettePhoneNumber}?text=${encodeURIComponent(
                    message
                  )}`,
                  "_blank"
                )
              }>
              <img height={20} src={whatsappMama} alt="WhatsApp Anette" />
              Confirmar con mamá
            </Button>

            {/* <p className="fw-bold fs-6 text-start mt-4 ">
              NOTA: Fecha límite de confirmación, 25 de diciembre 2024
            </p> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ViaWhatsapp;
