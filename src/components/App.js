
import  {  BrowserRouter ,  Routes ,  Route  }  from  'react-router-dom' ;
import  {  useState  }  from  'react' ;
import SignUp from './SignUp.js'
import SignIn from "./SignIn.js";
import Context from "../contexts/Context.js";
import Init from "./Init.js";
import Menu from './Menu.js'
import Bag from './Bag.js'

export default function App(){
    
    const [infoLogin, setInfoLogin] = useState();
    const [infoBag, setInfoBag] = useState();
    
    return(
        <Context.Provider value = {{infoLogin , setInfoLogin, infoBag, setInfoBag}}>
            <BrowserRouter>
                   
                            <Routes>
                                <Route path="/" element= {<Init />}/>
                                <Route path="/sign-in" element={<SignIn />}/>
                                <Route path="/sign-up" element={<SignUp />}/>
                                <Route path="/menu" element={<Menu />}/>
                                <Route path="/bag" element={<Bag />}/>
                            </Routes>
                        
                    
            </BrowserRouter>
        </Context.Provider>
    )
}






