// App.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {I18nextProvider, useTranslation} from 'react-i18next';
import i18nConfig from './i18n';

const App = () => {
  const {t, i18n} = useTranslation('home');

  const switchLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('pt');
    } else {
      i18n.changeLanguage('en');
    }
  };

  return (
    <I18nextProvider i18n={i18nConfig}>
      <View style={styles.container}>
        <TouchableOpacity onPress={switchLanguage}>
          <Text>{t('changeLanguage')}</Text>
        </TouchableOpacity>
      </View>
    </I18nextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});

export default App;
