import React from "react"
import {View, TextInput, Text, Button} from "react-native"

export default function Form(){
    return(
        <View>

            <View>

                <Text>Altura</Text>
                <TextInput placeholder="Ex. 1.75"
                keyboardType="numeric"/>

                <Text>Peso</Text>
                <TextInput placeholder="Ex. 61.9"
                keyboardType="numeric"/>

                <Button title="Calcular IMC"/>

            </View>
            <ResultIMC messageResultIMC={messageIMC} ResultIMC={imc}/>
        </View>//View Geral
    );//Return
}