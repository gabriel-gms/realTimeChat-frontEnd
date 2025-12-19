type Props = {
    entradaSaida: string
    objMsg: {
        nome: string
        msg: string
    }
}

export const AreaMensagem = ({entradaSaida, objMsg}: Props)=>{

    return (
        <div className="flex-1 bg-blue-200">
            <div className="m-1 rounded-sm bg-blue-400 p-2 w-max">
                <h3>User</h3>
                <p>conteudo da mensagem</p>
            </div>
            
            <p className="bg-blue-950 text-white text-center">{entradaSaida}</p>

            <div className="m-1 rounded-sm bg-blue-500 p-2 text-right ml-auto w-max">
                                <h2><strong>{objMsg.nome}</strong></h2>
                                <p>{objMsg.msg}</p>
                            </div>

            </div>
    )
}