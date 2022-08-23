import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
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
      fontStyle: 'italic',
  
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