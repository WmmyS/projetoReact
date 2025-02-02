import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Vibration } from 'react-native'
import ResultImc from './ResultImc'
import styles from './style'

export default function Form() {
const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("preencha o peso e altura")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")
const [messageImcDetail, setMessageImcDetail] = useState(null)
const [errorMessage, setErrorMessage] = useState(null)

function verificationImc() {
  if (imc == null){
    setErrorMessage("campo obrigatório*")
    Vibration.vibrate()
  }
}

function imcCalculator() {
  return setImc((weight/(height*height)).toFixed(2))
}

function createImcMessage() {
  number = weight/(height*height)
  let message = ""
  console.log(number)
    if (number < 18.5){
      message = 'Abaixo do peso'
     } else if (number > 18.5 && number < 24.9) {
      message = 'Peso normal'
     } else if (number > 25 && number < 29.9) {
      message = 'Sobrepeso'
     } else if (number > 30 && number < 39.9) {
      message = 'Obesidade'
     } else if (number > 40) {
        message = 'Obesidade grave'
     }
    setMessageImcDetail(message)
}

function validationImc() {
  if(weight !== null && height !== null) {
    imcCalculator()
    setHeight(null)
    setWeight(null)
    setMessageImc("Seu imc é igual:")
    setTextButton("Calcular Novamente")
    createImcMessage(weight/(height*height))
    setErrorMessage(null)
    return
  }
  
  setImc(null)
  setTextButton("Calcular")
  setMessageImc("preencha o peso e altura")
  setMessageImcDetail("")
  verificationImc()
}

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
      <Text style={styles.formLabel}>Altura</Text>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setHeight}
        value={height}
        placeholder="Ex. 1.75"
        keyboardType='numeric'
      />
      <Text style={styles.formLabel}>Peso</Text>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setWeight}
        value={weight}
        placeholder="Ex. 75.350"
        keyboardType='numeric'
      />

      <TouchableOpacity
      style={styles.buttonCalculator}
        onPress={() => {
          validationImc()
        }}
      >
        <Text style={styles.textButtonCalculator}>{textButton}</Text>
      </TouchableOpacity>
      <ResultImc messageResultImc={messageImc} resultImc={imc} messageImcDetail={messageImcDetail} />
      </View>
    </View>
  )
}