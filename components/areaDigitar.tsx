export const AreaDigitar = ()=>{
    return (
        <div className=" bg-blue-200 flex">
            <div>
                <input className="bg-white" placeholder="Digite aqui a sua mensagem ..." type="text" />
            </div>
            
            <div>
                <button className="bg-blue-300">Enviar</button>
            </div>
        </div>
    )
}