import React from 'react'
import { View, Text, TouchableOpacity, Share } from 'react-native'
import styles from './style'

export default function ResultImc(props) {

  const onShare = async () => {
    const result = await Share.share({
      message: `Meu IMC hoje é: ${props.resultImc}, ${props.messageImcDetail}.`
    })
  }

  return (
    <View style={styles.resultImc}>
      <View style={styles.boxSharebutton}>
        { props.resultImc !== undefined || props.ResultImc !== null ?
          <TouchableOpacity
          onPress={onShare}
          style={styles.shared}
          >
          <Text style={styles.sharedText}>Compartilhar</Text>
          </TouchableOpacity>
        : <View></View>
        }
      </View>
     <Text style={styles.information} >{props.messageResultImc}</Text>
     <Text style={styles.numberImc} >{props.resultImc}</Text>
     <Text style={styles.information} >{props.messageImcDetail}</Text>
    </View>
  )
}