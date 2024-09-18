import Layout from '../components/Layout';
import styles from '../styles/Estiloso.module.css';
import Link from 'next/link';

export default function Estiloso() {
    return (
        <>
            <Layout titulo="Exemplo de CSS modularizado">
                <div className={styles.roxo}>
                    <h1>Esilo usando CSS Módulos</h1>
                </div>
            </Layout>
        </>
    )
}