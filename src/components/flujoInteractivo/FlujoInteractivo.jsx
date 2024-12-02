import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EntradaEvento from "./EntradaEvento"; // Paso 1
import GlobosInteraccion from "./GlobosInteraccion"; // Paso 2
import TablaResultados from "./TablaResultados"; // Paso 3

const FlujoInteractivo = () => {
  const [step, setStep] = useState("entrada");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleStart = (name) => {
    setUserName(name);
    setStep("interaccion");
  };

  const handleCompleteInteraccion = () => {
    setStep("resultados");
  };

  const handleCompleteResults = () => {
    navigate("/reveal"); // Navegar al componente final
  };

  return (
    <div className="flujo-interactivo">
      {step === "entrada" && <EntradaEvento onStart={handleStart} />}
      {step === "interaccion" && (
        <GlobosInteraccion
          userName={userName}
          onComplete={handleCompleteInteraccion}
        />
      )}
      {step === "resultados" && (
        <TablaResultados onClose={handleCompleteResults} />
      )}
    </div>
  );
};

export default FlujoInteractivo;
