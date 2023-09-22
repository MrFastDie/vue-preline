import * as components from './components';

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        VPCardImgTop: typeof components.VpCardImgTop;
        VPCardImgLeft: typeof components.VpCardImgLeft;
        VPCardImgRight: typeof components.VpCardImgRight;
    }
}
