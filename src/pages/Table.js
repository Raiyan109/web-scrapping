import React from 'react';
import './Terminal.css'
const Table = ({ data }) => {
    return (
        <div>
            <table style={{ fontSize: '15px' }}>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>1 Hour</th>
                        <th>24 Hours</th>
                        <th>7 day</th>
                        <th>Market Cap</th>
                        <th>Volume (24h)</th>
                        <th>Circulating Supply</th>
                        <th>Last 7 days</th>
                    </tr>
                    {data.result && data.result.map((d) => (
                        <tr key={d.rank}>
                            <td>{d.name}</td>
                            <td>{d.price}</td>
                            <td>{d.hour}</td>
                            <td>{d.day}</td>
                            <td>{d.week}</td>
                            <td>{d.marketCap}</td>
                            <td>{d.volume}</td>
                            <td>{d.circulatingSupply}</td>
                            <td>{d.last7days}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;