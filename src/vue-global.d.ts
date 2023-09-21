import {VPTest} from "@/index";

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        VPTest: typeof VPTest;
    }
}
