import style from "@/styles/areaMensagem.module.css"

export const AreaMensagem = ()=>{
    return (
        <div className={style.mensagem}>
            <div className={style.caixatexto}>
                <h3>User</h3>
                <p>conteudo da mensagem</p>
            </div>
            
            <div className={style.caixatextoDois}>
                <h3>User 2</h3>
                <p>conteudo da mensagem 2</p>
            </div>

            <p className={style.entradaSaida}>fulano entrou</p>
        </div>
    )
}