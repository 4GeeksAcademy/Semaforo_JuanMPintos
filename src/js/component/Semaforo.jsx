import React, { useState } from "react";

//create your first component
const Semaforo = () => {
	const [color, setColor] = useState("red")
//crear funcion del boton
	function cambiarColor(){
if (color === "red") {setColor("yellow")}
else if(color === "yellow"){setColor("green")}
else {setColor("red")}
};
//crear funcion boton morado
function agregarMorado(){
	//if {color === "violet" ? "violet light encencido" : "violet light"} onClick={()=>setColor("violet")}

}
	return (
		<>
			<div id="poste"></div>
			<div id="semaforo">
				<button className={color === "red" ? "red light encendido" : "red light"} onClick={()=>setColor("red")}></button>
				<button className={color === "yellow" ? "yellow light encendido" : "yellow light"} onClick={()=>setColor("yellow")}></button>
				<button className={color === "green" ? "green light encendido" : "green light"} onClick={()=>setColor("green")}></button>
			</div>
			<button id="boton" className="btn btn-danger" onClick={cambiarColor}>CambiarColor</button>
		</>


	)
};

export default Semaforo;
