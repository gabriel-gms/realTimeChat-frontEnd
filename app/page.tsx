"use client"


import { AreaDigitar } from "@/components/areaDigitar"
import { AreaMensagem } from "@/components/areaMensagem"
import { Menu } from "@/components/menu"
import { StatusUser } from "@/components/statusUser"

const Page = ()=>{
  return (
    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
      <Menu />
        <div style={{flex: "1", display: "flex", height: "100%"}}>
          <div style={{flex: "1", display:"flex", flexDirection:"column"}}>
            <AreaMensagem />
            <AreaDigitar />
          </div>
          <StatusUser />
        </div>
    </div>
  )
}

export default Page