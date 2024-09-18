import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import firebase from "firebase/app";
import 'firebase/firestore'
    

const firebaseConfig = {
    apiKey: "AIzaSyA9_ziQUlbCmC14Yzq71AO-zpRyIbX6gZo",
    authDomain: "next-crud-7be58.firebaseapp.com",
    databaseURL: "https://next-crud-7be58-default-rtdb.firebaseio.com",
    projectId: "next-crud-7be58",
    storageBucket: "next-crud-7be58.appspot.com",
    messagingSenderId: "210348330465",
    appId: "1:210348330465:web:aad4ecb499973ce636d6a0"
  };

export default class ColecaoCliente implements ClienteRepositorio {

    #conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot?.id)
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente | any> {
        if(cliente?.id) {
            await this.colecao().doc(cliente.id).set(cliente)
            return cliente
        }else {
            const docRef = await this.colecao().add(cliente)
            const doc =  await docRef.get()
            return doc.data()
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        return this.colecao().doc(cliente.id).delete()
    }

    async obterTodos(): Promise<Cliente[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        const db = firebase.firestore().collection('clientes').withConverter(this.#conversor)

        return db
    }
}
