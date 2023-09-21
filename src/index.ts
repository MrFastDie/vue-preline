import type {App, DefineComponent} from 'vue';

import "./vue-preline.css"
import HelloWorld from "./components/HelloWorld.vue";
import VPInput from "./components/VPInput.vue";

export default {
    install: (app, options = {}) => {
        app.component('HelloWorld', HelloWorld);
        app.component('vp-input', VPInput);

        // append preline to dom
        if(!document.querySelector('#my-static-script')) {
            let script = document.createElement('script');
            script.id = 'appended-preline';
            script.src = './node_modules/preline/dist/preline.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }
}
