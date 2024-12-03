import React, { useRef, useState, useEffect } from "react";
import HeroReveal from "../components/heroReveal/HeroReveal";
import LugarHorario from "../components/lugarHorario/LugarHorario";
import Itinerario from "../components/itinerario/Itinerario";
import Vestimenta from "../components/codigoVestimenta/Vestimenta";
import ConfirmarAsistencia from "../components/confirmarAsistencia/ConfirmarAsistencia";
import ViaWhatsapp from "../components/viaWhatsapp/ViaWhatsapp";
import Regalo from "../components/regalos/Regalo";
import Agradecimiento from "../components/agradecimiento/Agradecimiento";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import playIcon from "../assets/images/play.png";
import pauseIcon from "../assets/images/pausar.png";

const Reveal = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3); // Establece el volumen predeterminado (30%)

  // Reproducción automática al cargar
  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true); // Establece que el audio está reproduciéndose
      } catch (err) {
        console.error(
          "Autoplay no soportado, el usuario debe iniciar manualmente:",
          err
        );
      }
    };

    playAudio();

    // Establecer el volumen
    if (audioRef.current) {
      audioRef.current.volume = volume; // Control de volumen
    }
  }, [volume]); // Dependencia en 'volume' para ajustar el volumen cuando cambia

  // Controlar reproducción o pausa
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying); // Cambia el estado de reproducción
  };

  // Manejar el cambio de volumen
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = e.target.value; // Ajusta el volumen
    }
  };

  return (
    <div>
      <HeroReveal />
      <LugarHorario />
      <Itinerario />
      <Vestimenta />
      <ConfirmarAsistencia />
      <ViaWhatsapp />
      <Regalo />
      <Agradecimiento />

      <section>
        <Container>
          <Row>
            <Col>
              <div id="back-home">
                <Link to="/" id="txt-back" className="small">
                  Inicio
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Botón para Play/Pausa */}
      <section className="text-center py-3">
        <div className="music-control">
          <button onClick={togglePlayPause}>
            <img
              style={{ position: "fixed", right: "5px" }}
              className="btn-musica"
              src={isPlaying ? pauseIcon : playIcon}
              alt={isPlaying ? "Pausar" : "Reproducir"}
            />
          </button>
        </div>
      </section>

      {/* Control de volumen */}
      <section className="text-center py-3">
        <div>
          <label>Volumen</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
        </div>
      </section>

      {/* Reproducción de audio */}
      <audio ref={audioRef} src="/audio/cancion.mp3" loop />
    </div>
  );
};

export default Reveal;
