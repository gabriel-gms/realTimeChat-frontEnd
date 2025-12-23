type Props = {
    entradaSaida: string
    objMsg: {
        nome: string
        msg: string
    }[]
    nomeUsuario: string
}

export const AreaMensagem = ({entradaSaida, objMsg, nomeUsuario}: Props)=>{

    return (
        <div className="flex-1 bg-blue-200">
            {
                objMsg.length !== 0 &&
                objMsg.map((v,i) => {
                    if(v.nome === nomeUsuario){
                        return <div key={i}  className="m-1 rounded-sm bg-blue-500 p-2 text-right ml-auto w-max">
                                    <h2><strong>{v.nome}</strong></h2>
                                    <p>{v.msg}</p>
                                </div>
                    } else {
                    return <div key={i} className="m-1 rounded-sm bg-blue-400 p-2 w-max">
                                <h3><strong>{v.nome}</strong></h3>
                                <p>{v.msg}</p>
                            </div>
                    }
                }
                )
            }
        </div>

    )
}