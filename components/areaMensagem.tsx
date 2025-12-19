import { InfoChat } from "@/types/InfoChat"
import { Usuario } from "@/types/Usuario"

type Props = {
    entradaSaida: string
}

export const AreaMensagem = ({entradaSaida}: Props)=>{

    return (
        <div className="flex-1 bg-blue-200">
            <div className="m-1 rounded-sm bg-blue-400 p-2 w-max">
                <h3>User</h3>
                <p>conteudo da mensagem</p>
            </div>
            
            <p className="bg-blue-950 text-white text-center">{entradaSaida}</p>
            
            {
                msg.map((v, i)=>{
                    return <div key={i} className="m-1 rounded-sm bg-blue-500 p-2 text-right ml-auto w-max">
                                <h2><strong>{v.nome}</strong></h2>
                                <p>{v.msg}</p>
                            </div>
                })
            }

        </div>
    )
}