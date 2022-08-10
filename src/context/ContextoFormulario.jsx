// Aqui debemos crear nuestro contexto y nuestro provider.
import { createContext, useReducer } from "react";
import types from "./types";

export const ContextForm = createContext()


/**
 * 
 * @param {{initalState}} props 
 * @returns 
 */

const Provider = (props) => {
    const initialState = {
        trainer: {
            nombre: '',
            apellido: '',
            email: ''
        },
        pokemon: {
            nombre: ''
        }
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case types.trainerUpdate:
                return {
                    ...state,
                    trainer: {
                        ...state.trainer,
                        [action.payload.clave]: action.payload.valor
                    }
                }

            case types.pokemonUpdate:
                return {
                    ...state,
                    pokemon: {
                        ...state.pokemon,
                        [action.payload.clave]: action.payload.valor
                    }
                }

            default:
                throw new Error(`Unknown action type: ${action.type}`);
        }
    }


    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ContextForm.Provider
            value={{
                state,
                dispatch
            }}
        >
            {props.children}
        </ContextForm.Provider>
    )
}

export default Provider
