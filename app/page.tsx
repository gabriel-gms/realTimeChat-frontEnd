"use client"

import { AreaDigitar } from "@/components/areaDigitar"
import { AreaMensagem } from "@/components/areaMensagem"
import { Login } from "@/components/Login"
import { Menu } from "@/components/menu"
import { StatusUser } from "@/components/statusUser"
import { useState } from "react"
import { io } from "socket.io-client"

const Page_chat = ()=>{
  const [lista, setLista] = useState<string[]>([])
  const [nomeUsuario, setNomeUsuario] = useState<string>('')
  const [valorInput, setValorInput] = useState<string>('')
  const [entradaSaida, setEntradaSaida] = useState<string>('')
  const [msg, setMsg] = useState<string>('')
  const [inputMsg, setInputMsg] = useState<string>('')
  const [objMsg, setObjMsg] = useState([{nome: '', msg: ''}])

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

  if(msg!==''){
    socket.emit('msg', {username: nomeUsuario, msg: msg})
  }

  socket.on('msg', (data)=>{
    setObjMsg([...objMsg,{nome: data.username, msg: data.msg}])
    setMsg('')
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
                  nomeUsuario={nomeUsuario}
                  entradaSaida={entradaSaida}
                  objMsg={objMsg}
                />
                <AreaDigitar 
                  msg={msg}
                  setMsg={setMsg}
                  inputMsg={inputMsg}
                  setInputMsg={setInputMsg}
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