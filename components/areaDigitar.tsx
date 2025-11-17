export const AreaDigitar = ()=>{
    return (
        <div className="h-14 p-3 border-t-2 bg-blue-200 flex gap-2">
            <div>
                <input className="border rounded-sm w-290 bg-white" placeholder="Digite aqui a sua mensagem ..." type="text" />
            </div>
            
            <div>
                <button className="border rounded-sm bg-blue-300">Enviar</button>
            </div>
        </div>
    )
}