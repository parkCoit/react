
import { useState } from "react"
import { Doughnut } from 'react-chartjs-2'
import "uat/style/Login.css"
import {stroke} from 'blog/api'

const Stroke = () =>{

    const onClick = e => {
        e.preventDefault()
        stroke()
        .then((res) => {
            console.log(`response is ${res.config.data}`)
            localStorage.setItem('token', JSON.stringify(res.config.data))
        })
        .catch((err)=>{
            console.log(err)
            alert('아이디와 비밀번호를 다시입력')
        })
    }

    return(<>
        <button onClick={onClick}> 로그인 </button>
    </>)
}

export default Stroke