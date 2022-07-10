import styled from "styled-components"
import {useState} from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner";
import {useNavigate} from 'react-router-dom';
import { useContext } from "react";
import Context from "../contexts/Context.js"
import logoIcon from "../images/logoIcon.jpeg"
import line from "../images/line.png"


export default function SignIn(){

    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [disableButton,setDisableButton] = useState(false)
    
    const { setInfoLogin } = useContext(Context);

    function SubmitLogin(event){
        event.preventDefault();
        
        setDisableButton(true);

        const sendLogin =
            {
                email:email,
                password:password
            }
            
        const promise = axios.post("http://localhost:5000/sign-in", sendLogin)
        
        promise            
        .then(res => {
            setInfoLogin({...res.data});
            navigate("/menu");

        })
        .catch(err=> {
            alert("Erro Login");
            console.log(err)
            setDisableButton(false)})
    }

    return(
        <>
            <ContainerAuth>  
                <h1>Água de Trigo</h1>
                <Form onSubmit={SubmitLogin}>
                    <input type="email" disabled={disableButton} placeholder="email"  value={email} onChange={e => setEmail(e.target.value)} required/>
                    <input type="password" disabled={disableButton} placeholder="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                    <Entrar type="submit" disabled={disableButton}>{disableButton ? <ThreeDots color="white"/> : "Entrar"}</Entrar>
                </Form >
                <Cadastrese>
                    <Link to="/sign-up" style={{textDecoration: 'none'}}>
                        <p>Não tem uma conta?Cadastre-se</p>
                    </Link>
                </Cadastrese>
                <RetornaMenu>
                    <a href="menu">
                        <img src={logoIcon} alt="icone-logo direciona para catálogo"/>
                    </a>
                    <p>Ver produtos</p>
                </RetornaMenu>
            </ContainerAuth>
        </>
   )
}

const ContainerAuth = styled.div`
    width: 100%;
    height: 100vh;   
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    background-color: #D37545;
    background-color: #D37545;
    background-image: url(${line}) ;
    background-repeat: no-repeat;
    background-size:125%;
    background-position-x: center;
    background-position-y: 63.5%;

    h1{
    font-family: 'Shippori Antique';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 31px;

    color: #fff5e0;

    margin-bottom: 75px;

    }
`

const Form = styled.form`
    display:flex;
    flex-direction: column;
    width: 470px;
    background-color: #D37545;
    input{
        height:6vh;
        background: ${props => props.disabled ? "grey" : "#fff5e0" };
        color: ${props => props.disabled ? "#AFAFAF" : "grey" };
        font-family: 'Lexend Deca';
        font-style: italic; 
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        margin-bottom:8px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        ::placeholder{
            font-size: 30px;
            color: #C0C0C0;}
        }
    `
const Entrar = styled.button`
        border: none;     
        font-family: 'Shippori Antique';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 26px;
        text-align: center;
        color: #D37545;
        
        display: flex;        
        justify-content: center;
        align-items: center;
        padding: 18px 122px;
        gap: 10px;        
        width: 470px;
        height: 75px;
        background: #fff5e0;
        
        border-radius: 8px;
        opacity: ${props => props.disabled ? 0.4 : 1 };

        &:hover{
            cursor:pointer;
        }
    `
const Cadastrese = styled.div`
    margin-top:35px;
    p{
        font-family: 'Shippori Antique';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 18px;

        color: #fff5e0;
    }
`
const RetornaMenu = styled.div`
    margin-top:45px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    
    &:hover{
            cursor:pointer;
        }

    img{
        width: 60px;
        height: auto;
        cursor: pointer;
        border-radius: 50%;

    }
    p{
        font-family: 'Shippori Antique';
        font-style: italic;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;

        color: #fff5e0;
    }
`