import React, {useEffect, useState} from "react";

function EffectEx () {
    const [stateCar, setStateCar] = useState(false);
    const [contar, setContar] = useState(0);

    useEffect(() => {
        console.log("Total: " + contar)
        
    }, [/* Variables que queremos que detecte para que se ejecute otra vez*/contar])

    const encenderApagar = () =>{
        setStateCar(!stateCar)
        setContar(contar + 1)
    }
    return(
        <div className="App">
            <header>
                <h3>El coche está {stateCar ? "Encendido" : "Apagado"}</h3>
                <h4>Clicks: {contar}</h4>
                <button onClick={encenderApagar}> Encender / Apagar</button>
            </header>
        </div>
    )
}

export default EffectEx