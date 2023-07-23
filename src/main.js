import Vue from 'vue';
import { Input, Button } from 'element-ui';
import App from './App.vue';
import './style.css';
// import 'element-ui/lib/theme-chalk/index.css';
import './styles/element-variables.scss';
Vue.use(Input);
Vue.use(Button);

new Vue({
    el: '#app',
    render: (h) => h(App),
});
