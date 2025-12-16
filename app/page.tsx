"use client"

import { AreaDigitar } from "@/components/areaDigitar"
import { AreaMensagem } from "@/components/areaMensagem"
import { Login } from "@/components/Login"
import { Menu } from "@/components/menu"
import { StatusUser } from "@/components/statusUser"
import { useState } from "react"
import { InfoChat } from "@/types/InfoChat"

const Page_chat = ()=>{
  let [nomeUsuario, setNomeUsuario] = useState<string>('')
  let [valorInput, setValorInput] = useState<string>('')
  let [usuarioLogado, setUsuarioLogado] = useState<boolean>(false)

  let [msg, setMsg] = useState<InfoChat[]>([])
  let [inputMsg, setInputMsg] = useState<string>('')

  function addNomeUsuario (){
    setNomeUsuario(valorInput)
    setValorInput('')
    setUsuarioLogado(true)
  }

  if(!usuarioLogado){
    return <Login 
            valorInput={valorInput}
            setValorInput={setValorInput}
            addNomeUsuario={addNomeUsuario}
          />
  }

  return (
    <div className="h-screen flex flex-col">
          
          <Menu />
          <div className="flex-1 flex justify-between">
            <div className="flex-1 flex flex-col">
              <AreaMensagem 
                msg={msg}
              />
              <AreaDigitar 
                nomeUsuario={nomeUsuario}
                setMsg={setMsg}
                setInputMsg={setInputMsg}
                inputMsg={inputMsg}
                msg={msg}
              />
            </div>
            <StatusUser />
          </div>
          <script src="/socket.io/socket.io.js"></script>
    </div>
  )
}

export default Page_chat