import React, { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Importar para navegación
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig"; // Ajusta la ruta según tu configuración

const TablaResultados = ({ onClose, show }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Usar el hook de navegación

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Referencia a la colección "eventData"
        const querySnapshot = await getDocs(collection(db, "eventData"));
        const fetchedData = querySnapshot.docs.map((doc) => doc.data());

        // Ordenar alfabéticamente por el nombre
        const sortedData = fetchedData.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        setData(sortedData);
        setLoading(false);
      } catch (error) {
        console.error("Error al recuperar los datos desde Firestore:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calcular el total de votos y porcentajes globales
  const totalVotes = data.length;
  const counts = data.reduce(
    (acc, entry) => {
      if (entry.selection === "niño") acc.niño++;
      if (entry.selection === "niña") acc.niña++;
      return acc;
    },
    { niño: 0, niña: 0 }
  );

  const percentages = {
    niño:
      totalVotes > 0
        ? Math.round(((counts.niño / totalVotes) * 100).toFixed(1))
        : 0,
    niña:
      totalVotes > 0
        ? Math.round(((counts.niña / totalVotes) * 100).toFixed(1))
        : 0,
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

  const handleClose = () => {
    onClose(); // Cerrar la tabla
    navigate("/reveal"); // Redirigir a la pantalla Reveal
  };

  return (
    <Container className="tabla-resultados-container">
      <h2 className="text-center my-4">Resultados</h2>
      {loading ? (
        <p className="text-center">Cargando datos...</p>
      ) : (
        <div className="tabla-wrapper">
          <Table striped bordered hover responsive="sm">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Predicción</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
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
      )}
      <div className="text-center mt-3">
        <Button
          id="button-tabla-resultado"
          variant="primary"
          onClick={handleClose}>
          Cerrar
        </Button>
      </div>
    </Container>
  );
};

export default TablaResultados;
