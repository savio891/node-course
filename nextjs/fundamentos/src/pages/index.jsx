import Link from "next/link"
import Navegador from "../components/Navegador"

export default function Inicio() {
    
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
           <Navegador destino="/estiloso" descricao="Estiloso" cor="dodgerblue"/>
           <Navegador destino="/exemplo" descricao="Exemplo" cor="#9400d3"/>
           <Navegador destino="/jsx" descricao="JSX" cor="crimson"/>
           <Navegador destino="/navegacao" descricao="Navegação #01" cor="green"/>
           <Navegador destino="/cliente/sp-2/321" descricao="Navegação #02" cor="blue"/>
           <Navegador destino="/estado" descricao="Compoente com Estado" cor="#a45b71"/>
           <Navegador destino="/integracao_1" descricao="Integração com API #01" cor="#42a9a9"/>
           <Navegador destino="/estatico" descricao="Conteúdo Estático" cor="#fa054a"/>
        </div>
    )
}
