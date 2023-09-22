import * as components from "./components";
import {App} from "vue";

import "./vue-preline.css"

export { components };

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        VpCardImgTop: typeof components.VpCardImgTop;
        VpCardImgLeft: typeof components.VpCardImgLeft;
        VpCardImgRight: typeof components.VpCardImgRight;

        VpGrid: typeof components.VpGrid;
    }
}

export function createVuePreline() {
    return {
        install: (app: App) => {
            for (const key in components) {
                app.component(key, components[key]);
            }

            // append preline to dom
            if(!document.querySelector('#append-preline')) {
                const script = document.createElement('script');
                script.id = 'appended-preline';
                script.src = './node_modules/preline/dist/preline.js';
                script.async = true;
                document.body.appendChild(script);
            }
        }
    }
}
