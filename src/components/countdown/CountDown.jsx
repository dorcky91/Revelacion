import React, { useEffect, useState } from "react";
import "./CountDown.css";

const CountDown = ({ revealDate, onFinish }) => {
  // Estado para almacenar el tiempo restante
  const [timeLeft, setTimeLeft] = useState(
    Math.floor((revealDate.getTime() - new Date().getTime()) / 1000)
  );

  // Actualizar el tiempo restante cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onFinish(); // Llama a la función cuando termina el conteo
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, [onFinish]);

  // Formato de tiempo
  const formatTime = (time) => {
    const days = Math.floor(time / (3600 * 24));
    const hours = Math.floor((time % (3600 * 24)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="countdownContainer">
      {/* Contador de días */}
      <div className="timeBlock">
        <div className="digitStyle">{days}</div>
        <div className="labelStyle">Días</div>
      </div>
      <h1 className="separador">:</h1>
      {/* Contador de horas */}
      <div className="timeBlock">
        <div className="digitStyle">{hours}</div>
        <div className="labelStyle">Horas</div>
      </div>
      <h1 className="separador">:</h1>

      {/* Contador de minutos */}
      <div className="timeBlock">
        <div className="digitStyle">{minutes}</div>
        <div className="labelStyle">Minutos</div>
      </div>
      <h1 className="separador">:</h1>

      {/* Contador de segundos */}
      <div className="timeBlock">
        <div className="digitStyle">{seconds}</div>
        <div className="labelStyle">Segundos</div>
      </div>
    </div>
  );
};

export default CountDown;
