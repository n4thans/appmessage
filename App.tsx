import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Pressable, Text, TextInput, View } from 'react-native';
import { ScreenStack } from 'react-native-screens';


export default function Button(props) {
  const { onPress, title = 'CONNEXION' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const Separator = () => (
  <View style={styles.separator} />
);

export default function App() {
  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
          <Text style={{fontSize: 40, textAlign: 'center', marginTop: 25, marginVertical: 40,}}>
            Messagerie
          </Text>
          <TextInput placeholder={'Adresse mail'} placeholderTextColor="rgba(0, 0, 0, 0.6)"style={{fontFamily: 'Avenir', fontStyle: 'normal', fontSize: 11, lineHeight: 15, color: 'rgba(0, 0, 0, 0.6);', marginLeft: 50, marginTop: 179,}}>

          </TextInput>
          <Separator />

          <TextInput placeholder={'Mot de passe'} placeholderTextColor="rgba(0, 0, 0, 0.6)" secureTextEntry={true} style={{fontFamily: 'Avenir', fontStyle: 'normal', fontSize: 11, lineHeight: 15, color: 'rgba(0, 0, 0, 0.6);', marginLeft: 50, marginTop: 49,}}>

          </TextInput>
          <Separator />


          <Button>
          </Button>



      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 6,
    backgroundColor: '#FCFCFF',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 6,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginEnd: 40,
    marginLeft: 40,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 2,
    borderRadius: 2,
    elevation: 3,
    backgroundColor: '#33A4FF',
    marginEnd: 40,
    marginLeft: 40,
    marginVertical: 50,
  },
  text: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: 'white',
  },
});
