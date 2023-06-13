import Menu from "../interfaces/menu";

export default class MenuEditarCliente implements Menu {
  mostrar(): void {
    console.clear();
    console.log(`| O que deseja editar? `);
    console.log(`----------------------`);
    console.log(`| 1 - Nome`);
    console.log(`| 2 - Nome Social`);
    console.log(`| 3 - Data de Nascimento`);
    console.log(`| 4 - Endereço`);
    console.log(`| 5 - Documentos`);
    console.log(`| 6 - Telefones`);
    console.log(`| 0 - Para Sair`);
    console.log(`----------------------`);
  }
}
