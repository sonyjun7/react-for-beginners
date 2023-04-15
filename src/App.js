import { useEffect, useState } from "react";

function App(){
    const [loading , setLoading] = useState(true);
    const [myUsd, setMyUsd] = useState(0);
    const [coinValue , setCoinValue] = useState(0);
    const [usdToCoin , setUsdToCoin] = useState(0);
    const [coins , setCoins] = useState([]);

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
            setCoins(json);
            setLoading(false);
            // console.log(json[0].quotes.USD.price);
            setCoinValue(json[0].quotes.USD.price);
        });
    }, [])

    const onChange = (event) => {
        // console.log(event);
        setMyUsd(event.target.value);
    }
    
    const onSelectChange = (event) =>{
        // console.log(event);
        // console.log(event.target.value);
        setCoinValue(event.target.value);
        // console.log(coinValue);
    }

    const onClick = () => {
        console.log(myUsd);
        console.log(coinValue);
        console.log(parseFloat(myUsd/coinValue));
        const transCoinVal = parseFloat(myUsd/coinValue);
        setUsdToCoin(transCoinVal);
    };

    return(
        <div>
            <h1>The Coins! {loading ? "" : coins.length}</h1>
            <input type="text" name="myUsdInput" value={myUsd}  onChange={onChange}/>
            <button onClick={onClick}>산정</button>
            <div>
                {usdToCoin ?? null} :  to Coin Value
            </div>
            <br/>
            {loading ? 
                ( <strong>...loading</strong> )
                : ( 
                <select name="coinSel" onChange={onSelectChange} defaultValue={coinValue}>
                    {coins.map((coin) => <option value={coin.quotes.USD.price}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</option>)}
                </select> 
                )
            }
        </div>
    )
}

export default App;