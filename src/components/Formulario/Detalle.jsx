import React, { useContext } from "react";
import { ContextForm } from "../../context/ContextoFormulario";

/**
 * Componente que muestra el detalle del formulario, con la información ingresada en los inputs
 * @returns {JSX.Element}
 */

const Detalle = () => {
  // Aqui deberíamos obtener los datos del formulario para poder mostrarlo en
  // la vista previa.

  const {
    state,
    dispatch
  } = useContext(ContextForm)


  return (
    <div className="detalle-formulario">
      <div className="encabezado">
        <h3>Vista Previa de la Solicitud</h3>
      </div>
      <section className="datos-cliente">
        <h4>Datos del Entrenador</h4>
        <div className="fila">
          <p>Nombre: {state.trainer.nombre}</p>
          <p>Apellido: {state.trainer.apellido}</p>
          <p>Email: {state.trainer.email}</p>
        </div>
      </section>
      <section className="datos-cliente">
        <h4>Datos del Pokémon</h4>
        <div className="fila">
          <p>Nombre: {state.pokemon.nombre}</p>
        </div>
      </section>
      <button
        className="boton-enviar"
        onClick={() => alert("Solicitud enviada :)")}
      >
        Enviar Solicitud
      </button>
    </div>
  );
};

export default Detalle;
