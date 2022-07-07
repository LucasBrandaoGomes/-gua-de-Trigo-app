
import styled from "styled-components"
import { useState } from  "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp'
import SignIn from "./SignIn";
import InfoLoginContext from "../contexts/InfoLogin";
import Init from "./Init";
import Menu from './Menu'
import Bag from './Bag'

export default function App(){
    
    const [infoLogin, setInfoLogin] = useState({});
    
    return(
        <InfoLoginContext.Provider value = {{infoLogin , setInfoLogin}}>
            <BrowserRouter>
                    <div className="root">
                        <Container>
                            <Routes>
                                {/*<Route path="/" element={<Init />}/>*/}
                                <Route path="/sign-in" element={<SignIn />}/>
                                <Route path="/sign-up" element={<SignUp />}/>
                                <Route path="/menu" element={<Menu />}/>
                                <Route path="/bag" element={<Bag />}/>
                            </Routes>
                        </Container>
                    </div>
            </BrowserRouter>
        </InfoLoginContext.Provider>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    `