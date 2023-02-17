import React, { useEffect, useState } from 'react';

import './Terminal.css';

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

                <table style={{ fontFamily: "'Courier New', monospace", border: '2px solid #000000', backgroundColor: '#4A4A4A', width: '100%', height: '200px', textAlign: 'center', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '2px solid #000000', padding: '3px 2px' }}>Index</th>
                            <th style={{ border: '2px solid #000000', padding: '3px 2px' }}>Rank</th>
                            <th style={{ border: '2px solid #000000', padding: '3px 2px' }}>Name</th>
                            <th style={{ border: '2px solid #000000', padding: '3px 2px' }}>Price</th>
                            <th style={{ border: '2px solid #000000', padding: '3px 2px' }}>1 Hour</th>
                            <th style={{ border: '2px solid #000000', padding: '3px 2px' }}>24 Hours</th>
                            <th style={{ border: '2px solid #000000', padding: '3px 2px' }}>7 day</th>
                            <th style={{ border: '2px solid #000000', padding: '3px 2px' }}>Market Cap</th>
                            <th style={{ border: '2px solid #000000', padding: '3px 2px' }}>Volume (24h)</th>
                            <th style={{ border: '2px solid #000000', padding: '3px 2px' }}>Circulating Supply</th>
                            <th style={{ border: '2px solid #000000', padding: '3px 2px' }}>Last 7 days</th>
                        </tr>
                    </thead>
                    <tbody>
                        {search?.map((filteredData, index) => (
                            <tr key={index}>
                                <td style={{ border: '2px solid #000000', padding: '3px 2px' }}>{index}</td>
                                <td style={{ border: '2px solid #000000', padding: '3px 2px' }}>{filteredData.rank ?
                                    filteredData.rank
                                    :
                                    'No rank'
                                }</td>
                                <td style={{ border: '2px solid #000000', padding: '3px 2px' }}>{filteredData.name}</td>
                                <td style={{ border: '2px solid #000000', padding: '3px 2px' }}>{filteredData.price}</td>
                                <td style={{ border: '2px solid #000000', padding: '3px 2px' }}>{filteredData.hour}</td>
                                <td style={{ border: '2px solid #000000', padding: '3px 2px' }}>{filteredData.day}</td>
                                <td style={{ border: '2px solid #000000', padding: '3px 2px' }}>{filteredData.week}</td>
                                <td style={{ border: '2px solid #000000', padding: '3px 2px' }}>{filteredData.marketCap}</td>
                                <td style={{ border: '2px solid #000000', padding: '3px 2px' }}>{filteredData.volume}</td>
                                <td style={{ border: '2px solid #000000', padding: '3px 2px' }}>{filteredData.circulatingSupply}</td>
                                <td style={{ border: '2px solid #000000', padding: '3px 2px' }}>{filteredData.last7days}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Terminal;