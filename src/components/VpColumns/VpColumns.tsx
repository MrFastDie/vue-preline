import {defineComponent, PropType} from 'vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {h} from 'vue';

export const VpColumns = defineComponent({
    name: 'VpColumns',
    props: {
        columns: {
            type: String as PropType<string>,
            required: true
        },
    },
    setup(props, {slots}) {
        return () => (
            <div class={"columns-" + props.columns}>
                {slots.default?.()}
            </div>
        );
    }
});
