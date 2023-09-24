import {defineComponent} from 'vue';
import {GlobalProps, BuildGlobalPropsList} from '../../util/GlobalProps';
import {VpTimelineEntryProps} from "./props";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {h} from 'vue';

export const VpTimelineEntryRight = defineComponent({
    name: 'VpTimelineEntryRight',
    props: {
        ...GlobalProps,
        ...VpTimelineEntryProps("VpTimelineEntryRight"),
    },
    setup(props, {slots}) {
        const classList = [
            "relative",
            "flex",
            "items-center",
            "justify-between",
            "md:justify-normal",
            "md:odd:flex-row-reverse",
            "group",
            "is-active",
        ];
        classList.push(...BuildGlobalPropsList(props));

        return () => (
            <div class={classList}>

                <div
                    style={["backgroundColor: " + (props.iconBackgroundColor ?? 'antiquewhite') + ";", "color: " + (props.iconTextColor ?? 'black') + ";"]}
                    class="icon flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <font-awesome-icon
                        icon={props.icon}/>
                </div>

                <div
                    class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                    <div class="flex items-center justify-between space-x-2 mb-1">
                        <div class="font-bold text-slate-900">{props.headline}</div>
                        <time class="font-caveat font-medium text-indigo-500">{props.date}</time>
                    </div>
                    <div class="text-slate-500">
                        {slots.default?.()}
                    </div>
                </div>
            </div>
        );
    }
});
