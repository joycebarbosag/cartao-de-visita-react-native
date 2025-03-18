import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AppScreen() {
  return (
    <View style={styles.view}>
      <View style={styles.intro}>
        <Image source={require('@/assets/images/eu.png')} style={styles.img} />
        <Text style={styles.text}>Joyce E. Barbosa Gomes</Text>
      </View>

      <View style={styles.leftAlignedContainer}>
        <View style={styles.textContainer}>
          <Icon name="graduation-cap" size={20} color="black" style={styles.icon} />
          <Text style={styles.containerTitle}>Formação:</Text>
        </View>
        <Text>Licenciatura em Letras Português (UFPE/2023)</Text>
        <Text>Tecnólogo em Sistemas para Internet (UNICAP/2025)</Text>

        <View style={styles.textContainer}>
          <Icon name="whatsapp" size={20} color="black" style={styles.icon} />
          <Text style={styles.containerTitle}>WhatsApp:</Text>
        </View>
        <Text>(081) 9 9767-9003</Text>

        <View style={styles.textContainer}>
          <Icon name="envelope" size={20} color="black" style={styles.icon} />
          <Text style={styles.containerTitle}>E-mail:</Text>
        </View>
        <Text>joycebarbosa@contato.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    marginTop: 10,
  },
  intro: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  containerTitle: {
    fontSize: 18,
  },

  leftAlignedContainer: {
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 20,
  },
});