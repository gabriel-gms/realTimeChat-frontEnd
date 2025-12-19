type Props = {
    lista: string[]
}

export const StatusUser = ({lista}: Props)=>{
    return(
        <div className="border-l-2 pl-5 bg-blue-200 w-72">
            <h3>Usuários online</h3>
            <ul className="list-disc marker:text-green-700">
                {
                    lista.map(item => (
                        <li>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}