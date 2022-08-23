import { View, Text, Image, TouchableOpacity } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

EStyleSheet.build({})

export default function App() {
  return (
    <View style={s.container}>
      
      <Image
        style={s.img}
        source={require('./assets/crono.png')}
      />

      <Text style={s.timer}>00:00:00</Text>

      <View style={s.btnArea}>

        <TouchableOpacity style={s.btn}>
          <Text style={s.btnTexto}>Vai!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.btn}>
          <Text style={s.btnTexto}>Zerar</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

const s = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#00aeef'
  },
  img: {
    resizeMode: 'contain',

    width: '22rem',
    height: '22rem'
  },
  timer: {
    position: 'absolute',

    fontSize: '2.75rem',
    fontWeight: 'bold',

    color: '#fff'
  }
})