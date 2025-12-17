import { Usuario } from "@/types/Usuario"

type Props = {
    usuarioLogado: Usuario[]
}

export const StatusUser = ({usuarioLogado}: Props)=>{
    return(
        <div className="border-l-2 pl-5 bg-blue-200 w-72">
            <h3>Usuários online</h3>
            <ul className="list-disc marker:text-green-700">
                {
                    usuarioLogado.map(item => (
                        <li>{item.nome}</li>
                    ))
                }
            </ul>
        </div>
    )
}