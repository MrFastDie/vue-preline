import { defineComponent, h, PropType } from 'vue';

export default defineComponent({
    name: 'vp-test',
    props: {
        title: {
            type: String as PropType<string>,
            required: true,
        },
    },
    setup(props) {
        return () => h('div', {}, props.title);
    },
});
