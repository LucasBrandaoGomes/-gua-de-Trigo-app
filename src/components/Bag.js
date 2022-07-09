import styled from "styled-components"
import {useState} from "react"
import { ThreeDots } from "react-loader-spinner";

export default function Bag(){

    const [disableButton,setDisableButton] = useState(false)

    function SubmitOrder(event){
        
        event.preventDefault();
        setDisableButton(true);
    
    }

    function Add(){

    }

    function Deduct(){
        
    }

    return (
        <>  
            <ContainerBag>
                <Produto>
                    <h1>Minha sacola</h1>
                    <ProdutoInfo>
                        <ProdutoImg></ProdutoImg>
                        <div>
                            <p>Focaccia de Alecrim</p>
                            <p>informações</p>
                        </div>
                        <div>
                            <p>1x</p>
                            <p>R$ Preço</p>
                        </div>
                        <div>
                            <ion-icon onClick={Add} name="add-outline"></ion-icon>
                            <ion-icon onClick={Deduct} name="remove-circle-outline"></ion-icon>
                        </div>
                    </ProdutoInfo>
                </Produto>
                <Purchase>
                    <p>TOTAL</p>
                    <p>VALOR</p>
                </Purchase>
                <div>
                    <ContinuarParaPagamento onClick={SubmitOrder} disabled={disableButton}>{disableButton ? <ThreeDots color="white"/> : "Continuar para pagamento"}</ContinuarParaPagamento>
                </div>
            </ContainerBag>
        </>
    )
}

const ContainerBag = styled.div`
    display:flex;
    flex-direction:column;
    padding-left:15px;
    padding-right:15px;

    h1{
        text-align:center;
    }
    div:nth-child(3){
        display:flex;
        justify-content:center;
    }
`
const Produto = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:20px;

`
const ProdutoInfo = styled.div`
    display:flex;

    div:nth-child(2){
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        margin-right:8px;

    }
    div:nth-child(3){
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        margin-right:8px;

    }

    div:nth-child(4){
        display:flex;
        flex-direction:column;
        justify-content: space-around;
        
        ion-icon{
            color: white;
            font-size: 24px;
            &:hover{
            cursor:pointer;
            }
        }
    }


`
const ProdutoImg = styled.div`
    width:80px;
    height: 80px;
    background-color: white;
    margin-right:8px;
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
    border-top:1px solid black;
    border-bottom: 1px solid black;
    padding-top:20px;
    padding-bottom:20px;
    
`