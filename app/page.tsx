"use client"

import { AreaDigitar } from "@/components/areaDigitar"
import { AreaMensagem } from "@/components/areaMensagem"
import { Login } from "@/components/Login"
import { Menu } from "@/components/menu"
import { StatusUser } from "@/components/statusUser"
import { useState } from "react"
import { InfoChat } from "@/types/InfoChat"
import { io } from "socket.io-client"

const Page_chat = ()=>{
  const [lista, setLista] = useState<string[]>([])
  const [nomeUsuario, setNomeUsuario] = useState<string>('')
  const [valorInput, setValorInput] = useState<string>('')
  const [entradaSaida, setEntradaSaida] = useState<string>('')
  let [msg, setMsg] = useState<InfoChat[]>([])
  let [inputMsg, setInputMsg] = useState<string>('')

  const socket = io('http://localhost:3000', {
    transports: ["websocket", "polling"],
    withCredentials: true
  })

  socket.on('lista', (usuariosConectados: string[])=>{
        setLista(usuariosConectados)
  })

  socket.on('lista-broadcast', (data)=> {
    if(data.joined){
      setEntradaSaida(`${data.joined} entrou`)
    }
    if(data.left){
      setEntradaSaida(`${data.joined} saiu`)
    }
    setLista(data.list)
  })

  function addNomeUsuario (){
    setNomeUsuario(valorInput)
    setValorInput('')
    socket.emit('entrada', valorInput)
  }
  
  if(nomeUsuario === ''){
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
                  entradaSaida={entradaSaida}
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
                lista={lista}
              />
            </div>
            <script src="/socket.io/socket.io.js"></script>
      </div>
    )}

export default Page_chat