import {defineComponent, PropType} from 'vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {h} from 'vue';

export const VpGrid = defineComponent({
    name: 'VpGrid',
    props: {
        cols: {
            type: Number as PropType<number>,
            default: 3
        },
        gap: {
            type: Number as PropType<number>,
            default: 4
        },
    },
    setup(props, {slots}) {
        return () => (
            <div class={["grid-cols-" + props.cols, "gap-" + props.cols, "grid", "shadow-sm", "overflow-hidden"]}>
                {slots.default?.()}
            </div>
        );
    }
});
