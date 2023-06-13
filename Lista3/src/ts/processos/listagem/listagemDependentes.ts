import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorDependente from "../../impressores/ImpressorDependente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemDepedentes extends Processo {
  private clientes: Cliente[];
  private impressor!: Impressor;
  constructor() {
    super();
    this.execucao = false;
    this.clientes = Armazem.InstanciaUnica.Clientes;
  }
  processar(): void {
    console.clear();
    if (this.clientes.length == 0) {
      console.log("Não há clientes :(" );
  } else {
      let titular = this.entrada.receberTexto(`Digite o CPF do titular: `);
      console.log("Iniciando a listagem de dependentes por titular...");
      this.clientes.map((clienteMap) => {
        clienteMap.Documentos.filter((docFilter) => {
          if (docFilter.Numero === titular) {
            clienteMap.Dependentes.forEach((dependentes) => {
              this.impressor = new ImpressaorDependente(dependentes);
              console.log(this.impressor.imprimir());
              this.execucao = true;
            });
          }
        });
      });
      if (!this.execucao) {
        console.log("Esse cliente não possuí dependentes :(" );
      }
    }
  }
}