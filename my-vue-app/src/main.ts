import { createApp } from 'vue';
import App from './App.vue';
import './global.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/300.css';
import {i18n} from './plugins/i18n'


const app = createApp(App);

app.use(i18n);
app.mount('#app');
