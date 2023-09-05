import React, {useState} from "react"
import {View, TextInput, Text, Button} from "react-native"
import ResultIMC from "./ResultIMC";

export default function Form(){

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageIMC, setMessageIMC] = useState("preencha o peso e altura");
const [imc, setIMC] = useState(null)
const [textButton, setTextButton] = useState("Calcular")

function imcCalculator(){
    return setIMC((weight/(height*height)).toFixed(2))
}

//Essa função aqui verifica se os valores usados para calculcar o IMC não está vazio, ou seja, só irá calculcar se estiverem preenchidos.

function validationIMC(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageIMC("Seu IMC é igual:")
        setTextButton("Calcular novamente:")
        return
    }
    setIMC(null)
    setTextButton("Calcular")
    setMessageIMC("preencha o peso e altura")
}

    return(
        <View>

            <View>

                <Text>Altura</Text>
                <TextInput
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 61.9"
                keyboardType="numeric"
                />

                <Button
                onPress={() => validationIMC()}
                title={textButton}
                />

            </View>

            <ResultIMC messageResultIMC={messageIMC} ResultIMC={imc}/>

        </View>//View Geral
    );//Return
}