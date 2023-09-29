import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


export default function Phones(props) {
    
   const {phoneId, setIsDetailsShowing} = props
    const [phoneDetails, setPhoneDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    getData()
},[])


const getData = async () => {
    try {
        
const response = await axios.get(`http://localhost:5005/api/phones/${phoneId}`)

setPhoneDetails(response.data)
setIsLoading(false)
    } catch (error) {
        
    }
}
const dontShowDetails = () => {
    setIsDetailsShowing(null)
}


if (isLoading) {
    return <h3>cargando</h3>
  }

  return (
    <div>

<p>Compañia: {phoneDetails.manufacturer}</p>
<p>Descripción:{phoneDetails.description}</p>
<p>Pantalla: {phoneDetails.screen}</p>
<p>Procesador {phoneDetails.processor}</p>
<p>Memoria ram {phoneDetails.ram}</p>
<p>Color: {phoneDetails.color}</p>
<p>Price: {phoneDetails.price}</p>
<img src={`http://localhost:5173/assets/images/${phoneDetails.imageFileName}`} alt="phoneImg" width={200}/>
<br />
<button onClick={dontShowDetails} >Ocultar detalles</button>





    </div>
  )
}
