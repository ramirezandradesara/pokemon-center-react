import React, { useState } from "react";
import { useContext } from "react";
import { ContextForm } from "../../context/ContextoFormulario";
import PropTypes from 'prop-types'

/**
 * Componente del formulario de registro
 * @param {*} param0 
 * @returns {JSX.Element}
 */

const Input = ({ name, label, type = "text", actionType }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.
  const {
    state,
    dispatch
  } = useContext(ContextForm)

  // También, utilizaremos un estado local para manejar el estado del input.

  const [inputValue, setInputValue] = useState()

  /**
   * Función que obtiene el value que se ingreso en el input
   * @param {e} event  
   */
  const onChange = (e) => {
    // Aquí deberíamos actualizar el estado local del input.
    setInputValue(e.target.value)
  };

  /**
   * 
   * @param {Event} e
   */
  const onBlur = (e) => {    
    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
    
    e.preventDefault();
    dispatch({ type: actionType, payload: { clave: name, valor: e.target.value } })
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={inputValue}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  actionType: PropTypes.shape.isRequired({
    payload: PropTypes.string,
    action: PropTypes.string
  })
}

export default Input;
