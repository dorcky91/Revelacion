// import React, { useState } from "react";
// import {
//   Col,
//   Container,
//   Row,
//   Form,
//   Button,
//   Alert,
//   Spinner,
// } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { db } from "../../../firebaseConfig"; // Importar la configuración de Firebase
// import { collection, getDocs } from "firebase/firestore"; // Importar funciones de Firestore

// const EntradaEvento = ({ onStart }) => {
//   const [name, setName] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loading, setLoading] = useState(false); // Estado para manejar el loading
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name.trim()) {
//       setErrorMessage("Por favor, introduce tu nombre");
//       return;
//     }

//     setLoading(true); // Activar el spinner cuando comenzamos a cargar los datos

//     try {
//       // Obtener todos los documentos de la colección 'eventData'
//       const querySnapshot = await getDocs(collection(db, "eventData"));

//       // Crear un array con los nombres de los participantes
//       const participants = querySnapshot.docs.map((doc) => doc.data().name);

//       // Verificar si el nombre ya existe
//       const alreadyParticipated = participants.some(
//         (participantName) =>
//           participantName.toLowerCase() === name.toLowerCase()
//       );

//       if (alreadyParticipated) {
//         setErrorMessage("Ya participaste ❤️😊");
//         // Redirigir al usuario a la página '/reveal'
//         navigate("/reveal");
//         setLoading(false); // Desactivar el loading
//         return;
//       }

//       // Si no existe, continuar al siguiente paso
//       setErrorMessage(""); // Limpiar cualquier error previo
//       onStart(name);
//       setLoading(false); // Desactivar el loading
//     } catch (error) {
//       console.error("Error al recuperar los datos desde Firestore:", error);
//       setErrorMessage(
//         "Hubo un problema al verificar tu participación. Intenta de nuevo."
//       );
//       setLoading(false); // Desactivar el loading si ocurre un error
//     }
//   };

//   return (
//     <section className="entrad-envento py-5">
//       <Container className="text-center">
//         <Row className="justify-content-center">
//           <Col md={6}>
//             <h4 className="mb-4">¡Bienvenido al Evento!</h4>
//             {/* <p className="mb-4">¿Qué crees que soy: niño o niña?</p> */}

//             <Form onSubmit={handleSubmit}>
//               <Form.Group className="formulario-entrada mb-3">
//                 <Form.Control
//                   type="text"
//                   placeholder="Ingresa tu nombre"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   isInvalid={!!errorMessage}
//                   required
//                 />
//               </Form.Group>

//               <Button
//                 variant="primary"
//                 type="submit"
//                 className="btn-continuar w-100"
//                 disabled={loading} // Deshabilitar el botón mientras se carga
//               >
//                 {loading ? (
//                   // Mostrar el spinner mientras se carga
//                   <Spinner
//                     as="span"
//                     animation="border"
//                     size="sm"
//                     role="status"
//                     aria-hidden="true"
//                   />
//                 ) : (
//                   "Continuar"
//                 )}
//               </Button>
//             </Form>

//             {/* Mostrar mensaje de error si el usuario ya participó */}
//             {errorMessage && (
//               <Alert variant="danger" className="mt-3">
//                 {errorMessage}
//               </Alert>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default EntradaEvento;

import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebaseConfig"; // Importar la configuración de Firebase
import { collection, getDocs } from "firebase/firestore"; // Importar funciones de Firestore

const EntradaEvento = ({ onStart }) => {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // Estado para manejar el loading
  const navigate = useNavigate();

  // Verificar si el usuario ya ha accedido
  useEffect(() => {
    const hasAccessed = localStorage.getItem("hasAccessedReveal");
    if (hasAccessed) {
      navigate("/reveal"); // Redirige automáticamente a /reveal si ya ha accedido
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMessage("Por favor, introduce tu nombre");
      return;
    }

    setLoading(true); // Activar el spinner cuando comenzamos a cargar los datos

    try {
      // Obtener todos los documentos de la colección 'eventData'
      const querySnapshot = await getDocs(collection(db, "eventData"));

      // Crear un array con los nombres de los participantes
      const participants = querySnapshot.docs.map((doc) => doc.data().name);

      // Verificar si el nombre ya existe
      const alreadyParticipated = participants.some(
        (participantName) =>
          participantName.toLowerCase() === name.toLowerCase()
      );

      if (alreadyParticipated) {
        setErrorMessage("Ya participaste ❤️😊");
        // Guardar en localStorage para recordar el acceso
        localStorage.setItem("hasAccessedReveal", "true");
        navigate("/reveal"); // Redirigir al usuario a la página '/reveal'
        setLoading(false); // Desactivar el loading
        return;
      }

      // Si no existe, continuar al siguiente paso
      setErrorMessage(""); // Limpiar cualquier error previo
      onStart(name);

      // Guardar en localStorage para futuras visitas
      localStorage.setItem("hasAccessedReveal", "true");

      setLoading(false); // Desactivar el loading
    } catch (error) {
      console.error("Error al recuperar los datos desde Firestore:", error);
      setErrorMessage(
        "Hubo un problema al verificar tu participación. Intenta de nuevo."
      );
      setLoading(false); // Desactivar el loading si ocurre un error
    }
  };

  return (
    <section className="entrad-envento py-5">
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md={6}>
            <h4 className="mb-4">¡Bienvenido al Evento!</h4>
            {/* <p className="mb-4">¿Qué crees que soy: niño o niña?</p> */}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="formulario-entrada mb-3">
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  isInvalid={!!errorMessage}
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="btn-continuar w-100"
                disabled={loading} // Deshabilitar el botón mientras se carga
              >
                {loading ? (
                  // Mostrar el spinner mientras se carga
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  "Continuar"
                )}
              </Button>
            </Form>

            {/* Mostrar mensaje de error si el usuario ya participó */}
            {errorMessage && (
              <Alert variant="danger" className="mt-3">
                {errorMessage}
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EntradaEvento;
