import { Route, Routes } from "react-router-dom"
import {Counter, Navigation,Footer } from "common"
import {Login, SignUp} from "uat"
import {Schedule} from "../../todos"
const Home = () =>{
    return (<>
        <table style={{ width: "1200px", height: "550px", margin: "0 auto", border: "1px solid black"}}>
            <thead>
                <tr style={{ width: "20%",height: "80%",  border: "1px solid black"}}>
                    <td style={{ width: "100%", border: "1px solid black"}}>
                    <Navigation/>
                    </td>
                </tr>
                </thead>
            <tbody>
                <tr style={{ width: "20%",height: "80%",  border: "1px solid black"}}>
                    <td style={{ width: "100%", border: "1px solid black"}}>
                    <Routes>
                        <Route path="/counter" element={<Counter/>} ></Route>
                        <Route path="/home" element={<h3>스케줄러</h3>} ></Route>
                        <Route path="/todos" element={<Schedule/>} ></Route>
                        <Route path="/auth/signup" element={<SignUp/>} ></Route>
                        <Route path="/auth/login" element={<Login/>} ></Route> 
                    </Routes>
                    </td>
                </tr>
                <Footer/>
            </tbody>
        </table>
    
        </>)
}

export default Home