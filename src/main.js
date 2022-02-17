import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VeeValidate from 'vee-validate';
 import { library } from '@fortawesome/fontawesome-svg-core';

createApp(App).use(store).use(router).use(VeeValidate).mount('#app')
