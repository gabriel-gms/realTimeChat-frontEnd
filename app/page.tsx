"use client"

import { AreaDigitar } from "@/components/areaDigitar"
import { AreaMensagem } from "@/components/areaMensagem"
import { Menu } from "@/components/menu"
import { StatusUser } from "@/components/statusUser"
import { useState } from "react"

const Page = ()=>{
  let [nomeUsuario, setNomeUsuario] = useState<string>()
  let [valorInput, setValorInput] = useState<string>()
  let [usuarioLogado, setUsuarioLogado] = useState<boolean>()

  function addNomeUsuario (e: {key: string }){
    if(e.key === 'Enter'){
      setNomeUsuario(valorInput)
      setValorInput('')
      setUsuarioLogado(true)
    }
  }

  function addNomeUsuarioClick (){
    setNomeUsuario(valorInput)
    setValorInput('')
    setUsuarioLogado(true)
  }

  return (
    <div>
      

      {usuarioLogado ?
        <div style={{flexDirection: "column", height: "100vh"}}>

          <Menu />
          <div style={{flex: "1", display: "flex", height: "100%"}}>
            <div style={{flex: "1", display:"flex", flexDirection:"column"}}>
              <AreaMensagem />
              <AreaDigitar />
            </div>
            <StatusUser />
          </div>
          <script src="/socket.io/socket.io.js"></script>
          </div>
        
        :

          <div className="bg-blue-100 h-screen flex justify-center items-center">

            <div className="bg-blue-500 rounded-lg p-3 text-center flex-col">
              <h1 className=""><strong>ESCOLHA UM NOME DE USUÁRIO</strong></h1>

              <div className="flex">
                <input className="bg-white rounded-lg border border-black p-1 m-1 flex-1"
                
                value={valorInput} 

                onChange={(e)=>setValorInput(e.target.value)}
                
                onKeyDown={addNomeUsuario} type="text"/>

                <button className="bg-blue-50 rounded-lg p-1 m-1" onClick={addNomeUsuarioClick}>Entrar</button>

              </div>
          
            </div>
          </div>
      }

  </div>
  )
}

export default Page