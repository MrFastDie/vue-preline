import * as components from './components';

export {
    components
}

export {createVuePreline} from './vue-preline';

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        VpCardImgTop: typeof components.VpCardImgTop;
        VpCardImgLeft: typeof components.VpCardImgLeft;
        VpCardImgRight: typeof components.VpCardImgRight;
    }
}