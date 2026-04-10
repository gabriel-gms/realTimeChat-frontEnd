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
        <div className="h-20 p-4 border-t-4 border-blue-400 bg-gradient-to-r from-blue-200 to-blue-100 flex gap-3 shadow-lg">
            <input 
                value={inputMsg}
                onChange={(e)=>{setInputMsg(e.target.value)}}
                onKeyDown={setInputMsgKey}
                className="flex-1 border-2 border-blue-300 rounded-lg px-4 py-2 bg-white text-gray-800 font-medium focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-400 transition-all placeholder-gray-400" 
                placeholder="Digite sua mensagem..." 
                type="text" 
            />
            
            <button 
                onClick={addMsg} 
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 active:scale-95 hover:from-blue-700 hover:to-blue-800"
            >
                Enviar
            </button>
        </div>
    )
}