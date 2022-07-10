import styled from "styled-components";
import {useNavigate} from 'react-router-dom';
import logoIcon from "../images/logoIcon.jpeg"
import logo2 from "../images/logo2.jpeg"

export default function Init(){
    
    const navigate = useNavigate();

    function SignUp(){
        navigate("/sign-up")
    }

    function SignIn(){
        navigate("/sign-in")
    }

    function Menu(){
        navigate("/menu")
    }
    return (
        <Container>
            <Header>                
                <a href="#page-1">
                    <img src={logoIcon} alt="header-logo"/>
                </a>
                <div>
                    <nav>
                        <a href="#page-2">Sobre Nós</a>
                        <a href="#page-3">Fermentação Natural</a>
                        <a href="#page-4">Levain</a>                     
                    </nav> 
                    <button onClick = {SignIn}>Login</button>
                    <button onClick = {SignUp}>Cadastro</button>
                </div>
                
            </Header>
            
            <scroll-container>
                    
                <scroll-page id="page-1">
                    <Page1>
                        <button onClick={Menu}>Catálogo</button>
                    </Page1>
                </scroll-page>
                    
                <scroll-page id="page-2">
                    <Page2>
                        <div>
                            <h1>SOBRE NÓS</h1>
                            <p>• Queremos levar até você a possibilidade de se deliciar com uma Foccacia de fermentação natural. Além de super saborosa tem benefícios de uma alimentação saudável</p>
                            <p>• Vemos o ato de comer como um ato de partilha e de presença. Nossa focaccia é feita em conjunto e é para ser compartilhada</p>
                            <p>• Quremos mostrar a importância de olhar com mais cuidado para o que comemos e como comemos. Por isso, oferecemos focaccias artesanais de alta qualidade, com preços justos e um serviço muito atencioso</p>    
                        </div>  
                        <Footer>
                            <h2><ion-icon name="logo-instagram"/> @aguadetrigo</h2>
                            <h2><ion-icon name="logo-whatsapp"/> (27)99999-9999</h2>
                        </Footer>                      
                    </Page2>
                </scroll-page>

                <scroll-page id="page-3">
                    <Page2>
                        <div>
                            <h1>FERMENTAÇÃO NATURAL</h1>
                            <p>• Seu sabor é incomparável ao do pão tradicional</p>
                            <p>• Possui um índice glicêmico mais baixo do que outros pães, pois a longa fermentação permite que os lactobacilos e leveduras consumam uma maior quantidade de açúcar da farinha</p>
                            <p>• Sua digestão é mais fácil, até mesmo para aqueles que são sensíveis ao glúten, devido a sua fermentação mais lenta onde as proteases (enzima que degradam proteínas) presentes no trigo têm mais tempo de agir sobre o glútem</p>    
                            <p>• Pode ser armazenado por mais tempo, pois o ácido acético que inibe o crescimento de bolor é produzido pelas bactérias durante a fermentação</p>    
                            <p>• Aumenta o teor de bactérias benéficas no intestino</p>                       
                            <p>• Possui uma série de nutrientes devido a complexidade de sua composição</p>
                        </div> 
                        <Footer>
                            <h2><ion-icon name="logo-instagram"/> @aguadetrigo</h2>
                            <h2><ion-icon name="logo-whatsapp"/> (27)99999-9999</h2>
                        </Footer>                                                                              
                    </Page2>
                </scroll-page>
                <scroll-page id="page-4">
                    <Page2>
                        <div>
                            <h1>LEVAIN</h1>
                            <p>• Para quem ainda não tem intimidade com a fermentação natural, apresentamos o Levain, o fermento usado para produzir nossas focaccias</p>
                            <p>• O Levain, Massa Madre, Massa Azeda ou ainda Sourdough nada mais é do que uma mistura de água trigo que contém microorganismos conhecidos como Leveduras e Lactobacilos. Eles utilizam moléculas presentes no trigo, dentre elas os carboidratos, para realizar a fermentação, gerando gases e disponibilizando nutrientes</p>
                            <p>• O resultado é um pão com menor teor de açucares, com maior disponibilidade de nutrientes e tambem de facil digestão. Basicamente, os microorganismos nos ajudam na sua metabolização</p>
                        </div> 
                        <Footer>
                            <h2><ion-icon name="logo-instagram"/> @aguadetrigo</h2>
                            <h2><ion-icon name="logo-whatsapp"/> (27)99999-9999</h2>
                        </Footer>                                                                              
                    </Page2>
                </scroll-page>                                              
            </scroll-container> 
            

                      
            
        </Container>
    )
}

const Container = styled.div `
    width: 100%;
    height: 100vh;   
    display: flex;
    flex-direction: column;
      
    
    scroll-container {
        display: block;
        width: 100%;
        height: 100vh;        
        overflow-y: scroll;
        scroll-behavior: smooth;
        display: block;
        margin-top:80px;        
        text-align: center;
        overflow: hidden;
    }`


const Header = styled.div `
    width: 100%;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #D37545;
    position: fixed;
    top: 0;    

    img{
        width: 45px;
        height: auto;
        margin-left: 20px;
        cursor: pointer;
        border-radius: 50%;
    }    

    div{
        display: flex;
        align-items: center;
        justify-content: center;

        button{
            border: none;   
            font-family: 'Shippori Antique';
            font-style: normal;
            font-weight: 700;
            font-size: 15px;            
            text-align: center;
            color: #FFF5E0;
            margin-right: 20px;
            display: flex;        
            justify-content: center;
            align-items: center;
            padding: 9px 61px;
                 
            width: 90px;
            height: 36px;
            background: transparent;
            border: 1px solid #FFF5E0;
            border-radius: 8px;
            cursor: pointer;

            :hover{
                color: #D37545;
                background: #fff5e0;                
            }
        }
        a {    
            text-decoration: none;
            font-family: 'Shippori Antique';
            font-style: normal;
            font-weight: 700;
            font-size: 15px;            
            text-align: center;
            color: #FFFFFF;
            margin-right: 15px;            
            cursor: pointer;
        }
    }`
    
const Page1 = styled.div`
    width: 100%;
    height:100vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #D37545;
    background-size: auto 70vh;
    background-position: 50% 0%;
    background-repeat: no-repeat;
    background-image: url(${logo2});

    button{
        border: none;     
        font-family: 'Shippori Antique';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;        
        text-align: center;
        color: #D37545;
        margin-top: 15%;
        margin-left: 50%;
        margin-right: 50%;
        
        display: flex;        
        justify-content: center;
        align-items: center;
        padding: 9px 61px;               
        width: 235px;
        height: 50px;
        background: #fff5e0;
        
        border-radius: 8px;
        cursor: pointer;
        
    }`

const Page2 = styled.div`
width: 100%;
height:100vh;
display:flex;
flex-direction: column;    
background-color: #FFF5E0;

div{ 
    margin-top: 4%;

    h1{
        font-family: 'Shippori Antique';
        font-size: 32px;
        font-weight: 700;
        color: #D37545;
        text-align: left;
        padding: 10px 5%;
    }

    p{
        font-family: 'Shippori Antique';
        font-size: 25px;            
        color: #D37545;
        text-align: left;
        padding: 10px 5%;
        
    }
}`

const Footer = styled.footer` 
    position: absolute;
    bottom: 10px;   
    width: 100%;
    h2{      
        font-family: 'Shippori Antique';
        font-size: 15px;            
        color: #D37545;
        text-align: left;
        padding: 7px 1%;
    }
    
`






  
  