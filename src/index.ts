import VPInput from "./components/VPInput.vue";
import VPGrid from "./components/VPGrid.vue";

import "./vue-preline.css"

export default function createVuePlugin() {
    return {
        install: (app, options = {}) => {
            app.component('vp-input', VPInput);
            app.component('vp-grid', VPGrid);

            // append preline to dom
            if(!document.querySelector('#append-preline')) {
                let script = document.createElement('script');
                script.id = 'appended-preline';
                script.src = './node_modules/preline/dist/preline.js';
                script.async = true;
                document.body.appendChild(script);
            }
        }
    }
}
