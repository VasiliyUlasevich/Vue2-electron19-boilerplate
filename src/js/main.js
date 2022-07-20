import '../css/main.css';
import Vue from 'vue';
import app from './vue/app.vue';

const vm = new Vue({
    el: "#main",
    components: {
        app
    }
});