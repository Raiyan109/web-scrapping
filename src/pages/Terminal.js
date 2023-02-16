import React, { useEffect, useState } from 'react';
import './Terminal.css';
import TerminalDetail from './TerminalDetail';
const Terminal = () => {
    const [data, setData] = useState([])
    const [q, setQ] = useState('')
    console.log(data.result.filter(d => d.name.toLowerCase().includes('bi')));
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
                <div>
                    {data.result && data.result.filter(d => d.name.toLowerCase().includes(q)).map(d => (
                        <li key={d.rank}>{d.name}</li>
                    ))}
                </div>
                {/* <div>
                    {
                        data.result && data.result.map((d) => (
                            <TerminalDetail key={d.rank} d={d} />
                        ))
                    }
                    <table>
                        <thead>
                            <tr>
                                {
                                    data?.result?.map(d => <th>{d.name}</th>)
                                }
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {
                                    data?.result?.map(d => <td>
                                        {d.price}
                                    </td>)
                                }
                            </tr>
                        </tbody>
                    </table>
                </div> */}
            </div>
        </div>
    );
};

export default Terminal;