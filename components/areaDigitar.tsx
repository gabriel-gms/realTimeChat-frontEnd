type Props = {
    msg: string
    setMsg: (s: string) => void
    inputMsg: string
    setInputMsg: (s: string) => void
}

export const AreaDigitar = ({msg, setMsg, inputMsg, setInputMsg}:Props)=>{
    function addMsg(){
        setMsg(inputMsg)
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