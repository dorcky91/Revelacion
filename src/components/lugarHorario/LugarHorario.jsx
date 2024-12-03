const handleAgendarClick = () => {
  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isAndroid = /Android/.test(navigator.userAgent);

  const eventDetails = {
    title: "Revelación de género 🎉",
    location:
      "Petite Garden, Puebla Calle 1 poniente 408, colonia centro, 75700 Tehuacán, Puebla",
    description: "Te invitamos a celebrar con nosotros este momento especial.",
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
