import Processo from "../../abstracoes/processo"
import DiretorCasalSimples from "../../diretores/diretorCasal"
import DiretorFamiliaMais from "../../diretores/diretorFamiliaPlus"
import DiretorFamiliaSimples from "../../diretores/diretorFamiliaSimples"
import DiretorFamiliaSuper from "../../diretores/diretorFamiliaSuper"
import DiretorSolteiroMais from "../../diretores/diretorSolteiroPlus"
import DiretorSolteiroSimples from "../../diretores/diretorSolteiroSimples"
import Armazem from "../../dominio/armazem"
import Acomodacao from "../../modelos/acomodacao"


export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        let diretor = new DiretorCasalSimples();
        this.acomodacoes.push(diretor.construir());
    
        diretor = new DiretorFamiliaSimples();
        this.acomodacoes.push(diretor.construir());
    
        diretor = new DiretorFamiliaMais();
        this.acomodacoes.push(diretor.construir());
    
        diretor = new DiretorFamiliaSuper();
        this.acomodacoes.push(diretor.construir());
    
        diretor = new DiretorSolteiroSimples();
        this.acomodacoes.push(diretor.construir());
    
        diretor = new DiretorSolteiroMais();
        this.acomodacoes.push(diretor.construir());
      }
}