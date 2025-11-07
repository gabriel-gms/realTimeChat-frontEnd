import style from "@/styles/areaDigitar.module.css"

export const AreaDigitar = ()=>{
    return (
        <div className={style.digitar}>
            <div>
                <input placeholder="Digite aqui a sua mensagem ..." type="text" />
            </div>
            
            <div>
                <button>Enviar</button>
            </div>
        </div>
    )
}