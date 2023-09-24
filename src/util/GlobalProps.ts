import {PropType, Prop} from "vue/dist/vue";
import {PropsFactory} from "./PropsFactory";

export const GlobalProps = PropsFactory({
    // paddings
    p: {
        type: Number,
        default: undefined
    } as Prop<number>,
    px: {
        type: Number as PropType<number>,
        default: undefined
    },
    py: {
        type: Number as PropType<number>,
        default: undefined
    },
    pt: {
        type: Number as PropType<number>,
        default: undefined
    },
    pb: {
        type: Number as PropType<number>,
        default: undefined
    },
    pr: {
        type: Number as PropType<number>,
        default: undefined
    },
    pl: {
        type: Number as PropType<number>,
        default: undefined
    },

    // margins
    m: {
        type: Number as PropType<number>,
        default: undefined
    },
    mx: {
        type: Number as PropType<number>,
        default: undefined
    },
    my: {
        type: Number as PropType<number>,
        default: undefined
    },
    mt: {
        type: Number as PropType<number>,
        default: undefined
    },
    mb: {
        type: Number as PropType<number>,
        default: undefined
    },
    mr: {
        type: Number as PropType<number>,
        default: undefined
    },
    ml: {
        type: Number as PropType<number>,
        default: undefined
    },
}, "GlobalProps");

export function BuildGlobalPropsList(props: typeof GlobalProps) {
    const classList: string[] = [];

    for (const key in props) {
        if (!(key in GlobalProps) || undefined === props[key]) {
            continue;
        }

        classList.push(`${key}-${props[key]}`);
    }

    return classList;
}
