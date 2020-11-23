import React, { useEffect, useState } from 'react'
import './styles.css'
import api from './services/api'

interface Cases {
    confirmados: BigInteger;
    obitos: BigInteger;
    suspeitos: BigInteger;
    descartados: BigInteger;
    recuperados: BigInteger;
    acompanhados: BigInteger;
    inicio: String;
    fim: String;
}


const Main = () => {
    const [cases, setCases] = useState<Cases[]>([])
    const [numbercases, setNumbercases] = useState()

    const loadCases = async () => {
        const response = await api.get<Cases[]>('/cases')
        setCases(response.data)
    }

    useEffect(() => {
        loadCases()
    }, [])

    return (
        <div className="main">
            <h1>Casos de Covid19 município X</h1>
            <table>
                <tr>
                    <th>Confirmados</th>
                    <th>Obitos</th>
                    <th>Suspeitos</th>
                    <th>Descartados</th>
                    <th>Recuperados</th>
                    <th>Acompanhados</th>
                    <th>Início</th>
                    <th>Fim</th>
                </tr>
                {cases.map((value) =>
                    <tr>
                        <th>{value.confirmados}</th>
                        <th>{value.obitos}</th>
                        <th>{value.suspeitos}</th>
                        <th>{value.descartados}</th>
                        <th>{value.recuperados}</th>
                        <th>{value.acompanhados}</th>
                        <th>{value.inicio}</th>
                        <th>{value.fim}</th>
                    </tr>

                )}
            </table>
            <h3>Quantidade de registros: {cases.length}</h3>
        </div>
    )

}

export default Main