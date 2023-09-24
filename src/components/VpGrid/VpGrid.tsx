import {defineComponent, Prop} from 'vue';
import {GlobalProps, BuildGlobalPropsList} from '../../util/GlobalProps';
import {PropsFactory} from "../../util/PropsFactory";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {h} from 'vue';

const props = PropsFactory({
    cols: {
        type: Number,
        default: 3
    } as Prop<number>,
    gap: {
        type: Number,
        default: 4
    } as Prop<number>,
}, "VpGrid")

export const VpGrid = defineComponent({
    name: 'VpGrid',
    props: {
        ...GlobalProps,
        ...props,
    },
    setup(props, {slots}) {
        const classList = [
            "grid-cols-" + props.cols,
            "gap-" + props.cols,
            "grid",
            "shadow-sm",
            "overflow-hidden",
        ];
        classList.push(...BuildGlobalPropsList(props));

        return () => (
            <div class={classList}>
                {slots.default?.()}
            </div>
        );
    }
});
