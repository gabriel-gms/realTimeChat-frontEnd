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

    <div className="bg-gradient-to-br from-blue-50 to-blue-200 h-screen flex justify-center items-center">

            <div className="bg-gradient-to-b from-blue-500 to-blue-600 rounded-2xl p-8 text-center shadow-2xl max-w-md w-full mx-4">
              <h1 className="text-white text-3xl font-bold mb-2">CHAT EM TEMPO REAL</h1>
              <p className="text-blue-100 text-sm mb-8">Escolha um nome de usuário para começar</p>

              <div className="flex flex-col gap-3">
                <input 
                  className="bg-white rounded-lg border-2 border-blue-300 px-4 py-3 text-gray-800 font-medium focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-400 transition-all"
                  placeholder="Digite seu nome..."
                  value={data.valorInput} 
                  onChange={(e)=>data.setValorInput(e.target.value)}
                  onKeyDown={addNomeUsuarioKey}
                  type="text"
                />

                <button 
                  className="bg-blue-100 hover:bg-white text-blue-600 font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95"
                  onClick={data.addNomeUsuario}
                >
                  Entrar no Chat
                </button>

              </div>

              <p className="text-blue-100 text-xs mt-6">Pressione Enter ou clique em Entrar</p>
          
            </div>
          </div>
    )
}