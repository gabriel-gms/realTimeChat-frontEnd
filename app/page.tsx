"use client"

import { AreaDigitar } from "@/components/areaDigitar"
import { AreaMensagem } from "@/components/areaMensagem"
import { Login } from "@/components/Login"
import { Menu } from "@/components/menu"
import { StatusUser } from "@/components/statusUser"
import { useState } from "react"

const Page = ()=>{
  let [nomeUsuario, setNomeUsuario] = useState<string>('')
  let [valorInput, setValorInput] = useState<string>('')
  let [usuarioLogado, setUsuarioLogado] = useState<boolean>(false)

  function addNomeUsuarioClick (){
    setNomeUsuario(valorInput)
    setValorInput('')
    setUsuarioLogado(true)
  }

  if(!usuarioLogado){
    return <Login 
            valorInput={valorInput}
            setValorInput={setValorInput}
            addNomeUsuarioClick={addNomeUsuarioClick}
          />
  }

  return (
    <div className="h-screen flex flex-col">
          
          <Menu />
          <div className="flex-1 flex justify-between">
            <div className="flex-1 flex flex-col">
              <AreaMensagem />
              <AreaDigitar />
            </div>
            <StatusUser />
          </div>
          <script src="/socket.io/socket.io.js"></script>
    </div>
  )
}

export default Page