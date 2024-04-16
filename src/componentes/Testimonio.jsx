import React from "react";
import "../hojas-de-estilo/Testimonio.css"


function Testimonio (props) {
    return (
        <div className="contenedor-testimonios">
            <img 
            className="imagen-testimonio"
            src={require (`../img/testimonio-${props.imagen}.png`)}
            alt="Foto de la persona del testimonio" />
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
                <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
                <p className="texto-testimonio">"{props.testimonio}"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, sapiente, maiores eaque doloremque ex eius minus itaque labore accusantium saepe esse, eum nisi vel sit sint porro iure omnis magni.</p>
            </div>
        </div>
    );
}

export default Testimonio;