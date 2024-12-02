import React, { useEffect } from "react";
import { Table, Button, Container } from "react-bootstrap";

const TablaResultados = ({ onClose, show }) => {
  const data = JSON.parse(localStorage.getItem("eventData")) || [];

  // Ordenar alfabéticamente los datos por el nombre
  const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));

  // Calcular el total de votos y porcentajes globales
  const totalVotes = sortedData.length;
  const counts = sortedData.reduce(
    (acc, entry) => {
      if (entry.selection === "niño") acc.niño++;
      if (entry.selection === "niña") acc.niña++;
      return acc;
    },
    { niño: 0, niña: 0 }
  );

  const percentages = {
    niño: totalVotes > 0 ? ((counts.niño / totalVotes) * 100).toFixed(1) : 0,
    niña: totalVotes > 0 ? ((counts.niña / totalVotes) * 100).toFixed(1) : 0,
  };

  // Efecto para cerrar el modal automáticamente después de 10 segundos
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 10000); // 10 segundos

      return () => clearTimeout(timer); // Limpiar el temporizador si el modal se cierra manualmente
    }
  }, [show, onClose]);

  return (
    <Container className="tabla-resultados-container">
      <h2 className="text-center my-4">Resultados</h2>
      <div className="tabla-wrapper">
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Predicción</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.selection}</td>
              </tr>
            ))}
            {/* Fila de Totales */}
            {totalVotes > 0 && (
              <tr className="text-center font-weight-bold bg-light">
                <td>Total</td>
                <td>
                  {percentages.niño}% niño y {percentages.niña}% niña
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      <div className="text-center mt-3">
        <Button id="button-tabla-resultado" variant="primary" onClick={onClose}>
          Cerrar
        </Button>
      </div>
    </Container>
  );
};

export default TablaResultados;
