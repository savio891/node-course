import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() {

    let [numero, setNumero] = useState(0)

    const contar = () => {
        setNumero(numero + 1)
    }

    return(
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={contar}>Incrementar</button>
        </Layout>   
    )
}