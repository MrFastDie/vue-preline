import {defineComponent} from 'vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {h} from 'vue';
import {GlobalProps, BuildGlobalPropsList} from "../../util/GlobalProps";

export const VpTimelineWrapper = defineComponent({
    name: 'VpTimelineWrapper',
    props: {
        ...GlobalProps
    },
    setup(props, {slots}) {
        const classList = [
            "space-y-8",
            "relative before:absolute",
            "before:inset-0",
            "before:ml-5",
            "before:-translate-x-px",
            "md:before:mx-auto",
            "md:before:translate-x-0",
            "before:h-full",
            "before:w-0.5",
            "before:bg-gradient-to-b",
            "before:from-transparent",
            "before:via-slate-300",
            "before:to-transparent",
        ].push(...BuildGlobalPropsList(props));
        return () => (
            <div class={classList}>
                {slots.default?.()}
            </div>
        );
    }
});
