import React, { useEffect, useState } from 'react';
import Table from './Table';
import './Terminal.css';
import TerminalDetail from './TerminalDetail';
const Terminal = () => {
    const [data, setData] = useState([])
    const [q, setQ] = useState('')

    useEffect(() => {
        const fetchScrapedData = async () => {
            const response = await fetch('http://localhost:5500/api/web-scrapping')
            const json = await response.json()

            if (response.ok) {
                setData(json)
            }
        }
        fetchScrapedData()
    }, [])

    // const search = (data) => {
    //     return data?.filter(d => d.name?.toLowerCase()?.includes(q))
    // }
    const search = data?.result?.filter((filteredData) => {
        return Object.keys(filteredData).some((key) =>
            filteredData[key].toString().toLowerCase().includes(q.toLowerCase())
        )
    })


    return (
        <div className="terminal-container">
            <div className="terminal-header">
                <div className="prompt">
                    user@localhost:~$
                </div>
            </div>
            <div className="terminal-body">
                <p>Welcome to the terminal interface!</p>
                <p>Enter a command to get started:</p>
                <input type="search" placeholder="Search" onChange={(e) => setQ(e.target.value)} />
                {/* <div>
                    {data?.result && data?.result?.filter(d => d.name?.toLowerCase()?.includes(q))?.map(d => (
                        <li key={d.rank}>{d.name}</li>
                    ))}
                </div>

                <Table data={data} /> */}

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {search?.map((filteredData, index) => (
                            <tr key={index}>
                                <td>{filteredData.name}</td>
                                <td>{filteredData.price}</td>
                                <td>{filteredData.volume}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Terminal;