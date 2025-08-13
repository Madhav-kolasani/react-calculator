import Display from "./components/Display";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
    let [calVal, setCalVal] = useState("");
    const onButtonClick = (buttonText)=>{
        if (buttonText === 'C'){
            setCalVal("")
        }else if (buttonText === '='){
            const result = eval(calVal);
            setCalVal(result);
        }else{
            const newDisplayValue = calVal +buttonText;
            setCalVal(newDisplayValue);
        }
    }
    
    return (
        <div className="mad-container">
            <div className={styles.calculator}>
                <Display displayVal={calVal}></Display>
                <ButtonsContainer onButtonClick = { onButtonClick} ></ButtonsContainer>
            </div>
        </div>
    );
}

export default App;
