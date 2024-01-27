import React from 'react' //Necessário para reconhecer JSX
import ReactDOM  from 'react-dom'


import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva" >
            <Filho nome="Pedro" sobrenome="Silva" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
, document.getElementById('root')) //Coloca H1 dentro da div com id root no index.html. Isso não é código de HTML, mas um código JSX.