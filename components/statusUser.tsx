import style from "@/styles/statusUser.module.css"

export const StatusUser = ()=>{
    return(
        <div className={style.status}>
            <h3>Usuários online</h3>
            <ul>
                <li>João</li>
                <li>Mário</li>
                <li>Ana</li>
                <li>Camila</li>
                <li>Carlos</li>
                <li>Zé</li>
                <li>Flavinho do pneu</li>
            </ul>
        </div>
    )
}