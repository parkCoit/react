import { useState } from "react"
import "uat/style/Login.css"
import {iris} from 'shop/api'

const Stroke = () =>{

    const [inputs, setInputs] = useState({})
    const {SepalLengthCm, SepalWidthCm,
         PetalLengthCm, PetalWidthCm} = inputs

    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target
        setInputs({...inputs, [name]: value})
    }

    const onClick = e => {
        e.preventDefault()
        const request = {SepalLengthCm, SepalWidthCm,
            PetalLengthCm, PetalWidthCm}
        iris(request)
        .then((res) => {
            console.log(`response is ${res.config.data}`)
            localStorage.setItem('token', JSON.stringify(res.config.data))
            
        })
        .catch((err)=>{
            console.log(err)
            alert('에러')
        })
    }

    return(<>
        SepalLengthCm : <input type="text" name="SepalLengthCm" onChange={onChange} /><br/>
        SepalWidthCm : <input type="text" name="SepalWidthCm" onChange={onChange} /><br/>
        PetalLengthCm : <input type="text" name="PetalLengthCm" onChange={onChange} /><br/>
        PetalWidthCm : <input type="text" name="PetalWidthCm" onChange={onChange} /><br/>
        <button onClick={onClick}> Iris </button>
    </>)
}

export default Stroke