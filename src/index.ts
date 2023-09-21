import VPInput from "./components/VPInput.vue";
import VPGrid from "./components/VPGrid.vue";
import VPTimelineWrapper from "./components/VPTimelineWrapper.vue";
import VPTimelineEntryLeft from "./components/VPTimelineEntryLeft.vue";
import VPTimelineEntryRight from "./components/VPTimelineEntryRight.vue";
import VPCardImgTop from "./components/VPCardImgTop.vue";
import VPCardImgLeft from "./components/VPCardImgLeft.vue";
import VPCardImgRight from "./components/VPCardImgRight.vue";

import "./vue-preline.css"

export default function createVuePlugin() {
    return {
        install: (app, options = {}) => {
            app.component('vp-input', VPInput);
            app.component('vp-grid', VPGrid);

            app.component('vp-timeline-wrapper', VPTimelineWrapper);
            app.component('vp-timeline-entry-left', VPTimelineEntryLeft);
            app.component('vp-timeline-entry-right', VPTimelineEntryRight);

            app.component('vp-card-img-top', VPCardImgTop);
            app.component('vp-card-img-left', VPCardImgLeft);
            app.component('vp-card-img-right', VPCardImgRight);

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
