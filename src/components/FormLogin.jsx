import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Input, Image } from '@rneui/base';

export default function FormLogin() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/200/300' }}
        style={{width: 100, height: 100, marginBottom: 16}}
      />
      <Input
        placeholder='Usuario'
        label='Usuario'
        labelStyle={{marginBottom: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    color: '#f3f3f3',
  },
});
