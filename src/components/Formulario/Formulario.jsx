import React, { useContext } from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";
import types from "../../context/types";
import Provider from "../../context/ContextoFormulario";

// En este componente tenemos nuestro formulario y dentro de él
// tenemos los componentes que necesitan consumir nuestro estado.
// Recuerda cual es el paso que debemos tomar para que nuestros
// componentes puedan consumir un estado global.

/**
 * Componente que muestra el formulario, donde se llama tanto a los componentes Inputs y Detalle
 * @returns {JSX.Element}
 */

const Formulario = () => {
  return (
    <>
      <Provider>
        <header className="form-header">
          <div>
            <img src={pokebola} alt="pokebola" />
            <h2>Centro Pokemon de Ash</h2>
          </div>
          <Link className="volver" to="/">
            Home
          </Link>
        </header>
        <div className="formulario-ingreso">
          <h3>Solicitud de atención</h3>
          <p>
            Por favor, completa el formulario para que podamos atender a tu
            pokémon
          </p>
          <div className="cuerpo-formulario">
            {/*
           Si tan solo tuviesemos una manera de "encapsular" nuestros componentes
           para que puedan acceder al estado global.
          */}
            <div className="inputs">
              <div>
                <p className="nombre-seccion">
                  <img src={entrenador} alt="entrenador" />
                  <span>ENTRENADOR</span>
                </p>
                <Input name="nombre" label="Nombre" actionType={types.trainerUpdate} />
                <Input name="apellido" label="Apellido" actionType={types.trainerUpdate} />
                <Input name="email" label="Email" type="email" actionType={types.trainerUpdate} />
              </div>
              <div>
                <p className="nombre-seccion">
                  <img src={pikachu} alt="pikachu" />
                  <span>POKEMON</span>
                </p>
                <Input name="nombre" label="Nombre" actionType={types.pokemonUpdate} />
              </div>
            </div>
            <Detalle />
          </div>
        </div>
      </Provider>
    </>
  );
};

export default Formulario;
