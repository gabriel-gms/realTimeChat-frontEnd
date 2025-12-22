type Props = {
    valorInput: string,
    setValorInput: (v: string) => void,
    addNomeUsuario: () => void
}

export const Login = (data: Props) => {
    function addNomeUsuarioKey (e: {key: string }){
    if(e.key === 'Enter' && data.valorInput.trim() !== ''){
      data.addNomeUsuario()
    }}

    return (

    <div className="bg-blue-100 h-screen flex justify-center items-center">

            <div className="bg-blue-500 rounded-lg p-3 text-center flex-col">
              <h1 className=""><strong>ESCOLHA UM NOME DE USUÁRIO</strong></h1>

              <div className="flex">
                <input className="bg-white rounded-lg border border-black p-1 m-1 flex-1"
                
                value={data.valorInput} 

                onChange={(e)=>data.setValorInput(e.target.value)}
                
                onKeyDown={addNomeUsuarioKey}

                type="text"/>

                <button className="bg-blue-50 rounded-lg p-1 m-1" onClick={data.addNomeUsuario}>Entrar</button>

              </div>
          
            </div>
          </div>
    )
}