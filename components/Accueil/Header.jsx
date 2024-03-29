import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Content', { nom: 'John Doe' }); 
  };

  return (
    <View style={styles.header}>
      <Image source={require('../../assets/share.png')} style={styles.logo} />
      <Text style={styles.titre}>Share</Text>
      <Text style={styles.soustitre}>Partagez vos fichiers et photos</Text>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Accéder sans se connecter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 140,
    paddingBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  titre: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  soustitre: {
    fontSize: 22,
    color: 'gray',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4B9DA5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Header;
