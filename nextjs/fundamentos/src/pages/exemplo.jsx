import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo() {
    return (
        <Layout titulo="Usando Componentes">
            <Cabecalho titulo="Fundamentos Nextjs & React"/>
            <Cabecalho titulo="Aprendendo NextJs na prática"/>
        </Layout>
    )
}