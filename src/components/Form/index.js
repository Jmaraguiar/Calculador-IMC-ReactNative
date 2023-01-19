import React, { useState } from "react";
import { Vibration,View, Text, TextInput, TouchableOpacity, Pressable, Keyboard } from "react-native";
import ResultIMC from "../ResultIMC";
import styles from "./style";


export default function Form (){
    const [H,setHeight] = useState(null)
    const [W,setWeight] = useState(null)
    const [IMC,setIMC] = useState()
    const [messageIMC,setMessageIMC] = useState('Preencha peso e altura')
    const [txtButtom,setTxtButton] = useState('Calcular')
    const [errorMessage,setErrorMessage] = useState(null)

    const imcCalculator = ()=>{
        let HFormat = H.replace(',','.')
        let WFormat = W.replace(',','.')
        setIMC((WFormat/(HFormat*HFormat)).toFixed(2))
    }

    const verificationIMC = ()=>{
        if(IMC === null){
            Vibration.vibrate();
            setErrorMessage('Campo obrigatório*');
        }
    }

    const vatidaton = ()=>{
        if(W != null && H != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setTxtButton('Calcular novamente')
            setMessageIMC(`O resultado do seu IMC é:`)
            setErrorMessage(null)
        }
        else{
            verificationIMC()
            setTxtButton('calcular')
            setIMC(null)
            setMessageIMC('Preencha peso e altura')
        }
        Keyboard.dismiss()
    }



    return(
        <Pressable
         style={styles.formContext}
         onPress={Keyboard.dismiss}
         >
            <View style={styles.form}>
                {errorMessage ? 
                <Text style={styles.errorMessage}>{`Peso - ${errorMessage}`}</Text> 
                :
                 <Text style={styles.formLabel}>Peso</Text>}

                <TextInput 
                style={styles.input}
                onChangeText={setWeight}
                value={W}
                placeholder="Ex.: 53.23"
                keyboardType="numeric"
                />
                {errorMessage ? 
                <Text style={styles.errorMessage}>{`Altura - ${errorMessage}`}</Text> 
                :
                 <Text style={styles.formLabel}>Altura</Text>}
                <TextInput 
                style={styles.input}
                onChangeText={setHeight}
                value={H}
                placeholder="Ex.: 1.75"
                keyboardType="numeric"
                />
                <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={()=>vatidaton()}
                >
                    <Text style={styles.textButtonCalculator}>{txtButtom}</Text>
                </TouchableOpacity>
            </View>
            <ResultIMC message= {messageIMC} resultIMC = {IMC}/>
        </Pressable>
    )
}