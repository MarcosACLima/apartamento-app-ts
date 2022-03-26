import React, { useState } from "react";
import axios from 'axios'

interface Apartamento {
    numero: number,
    estado: string
}

const Apartamentos = () => {
    const [apartamentos, setApartamentos] = useState<Apartamento>();

    function iniciarTeste() {
        axios.get('localhost:8080/api/apartamento').then(response => {
            setApartamentos(response.data)
        })
        console.log(apartamentos)
    }

    return (
        <>
            <h1>Apartamentos</h1>
            <button onClick={iniciarTeste} >Listar</button>
        </>
    )
}

export default Apartamentos;