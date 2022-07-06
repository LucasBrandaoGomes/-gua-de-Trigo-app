import styled from "styled-components";
import {useNavigate} from 'react-router-dom';

export default function Init(){
    
    const navigate = useNavigate();

    function SignUp(){
        navigate("/signup")
    }

    function SignIn(){
        navigate("/login")
    }
    return (
        <></>
    )
}