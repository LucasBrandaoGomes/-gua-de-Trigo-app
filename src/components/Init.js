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
                    <a href="#page-1">1</a>
                    <a href="#page-2">2</a>
                    <a href="#page-3">3</a>
                </nav>
            </Header>
            <scroll-container>
                <scroll-page id="page-1">1</scroll-page>
                <scroll-page id="page-2">2</scroll-page>
                <scroll-page id="page-3">3</scroll-page>
            </scroll-container>
        </Container>
    )
}

const Container = styled.div `
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
    a {
    display: inline-block;
    width: 50px;
    text-decoration: none;
    }
    nav {
    width: 339px;
    padding: 5px;
    border: 1px solid black;
    display: block;
    margin: 0 auto;
    text-align: center;
    }
  `


  
  