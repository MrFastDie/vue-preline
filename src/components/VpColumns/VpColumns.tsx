import {defineComponent, Prop} from 'vue';
import {GlobalProps} from '../../util/GlobalProps';
import {PropsFactory} from "../../util/PropsFactory";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {h} from 'vue';

const props = PropsFactory({
    columns: {
        type: String,
        required: true
    } as Prop<string>,
}, "VpColumns");

export const VpColumns = defineComponent({
    name: 'VpColumns',
    props: {
        ...GlobalProps,
        ...props,
    },
    setup(props, {slots}) {
        const classList = [
            "columns-" + props.columns
        ];
        classList.push(...GlobalProps(props));

        return () => (
            <div class={classList}>
                {slots.default?.()}
            </div>
        );
    }
});
