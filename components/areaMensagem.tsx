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
        <div className="flex-1 bg-gradient-to-b p-4 space-y-3">
            {
                entradaSaida && (
                    <div className="text-center text-blue-100 text-sm italic py-2 bg-blue-600 bg-opacity-50 rounded-lg">
                        {entradaSaida}
                    </div>
                )
            }
            {
                objMsg.length !== 0 &&
                objMsg.map((v,i) => {
                    if(v.nome === nomeUsuario){
                        return <div key={i} className="flex justify-end">
                                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-2xl rounded-tr-none shadow-lg max-w-xs">
                                        <h2 className="text-white font-bold text-sm">{v.nome}</h2>
                                        <p className="text-blue-50 mt-1 break-words">{v.msg}</p>
                                    </div>
                                </div>
                    } else {
                    return <div key={i} className="flex justify-start">
                                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-lg max-w-xs">
                                    <h3 className="text-blue-700 font-bold text-sm">{v.nome}</h3>
                                    <p className="text-gray-800 mt-1 break-words">{v.msg}</p>
                                </div>
                            </div>
                    }
                }
                )
            }
        </div>

    )
}