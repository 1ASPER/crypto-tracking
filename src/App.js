import { Button } from './components/Button';
import { Input } from './components/Input';
import { Typography } from './components/Typography';
import { Heading } from './components/Heading';  
import { Tooltip } from './components/Tooltip';
import { Accordion } from './components/Accordion';
import axios from 'axios';
import React, { useState, useEffect } from 'react';



function App() {

    const [cryptoData, setCryptoData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');

    const fetchData = async () => {
        console.log('Fetching data...'); // This will be displayed first (log for check)
        const response = await axios.get('https://api.coinlore.net/api/tickers/');
        console.log('Data fetched:', response.data.data); // This is the data we want to display (log for data)

        setCryptoData(response.data.data);
        setFilteredData(response.data.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
        </div>
    );
}

export default App;
