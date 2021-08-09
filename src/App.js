import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [USD, setUSD] = useState(0);
    const [CRC, setCRC] = useState(0);
    const [SVC, setSVC] = useState(0);
    const [PAB, setPAB] = useState(0);
    const [HNL, setHNL] = useState(0);
    const [MXN, setMXN] = useState(0);
    const [BCH, setBCH] = useState(0);
    const [EUR, setEUR] = useState(0);

    const [tipo, setTipo] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setUSD((total / tipo) * 1);
        setCRC((total / tipo) * 619.6);
        setSVC((total / tipo) * 8.74);
        setPAB((total / tipo) * 1);
        setHNL((total / tipo) * 23.72);
        setMXN((total / tipo) * 20.07);
        setBCH((total / tipo) * 0.0017);
        setBCH((total / tipo) * 0.0017);
        setEUR((total / tipo) * 0.85);
    }, [total, tipo]);

    const handleTotalChange = (e) => {
        if (!isNaN(e.target.value)) {
            setTotal(e.target.value);
        }
    };

    return (
        <div className="App">
            <h1>Convertidor de unidades</h1>

            <p>Dolar Estadounidense: {USD}</p>
            <p>Colón Costarricense: {CRC}</p>
            <p>Colón Salvadoreño: {SVC}</p>
            <p>Balboa: {PAB}</p>
            <p>Lempira Hondureño: {HNL}</p>
            <p>Peso Mexicano: {MXN}</p>
            <p>Bitcoin Cash: {BCH}</p>
            <p>Euro: {EUR}</p>

            <hr />

            <h3>{total}</h3>

            <select
                onChange={(event) => setTipo(event.target.value)}
                value={tipo}
            >
                <option value={1}>Dolar Estadounidense</option>
                <option value={619.6}>Colón Costarricense</option>
                <option value={8.74}>Colón Salvadoreño</option>
                <option value={1}>Balboa</option>
                <option value={23.72}>Lempira Hondureño</option>
                <option value={20.07}>Peso Mexicano</option>
                <option value={0.0017}>Bitcoin Cash</option>
                <option value={0.85}>Euro</option>
            </select>
            <input onChange={handleTotalChange} value={total} />
        </div>
    );
}

export default App;
