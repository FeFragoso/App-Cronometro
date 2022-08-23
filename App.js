import { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import s from './Estilo'

EStyleSheet.build({})

let contador = null
let ss = 0
let mm = 0
let hh = 0

export default function App() {

  const [x, setX] = useState('00:00:00')
  const [btnVai, setBtnVai] = useState('Vai!')
  const [valorUltimo, setValorUltimo] = useState(null)

  function vai() {
    if (contador !== null) {
      clearInterval(contador)
      contador = null

      setBtnVai('Vai!')
    }
    else {
      contador = setInterval(()=> {

        ss++

        if (ss == 60) {
          ss = 0
          mm++
        }

        if (mm == 60) {
          mm = 0
          hh++
        }

        let format = (hh<10 ? '0'+hh : hh)+':'+(mm<10 ? '0'+mm : mm)+':'+(ss<10 ? '0'+ss : ss)

        setX(format)

      }, 1000)

      setBtnVai('Parar!')
    }
  }

  function zerar() {

    if (contador !== null) {
      clearInterval(contador)
      contador = null
    }

    ss = 0
    mm = 0
    hh = 0

    setValorUltimo('Último tempo: '+x)
    setX('00:00:00')
    setBtnVai('Vai!')

  }

  return (
    <View style={s.container}>
      
      <View style={s.timerArea}>

        <Image
          style={s.img}
          source={require('./assets/crono.png')}
        />

        <Text style={s.timer}>{x}</Text>

      </View>

      <Text style={s.ultimoTimer}>{valorUltimo}</Text>

      <View style={s.btnArea}>

        <TouchableOpacity style={s.btn} onPress={vai} activeOpacity={0.9}>
          <Text style={s.btnTexto}>{btnVai}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.btn} onPress={zerar}>
          <Text style={s.btnTexto}>Zerar</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}