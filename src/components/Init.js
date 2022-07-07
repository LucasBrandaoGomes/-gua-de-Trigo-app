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
        <Container>
            <Header>
                <nav>
                    <a href="#page-1">Sobre Nós</a>
                    <a href="#page-2">Pão</a>                    
                </nav> 
                <button onClick = {SignIn}>Login</button>
                <button onClick = {SignUp}>Cadastro</button>
            </Header>
            {/* <scroll-container>
                <scroll-page id="page-1">1</scroll-page>
                <scroll-page id="page-2">2</scroll-page>                
            </scroll-container> */}
        </Container>
    )
}

const Container = styled.div `
    width: 100%;
    height: 100vh;
    background-color: #FFF5E0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;



    scroll-container {
    display: block;
    width: 350px;
    height: 200px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    display: block;
    margin: 0 auto;
    text-align: center;
    }
    scroll-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 5em;
    }`

const Header = styled.div `
    width: 100%;
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #D37644;
    position: fixed;
    top: 0;

    button{
        border: none;              

        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        margin-right: 40px;

        display: flex;        
        justify-content: center;
        align-items: center;
        padding: 18px 122px;
        gap: 10px;        
        width: 180px;
        height: 72px;
        background: #389BAA;
        border-radius: 8px;
    }
    a {    
        text-decoration: none;
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        margin-right: 40px;
        font-family: 'Roboto', sans-serif;
        cursor: pointer;
    }   
  `


  
  