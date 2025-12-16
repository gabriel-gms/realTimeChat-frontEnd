import { InfoChat } from "@/types/InfoChat"

type Props = {
    nomeUsuario: string
    setMsg: ([]: InfoChat[]) => void 
    setInputMsg: (v: string) => void
    inputMsg: string
    msg: InfoChat[]
}

export const AreaDigitar = ({nomeUsuario, setMsg, setInputMsg, inputMsg, msg}:Props)=>{

    function addMsg(){
        setMsg([...msg,{nome: nomeUsuario, msg: inputMsg}])
        setInputMsg('')
    }

    return (
        <div className="h-14 p-3 border-t-2 bg-blue-200 flex gap-2">
            <div>
                <input 
                value={inputMsg}
                onChange={(e)=>{setInputMsg(e.target.value)}}
                className="border rounded-sm w-290 bg-white" placeholder="Digite aqui a sua mensagem ..." type="text" />
            </div>
            
            <div>
                <button onClick={addMsg} className="border rounded-sm bg-blue-300">Enviar</button>
            </div>
        </div>
    )
}