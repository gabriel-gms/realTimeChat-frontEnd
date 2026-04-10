type Props = {
    lista: string[]
}

export const StatusUser = ({lista}: Props)=>{
    return(
        <div className="border-l-4 border-blue-400 pl-6 bg-gradient-to-b from-blue-100 to-blue-50 w-72 shadow-lg">
            <h3 className="text-lg font-bold text-blue-700 mb-4 mt-4">Usuários Online</h3>
            <ul>
                {
                    lista.map((item, index) => (
                        <li key={index} className="text-gray-700 font-medium hover:text-blue-600 transition-colors">
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            {item}
                        </li>
                    ))
                }
            </ul>
            {lista.length === 0 && (
                <p className="text-gray-500 text-sm italic mt-4">Nenhum usuário online</p>
            )}
        </div>
    )
}