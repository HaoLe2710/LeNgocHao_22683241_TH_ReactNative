import { LinearGradient } from 'expo-linear-gradient';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// You can import supported modules from npm

export default function App() {
  return (
    <LinearGradient
        // Background Linear Gradient
        colors={['#04A6CF', '#ffffff']}
        style={{flex: 1}}
      >
    <SafeAreaProvider style={styles.container}>
     
      <SafeAreaView style={{flex: 3, alignItems:'center'}}>
        <Image source={require('@/assets/images/lock.png')} style={{width: 200, height: 200, alignSelf: 'center'}} />
      </SafeAreaView>
      <SafeAreaView style={{flex: 1}}>
        <Text style={styles.title}>
          FORGET PASSWORD
        </Text>
      </SafeAreaView>
      <SafeAreaView style={{flex: 1}}>
        <Text style={styles.paragraph}>
          Product your account's email for which you want to reset your password
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.input_container}>
        <Image source={require('@/assets/images/email.png')} style={styles.icon} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#555"
            style={styles.input}
            keyboardType="email-address"
          />
      </SafeAreaView>
      <SafeAreaView style={{flex: 1, flexDirection: 'row', gap: 100, alignItems: 'center'}}>
       <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>NEXT</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    margin: 24,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title:{
    margin: 24,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button:{
    padding: 10,
    flex: 3,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#edff49ff",
    height: 50,
  },
  text:{
    fontWeight:'bold'
  },
  background:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    flex: 0
  },
  text_input:{
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5
  },
  input_container:{
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#888',
    borderRadius: 5,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginBottom: 30,
    backgroundColor: '#fff',
  },
  icon:{
    width: 24,
    height: 24,
    marginRight: 10,
    marginLeft: 10,
    tintColor: '#444',
  },  
  input:{
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#000',
  },
});
