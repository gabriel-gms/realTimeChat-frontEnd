type Props = {
    inputMsg: string
    setInputMsg: (s: string) => void
    enviarMensagem: () => void
}

export const AreaDigitar = ({inputMsg, setInputMsg, enviarMensagem}:Props)=>{
    function addMsg(){
        enviarMensagem()
    }

    function setInputMsgKey(e: {key:string}){
        if(e.key === "Enter" && inputMsg.trim()!==""){
            addMsg()
        }
    }

    return (
        <div className="h-14 p-3 border-t-2 bg-blue-200 flex gap-2">
            <div>
                <input 
                value={inputMsg}
                onChange={(e)=>{setInputMsg(e.target.value)}}
                onKeyDown={setInputMsgKey}
                className="border rounded-sm w-290 bg-white" 
                placeholder="Digite aqui a sua mensagem ..." 
                type="text" />
            </div>
            
            <div>
                <button onClick={addMsg} className="border rounded-sm bg-blue-300">Enviar</button>
            </div>
        </div>
    )
}