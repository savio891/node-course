import React, {useEffect} from "react";
import { useState } from "react";
import axios from "axios";
import Main from "../template/Main";

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: {name: '', email: ''},
    list: []
}

export default function UserCrudNew() {

    let [state, setState] = useState('')

    state = {...initialState}

    function componentMount() {
        axios(baseUrl).then(resp => {
            setState({list: resp.data})
        })
    }
    
    useEffect(() => {
        componentMount()
    }, [])

    function clear() {
        setState({user: state.user})
    }

    function save() {
        const user = initialState.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method] (url, user)
            .then(resp => {
                const list = getUpdatedList(resp.data)
                setState({user: initialState, list}) 
            })
     }

    function getUpdatedList(user, add = true) {
        const list = state.list.filter(u => u.id !== user.id)
        if (add) list.unshift(user)
        return list
     }

    function updateField(event) {
        const user = state.user //ALTERAR A CÓPIA DO USUÁRIO, BOA PRÁTICA QUE EVITA ALTERAR DADOS DIRETAMENTE DO ESTADO
        user[event.target.name] = event.target.value
        setState({user})
        //console.log(user)
     }


    function renderForm() {
        return(
            <>
                <div className="fom">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={state.user.name}
                                onChange={e =>updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={state.user.email}
                                onChange={e => updateField(e)}
                                placeholder="Digite o e-mail..." />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e =>save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={() =>clear}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </>
        )
    }

    function load(user) {
        setState({user})
     }

    function remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = getUpdatedList(user, false)
            setState({list})
        })
     }

     function renderTable() {
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        )
     }

    function renderRows() {
        return state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger mil-2"
                            onClick={() => remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
     }

    
    return (
    <Main {...headerProps}>
        {renderForm()}
        {renderTable()}
    </Main>
    )
}