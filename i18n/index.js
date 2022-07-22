import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import * as resources from './locales';

i18n.use(initReactI18next).init({
  resources, // the translation files we've just created
  fallbackLng: 'en', // if the user tries to access some language that is not available in our app, let's use English as default
  compatibilityJSON: 'v3',
});

export default i18n;
