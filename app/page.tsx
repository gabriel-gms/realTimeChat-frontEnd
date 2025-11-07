import { AreaDigitar } from "@/components/areaDigitar"
import { AreaMensagem } from "@/components/areaMensagem"
import { Menu } from "@/components/menu"
import { StatusUser } from "@/components/statusUser"

const Page = ()=>{
  return (
    <div>
      <Menu />
        <div style={{display: "flex"}}>
          <div>
            <AreaMensagem />
            <AreaDigitar />
          </div>
          <StatusUser />
        </div>
    </div>
  )
}

export default Page