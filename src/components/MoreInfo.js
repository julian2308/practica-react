import React from "react";
import useUser from "../hooks/useUser";

export default function MoreInfo(){
     const { name, years } = useUser();

    return(
        <div>
            <h2>Información del usuario</h2>
            <p>Nombre: {name}</p>
            <p>Edad: {years}</p>
        </div>
    );
}