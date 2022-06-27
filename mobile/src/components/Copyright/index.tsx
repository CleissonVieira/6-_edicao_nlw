import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export function Copyright() {
  return (
    <View>
      <Text style={styles.text}>
        Feito com s2 pela <a className='underline underline-offset-2' href='https://rocketseat.com.br'>Rocketseat</a>
      </Text>
    </View>
  );
}