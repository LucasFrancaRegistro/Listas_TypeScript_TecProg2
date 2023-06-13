import { TipoDocumento } from "../enumeracoes/documentoTipo"

export default class Documento {
    public numero: string
    public tipo: TipoDocumento
    public dataExpedicao: Date
}