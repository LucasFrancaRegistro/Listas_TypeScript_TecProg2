import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import { TipoDocumento } from "../../enumeracoes/TipoDocumento";
import MenuEditarCliente from "../../menus/menuEditarCliente";
import Cliente from "../../modelos/cliente";
import EditarDocumento from "./editarDocumento";
import EditarEndereco from "./editarEndereco";
import EditarNascimento from "./editarNascimento";
import EditarNome from "./editarNome";
import EditarNomeSocial from "./editarNomeSocial";
import EditarNumero from "./editarNumero";

export default class EditarClientes extends Processo {
  private clientes: Cliente[];
  constructor() {
    super();
    this.execucao = true;
    this.menu = new MenuEditarCliente();
    this.clientes = Armazem.InstanciaUnica.Clientes;
  }
  processar(): void {
    console.clear();
    let clienteCPF = this.entrada.receberTexto(
      "Forneça o CPF do titular que deseja editar: "
    );
    this.clientes.forEach((clienteForEach) => {
      clienteForEach.Documentos.filter((clienteDocFilter) => {
        if (
          clienteDocFilter.Numero === clienteCPF &&
          clienteDocFilter.Tipo === TipoDocumento.CPF
        ) {
          while (this.execucao) {
            this.menu.mostrar();
            console.log(`Nome:'${clienteForEach.Nome}'\n CPF:'${clienteDocFilter.Numero}'`);
            this.opcao = this.entrada.receberNumero(`Digite a opção desejada: `);
            switch (this.opcao) {
              case 1:
                this.processo = new EditarNome(clienteForEach);
                this.processo.processar();
                break;
              case 2:
                this.processo = new EditarNomeSocial(clienteForEach);
                this.processo.processar();
                break;
              case 3:
                this.processo = new EditarNascimento(clienteForEach);
                this.processo.processar();
                break;
              case 4:
                this.processo = new EditarEndereco(clienteForEach);
                this.processo.processar();
                break;
              case 5:
                this.processo = new EditarDocumento(clienteForEach);
                this.processo.processar();
                break;
              case 6:
                this.processo = new EditarNumero(clienteForEach);
                this.processo.processar();
                break;
              case 0:
                this.execucao = false;
                console.log("Até logo!");
                console.clear();
                break;
              default:
                console.log("Opção não entendida :( ");
            }
          }
        }
      });
    });
  }
}
