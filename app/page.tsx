"use client"

import { AreaDigitar } from "@/components/areaDigitar"
import { AreaMensagem } from "@/components/areaMensagem"
import { Login } from "@/components/Login"
import { Menu } from "@/components/menu"
import { StatusUser } from "@/components/statusUser"
import { useEffect, useState, useRef } from "react"
import { io, Socket } from "socket.io-client"

const Page_chat = ()=>{
  const socketRef = useRef<Socket | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [lista, setLista] = useState<string[]>([])
  const [nomeUsuario, setNomeUsuario] = useState<string>('')
  const [valorInput, setValorInput] = useState<string>('')
  const [entradaSaida, setEntradaSaida] = useState<string>('')
  const [inputMsg, setInputMsg] = useState<string>('')
  const [objMsg, setObjMsg] = useState<{nome: string, msg: string}[]>([])

  // Auto-scroll para a última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [objMsg, entradaSaida])

  useEffect(()=> {
    socketRef.current = io('https://real-time-chat-backend-x10o.onrender.com/', {
      transports: ["websocket", "polling"],
      withCredentials: true
    })

    socketRef.current.on('lista', (usuariosConectados: string[])=>{
      setLista(usuariosConectados)
    })

    socketRef.current.on('lista-broadcast', (data)=> {
      if(data.joined){
        setEntradaSaida(`${data.joined} entrou`)
      }
      if(data.left){
        setEntradaSaida(`${data.left} saiu`)
      }
      setLista(data.list)
    })

    socketRef.current.on('msg', (data)=>{
      setObjMsg(prev => [...prev, {nome: data.username, msg: data.msg}])
    })

    return () => {
      socketRef.current?.disconnect()
    }
  }, [])


  function enviarMensagem(){
    if(inputMsg!==''){
      socketRef.current?.emit('msg', {username: nomeUsuario, msg: inputMsg})
    }
    setInputMsg('')
  }

  function addNomeUsuario (){
    setNomeUsuario(valorInput)
    setValorInput('')
    socketRef.current?.emit('entrada', valorInput)
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
            <div className="flex-1 flex justify-between min-h-0">
              <div className="flex-1 flex flex-col min-h-0">
                <div className="flex-1 overflow-y-auto bg-blue-200">
                  <AreaMensagem 
                    nomeUsuario={nomeUsuario}
                    entradaSaida={entradaSaida}
                    objMsg={objMsg}
                  />
                  <div ref={messagesEndRef} />
                </div>
                <AreaDigitar 
                  inputMsg={inputMsg}
                  setInputMsg={setInputMsg}
                  enviarMensagem={enviarMensagem}
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