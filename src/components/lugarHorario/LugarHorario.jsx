import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import eventIcon from "../../assets/images/evento.png";
import maps from "../../assets/images/maps.png";
import "./LugarHorario.css";

const LugarHorario = () => {
  const handleAgendarClick = () => {
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isAndroid = /Android/.test(navigator.userAgent);

    const eventDetails = {
      title: "Revelación de género 🎉",
      location:
        "Petite Garden, Puebla Calle 1 poniente 408, colonia centro, 75700 Tehuacán, Puebla",
      description:
        "Te invitamos a celebrar con nosotros este momento especial.",
      startDate: "20250104T200000Z", // Fecha de inicio en formato ISO
      endDate: "20250104T220000Z", // Fecha de fin
    };

    if (isIOS) {
      // En iOS, podemos usar la API de 'addEvent' o proporcionar un enlace .ics si es necesario.
      // Abre un enlace que agregue el evento al Calendario nativo de iOS.
      const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${eventDetails.title}
LOCATION:${eventDetails.location}
DESCRIPTION:${eventDetails.description}
DTSTART:${eventDetails.startDate}
DTEND:${eventDetails.endDate}
END:VEVENT
END:VCALENDAR`;

      const blob = new Blob([icsContent], {
        type: "text/calendar;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    } else if (isAndroid) {
      // En Android, podemos usar un enlace de Google Calendar
      const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        eventDetails.title
      )}&dates=${eventDetails.startDate}/${
        eventDetails.endDate
      }&details=${encodeURIComponent(
        eventDetails.description
      )}&location=${encodeURIComponent(eventDetails.location)}`;
      window.open(googleCalendarUrl, "_blank");
    } else {
      // Para otros dispositivos (navegadores web, etc.), se puede abrir el .ics.
      const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${eventDetails.title}
LOCATION:${eventDetails.location}
DESCRIPTION:${eventDetails.description}
DTSTART:${eventDetails.startDate}
DTEND:${eventDetails.endDate}
END:VEVENT
END:VCALENDAR`;

      const blob = new Blob([icsContent], {
        type: "text/calendar;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank");
    }
  };

  const handleVerMapaClick = () => {
    window.open(
      "https://www.google.com/maps/place/Neur%C3%B3ticos+An%C3%B3nimos/@18.4622972,-97.398605,3a,75y,6.31h,92.65t/data=!3m7!1e1!3m5!1sqvedoRL_VPr1kuBwVIhZdg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-2.651117823989054%26panoid%3DqvedoRL_VPr1kuBwVIhZdg%26yaw%3D6.314375977754864!7i16384!8i8192!4m6!3m5!1s0x85c5bd2896a4e265:0xf78eb1b1db9925b3!8m2!3d18.4623881!4d-97.398651!16s%2Fg%2F11fqbnwt6h?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  return (
    <section id="sectionLugarHorario">
      <h1 id="title-lugar-horario">Lugar & Horario</h1>
      <Container fluid>
        <Row>
          <Col id="card-lugar-horario">
            <img id="mapIcon" src={eventIcon} />
            <h6 id="card-title">"Petite Garden"</h6>
            <div
              id="direction"
              className="d-flex align-items-center  justify-content-center">
              <img src={maps} />
              <p className="text-start mb-0">
                Calle 1 poniente 408, colonia centro, 75700 Tehuacán, Puebla
              </p>
            </div>
            <p id="fecha-evento" className="my-2 mb-4">
              Sábado 04 de enero 2025
            </p>
            <Button
              onClick={handleAgendarClick}
              id="btn-agendar"
              className="w-100 mb-3"
              size="sm">
              Agendar
            </Button>
            <Button
              onClick={handleVerMapaClick}
              id="btn-ver-mapa"
              className="w-100"
              size="sm">
              Ver mapa
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LugarHorario;
