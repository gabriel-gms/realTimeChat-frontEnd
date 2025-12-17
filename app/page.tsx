"use client"

import { AreaDigitar } from "@/components/areaDigitar"
import { AreaMensagem } from "@/components/areaMensagem"
import { Login } from "@/components/Login"
import { Menu } from "@/components/menu"
import { StatusUser } from "@/components/statusUser"
import { useState } from "react"
import { InfoChat } from "@/types/InfoChat"
import { Usuario } from "@/types/Usuario"

const Page_chat = ()=>{
  let num = -1

  const [nomeUsuario, setNomeUsuario] = useState<string>('')
  const [valorInput, setValorInput] = useState<string>('')
  const [usuarioLogado, setUsuarioLogado] = useState<Usuario[]>([])

  let [msg, setMsg] = useState<InfoChat[]>([])
  let [inputMsg, setInputMsg] = useState<string>('')

  function addNomeUsuario (){
    setNomeUsuario(valorInput)
    setValorInput('')
    setUsuarioLogado([...usuarioLogado, {id: num+1, nome: valorInput, logado: true}])
  }

  if(usuarioLogado.length === 0){
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
                usuarioLogado={usuarioLogado}
              />
              <AreaDigitar 
                nomeUsuario={nomeUsuario}
                setMsg={setMsg}
                setInputMsg={setInputMsg}
                inputMsg={inputMsg}
                msg={msg}
              />
            </div>
            <StatusUser 
              usuarioLogado={usuarioLogado}
            />
          </div>
          <script src="/socket.io/socket.io.js"></script>
    </div>
  )
}

export default Page_chat