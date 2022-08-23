import { View, Text, Image, TouchableOpacity } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

EStyleSheet.build({})

export default function App() {
  return (
    <View style={s.container}>
      
      <View style={s.timerArea}>

        <Image
          style={s.img}
          source={require('./assets/crono.png')}
        />

        <Text style={s.timer}>00:00:00</Text>

      </View>

      <Text style={s.ultimoTimer}>Último tempo: 00:03:47</Text>

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
  timerArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    resizeMode: 'contain',

    width: '22rem',
    height: '22rem'
  },
  timer: {
    position: 'absolute',

    top: '47.5%',

    fontSize: '2.75rem',
    fontWeight: 'bold',

    color: '#E67700'
  },
  ultimoTimer: {
    marginTop: '2rem',

    fontSize: '1.25rem',
    fontWeight: 'bold',

    color: '#fff'
  },
  btnArea: {
    marginTop: '5rem',

    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  btn: {
    width: '25%',
    height: '4rem',

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#E67700',

    borderRadius: 20
  },
  btnTexto: {
    fontSize: '1.5rem',
    fontWeight: 'bold',

    color: '#fff'
  }
})