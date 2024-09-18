import Cliente from "./Cliente"
7
export default interface ClienteRepositorio {
    salvar(cliente: Cliente): Promise<Cliente> 
    excluir(cliente: Cliente): Promise<void> 
    obterTodos(cliente: Cliente): Promise<Cliente[]> 
}