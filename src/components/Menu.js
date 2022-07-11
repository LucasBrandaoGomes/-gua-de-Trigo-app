import React from 'react'
import styled from "styled-components"
import axios from 'axios'
import  { useNavigate }  from  'react-router-dom' 
import  {  useState, useContext, useEffect }  from  "react"
import logoIcon from '../images/logoIcon.jpeg'
import Context from '../contexts/Context.js'
import Bag from './Bag'


export default function Menu(){

    const {infoLogin, infoBag, setInfoBag} = useContext(Context)
    const [products, setProducts] = useState([])
    const [showBag, setShowBag] = useState(false)
    const showOrHide = () => {
        if (showBag){
            setShowBag(false);
        }else{
            setShowBag(true)
        }
    
    }
    useEffect(()=>{
        const promise = axios.get("http://localhost:5000/products")
        
        promise.then(res => {
            setProducts([...res.data])
        })

        promise.catch(err => {
            console.log(err)
        })
    }, [])  
    
    function Add(product){
        setInfoBag ([...infoBag, product])    
    }
       
    function OneProduct({id, url, name, details, price, product}){
        console.log(products)
        return (
            <>
                <Product key={id}>
                    <img src={url} alt="produto" />
                    <h1>{name}</h1>
                    <div> 
                        <h2>{details}</h2>
                        <h2>R${price}</h2>
                    </div>
                    <button onClick={()=> Add({product})}>Adicionar</button>
                </Product>
            </>
        )
    }

    return(
        <Container>
            <Header>
                <a href="#page-1">
                    <img src={logoIcon} alt="header-logo"/>
                    <span>ÁGUA DE TRIGO</span>
                </a>
                <div id = "search">
                    <ion-icon name="search-outline"></ion-icon>
                    <input type="text" placeholder="Pesquisar..."/>
                    
                </div>
                <div id = "user">
                    {(infoLogin)? 
                    (
                        <span>Olá {infoLogin.name}</span>
                    ):(
                    <>
                        <button>Login</button>
                        <button>Cadastro</button>
                    </>
                    )            
                    }
                </div>
                <ion-icon onClick={showOrHide} name="cart-outline"></ion-icon>
                
            </Header>
            <Catalog>
                <h1>Itens</h1>
                <div>
                    {products.map(product =>
                    <OneProduct id={product.id} url={product.url} name={product.name} details={product.details} price={product.price} product={product}></OneProduct> 
                    )}
                </div>
            </Catalog>
            { showBag ? <Bag></Bag> : null }
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;   
    display: flex;
    background-color: #fff5e0;
    flex-direction: column;`

const Header = styled.div`
    width: 100%;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #D37545;
    position: fixed;
    top: 0;  

    a{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: #fff5e0;

        img{
            width: 45px;
            height: auto;
            margin-left: 20px;
            cursor: pointer;
            border-radius: 50%;
        }  
        span{
            margin-left: 5px;
            font-size: 17px;
            font-weight: bold;
            font-family: 'Shippori Antique';
            text-decoration: none;
            text-align: center;
        }
    }
    
    
    
    div#search{
        background-color:#fff5e0;
        border:solid 1px #fff5e0;
        border-radius:8px;
        width:300px;
        display: flex;
        align-items: center;

        input{
            float:left;
            background-color:transparent;
            padding-left:5px;
            font-family: 'Shippori Antique';
            font-style: italic;
            font-size:18px;
            border:none;
            height:32px;
            width:260px;
        }      
        ion-icon{
            color: #696969;
            margin-left: 2px;
        }  
    }

    div#user{
        display: flex;
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
    }
    ion-icon{
        color: #FFF5E0;
        font-size: 35px;
    }
    
    `

const Catalog = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    
    
    margin-top: 90px;
        
    h1{
        font-family: 'Shippori Antique';
        font-size: 32px;
        font-weight: 700;
        color: #D37545;
        text-align: left;
        margin: 1.5%;
    }
    div{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        
        
    }`

const Product = styled.div`
    display: flex;
    flex-direction: column;
       
    width: 288px;
    height: 450px;
    background-color: #D37545;
    margin: 1%;
    align-items: center;
    
    
    img{
       
        width:100%;
        height:64%;
        object-fit: cover;
       
    }

    h1{
        font-size: 100%;
        color: #FFF5E0;
        margin-top: 5%;
    }

    div{
        width: 100%;
        justify-content: space-around;

        h2{
            font-size: 90%;
            color: #FFF5E0;
            font-family: 'Shippori Antique';
            margin-top: 3%;
        }
    }

    

    button{
        border: none;   
            font-family: 'Shippori Antique';
            font-style: normal;
            font-weight: 700;
            font-size: 15px;            
            text-align: center;
            color: #D37545;
            display: flex;        
            justify-content: center;
            align-items: center;
            padding: 9px 61px;
            margin-top: 7%;    
            width: 90%;
            height: 10%;
            background: #FFF5E0;
            border: 1px solid #D37545;
            border-radius: 5px;
            cursor: pointer;
    }
    `

    
