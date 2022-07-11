import styled from "styled-components"
import {useState} from "react"
import { ThreeDots } from "react-loader-spinner";
import { useContext } from "react";
import Context from "../contexts/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Bag({showBag, setShowBag}){

    const navigate = useNavigate();
    const {infoBag, setInfoBag, infoLogin} = useContext(Context);
    const [disableButton,setDisableButton] = useState(false)

    function SubmitOrder(event){
    
        event.preventDefault();
        setDisableButton(true);

        const newOrder = {...infoBag}

        if (!infoLogin?.token){
            alert("Efetue o login para finalizar a compra");
            navigate("/sign-in");
        }else{

            if (infoBag.length ===0){
                alert("Sua sacola está vazia")
                setDisableButton(false)
                return;
            }

            const config = {
                    headers: {
                        Authorization: `Bearer ${infoLogin.token}`
                    }
                }
            const promise = axios.post("http://localhost:5000/orders", newOrder, config)
            
            promise            
            .then(res => {
                alert("Pedido finalizado");
                setDisableButton(false);
                navigate("/menu");
                setShowBag(false)

            })
            .catch(err=> {
                if (err === 401){
                    alert("Efetue o login");
                    navigate('/sign-up');
                }else{
                    alert("Erro ao enviar pedido");
                    setDisableButton(false)}
            });
        }
    }
    
    function OverBalance() {
        let soma=0;
        let x;
        for (let i=0; i<infoBag.length; i++){
            x = Number.parseFloat(infoBag[i].price);
            soma+=x;
        }
        return soma;
    }

    function Product({url, name, details, price, id}){
        let subtotal = Number.parseFloat(price);
        return(
            <>
                <ProdutoInfo>
                    <ProdutoImg>
                        <img src={url} alt="produto selecionado" />
                    </ProdutoImg>
                            <div>
                                <p>{name}</p>
                                <p>{details}</p>
                            </div>
                            <div>
                                <p>R$ {subtotal}</p>
                                <p></p>
                            </div>
                            <div>
                                <ion-icon onClick={() => DeleteIten({id})} name="trash-outline"></ion-icon>
                            </div>
                </ProdutoInfo>
            </>
        )
    }

    function DeleteIten({id}){
        const newBag = infoBag.filter(item => item._id !== id);
        setInfoBag(newBag)
    }

    return (
        <>  
            <ContainerBag disabled={showBag}>
                <BagHeader>
                    <h1>Minha sacola</h1>
                    <div><ion-icon name="close-outline" onClick={()=>setShowBag(false)}></ion-icon></div>
                </BagHeader>
                <Produto>
                    {infoBag.map(product => <Product url={product.url} name={product.name} details={product.details} price={product.price} id={product._id}></Product>)}
                </Produto>
                <BagFooter>
                    <Purchase>
                        <p>TOTAL</p>
                        <p>{OverBalance()}</p>
                    </Purchase>
                    <div>
                        <ContinuarParaPagamento onClick={SubmitOrder} disabled={disableButton}>{disableButton ? <ThreeDots color="white"/> : "Continuar para pagamento"}</ContinuarParaPagamento>
                    </div>
                </BagFooter>
            </ContainerBag>
        </>
    )
}
const ContainerBag = styled.div`
    display:flex;
    flex-direction:column;
    background-color: #fff5e0;
    width: 29%;
    height:100vh;
    position:fixed;
    right:0;
`

const BagHeader = styled.div`
    width:29%;
    height:5%;
    position: fixed;
    top: 0;
    margin-top: 15px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-left:10px;
    padding-right:20px;

    h1{
        text-align:center;
        font-family: 'Shippori Antique';
        font-style: normal;
        font-weight: 700;
        font-size: 35px;
        line-height: 31px;

        color: #3B9BAA;
    }
    ion-icon{
            color: #000000;
            font-size: 32px;
            &:hover{
            cursor:pointer;
            }
    }
`
const Produto = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:20px;
    margin-top:20%;
    padding-left:15px;
    padding-right:10px;
    height:61%;
    overflow: hidden;
    overflow-y: scroll;

`
const ProdutoInfo = styled.div`
    display:flex;
    margin-top:8px;
    padding-top:8px;
    border-top: 1px solid #D3D3D3;

    div:nth-child(2){
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        width:85%;
        margin-right:8px;
        padding-left:8px;

        p{
            font-family: 'Shippori Antique';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 26px;
            color: #000000;
        }

    }
    div:nth-child(3){
        margin-right:8px;
        width:30%;

        p{
            font-family: 'Shippori Antique';
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 26px;
            color: #000000;
        }

    }

    div:nth-child(4){
        ion-icon{
            color: #3B9BAA;
            font-size: 24px;
            &:hover{
            cursor:pointer;
            }
        }
    }
`
const ProdutoImg = styled.div`
    img{
        width: 80px;
        height: 80px;
        object-fit:cover;
    }
`
const BagFooter = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:375px;
    position:fixed;
    bottom: 0;
    margin-bottom:25px;
    
`
const ContinuarParaPagamento = styled.button`
    width: 303px;
    height: 45px;
    background: rgba(59, 155, 170);
    border: none;
    border-radius: 4.63636px;
    text-decoration: none; 
    display:flex;
    align-items:center;
    justify-content:center;

    font-family: 'Shippori Antique';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    margin-top:20px;

    color: #FFFFFF;
    opacity: ${props => props.disabled ? 0.4 : 1 };
    &:hover{
        cursor:pointer;
    }
    
`
const Purchase = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    width:100%;
    border-top: 1px solid #D3D3D3;
    border-bottom: 1px solid #D3D3D3;
    padding-top:20px;
    padding-bottom:20px;
    padding-left:15px;
    padding-right:10px;
    
`