export const AreaMensagem = ()=>{
    return (
        <div className="flex-1 bg-blue-200">
            <div className="m-1 rounded-sm bg-blue-400 p-2 w-max">
                <h3>User</h3>
                <p>conteudo da mensagem</p>
            </div>
            
            <div className="m-1 rounded-sm bg-blue-500 p-2 text-right ml-auto w-max">
                <h3>User 2</h3>
                <p>conteudo da mensagem 2</p>
            </div>

            <p className="bg-blue-950 text-white text-center">fulano entrou</p>
        </div>
    )
}