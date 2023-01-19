import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import ResultIMC from "../ResultIMC";
import styles from "./style";


export default function Form (){
    const [H,setHeight] = useState(null)
    const [W,setWeight] = useState(null)
    const [IMC,setIMC] = useState()
    const [messageIMC,setMessageIMC] = useState('Preencha peso e altura')
    const [txtButtom,setTxtButton] = useState('Calcular')

    const imcCalculator = ()=>{
        setIMC((W/(H*H)).toFixed(2))
    }

    const vatidaton = ()=>{
        if(W != null && H != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setTxtButton('Calcular novamente')
            setMessageIMC(`O resultado do seu IMC é:`)
        }
        else{
            setTxtButton('calcular')
            setIMC(null)
            setMessageIMC('Faltando informação, favor preencher altura e peso')
        }
    }



    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput 
                style={styles.input}
                onChangeText={setWeight}
                value={W}
                placeholder="Ex.: 53.23"
                keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Altura</Text>
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
        </View>
    )
}