import React, { useState } from "react";
import Display from "../components/Display"
import Button from "../components/Button"
import Operators from "../components/Operators";
import "./Calculator.css"

export default ()=>{
   
    const [displayValue, setDisplayValue] = useState ('');
    const [n1, setN1] = useState (0);
    const [n2, setN2] = useState (0);
    const [operator, setOperator] = useState ('');

    function teste(e){
        console.log(displayValue.length)
        setDisplayValue(displayValue.concat(e.target.value));
        console.log(e.target.value);
    }

    function clear(){
        setDisplayValue('')
        setN1(0)
        setN2(0)
    }


    function operador(e){
         if(displayValue !== ''){
            setOperator(e.target.value)    
            setN1(displayValue)
            setDisplayValue('')
        }
    }

    function calcular (){

        if(n1 !== 0 && displayValue !== 0){
            console.log(operator)
            setN2(displayValue)
            switch(operator){
                case'÷': 
                    setDisplayValue(n1/displayValue);
                break;
                case'x': 
                    setDisplayValue(n1*displayValue);
                break;
                case'-': 
                    setDisplayValue(n1-displayValue);
                break;
                case'+': 
                    setDisplayValue(parseInt(n1)+parseInt(displayValue));
                break;
                default:
                    alert('Operador Invalido!')
            } 
            setN1(0);
            setN2(0);
        }
    }






    return(
        <>
            <h1 className="title">Calculator</h1>
            <div className="calculator">
                <Display displayValue={displayValue} displayValueLength={displayValue.length}></Display>
                <div className="buttons">
                    <Button valor={7} onClick={teste}></Button>
                    <Button valor={8} onClick={teste}></Button>
                    <Button valor={9} onClick={teste}></Button>
                    <Button valor={4} onClick={teste}></Button>
                    <Button valor={5} onClick={teste}></Button>
                    <Button valor={6} onClick={teste}></Button>
                    <Button valor={1} onClick={teste}></Button>
                    <Button valor={2} onClick={teste}></Button>
                    <Button valor={3} onClick={teste}></Button>
                    <Button valor={0} onClick={teste}></Button>
                    <Button valor='C' onClick={clear}></Button>
                    <Button valor='=' onClick={calcular}></Button>
                </div>
                <div className="operators">
                    <Operators operation='÷' click={operador}></Operators>
                    <Operators operation='x' click={operador}></Operators>
                    <Operators operation='-' click={operador}></Operators>
                    <Operators operation='+' click={operador}></Operators>
                </div>
            </div>
        </>
    )
}