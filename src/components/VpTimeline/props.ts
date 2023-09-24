import {Prop} from 'vue';
import {PropsFactory} from "../../util/PropsFactory";

export function VpTimelineEntryProps(vpCardName: string) {
    return PropsFactory({
        headline: {
            type: String,
            required: true
        } as Prop<string>,
        date: {
            type: String,
            required: true
        } as Prop<string>,
        icon: {
            type: Array,
            default: () => []
        } as Prop<string[]>,
        iconBackgroundColor: {
            type: String,
            default: null
        } as Prop<string>,
        iconTextColor: {
            type: String,
            default: null
        } as Prop<string>,
    }, vpCardName);
}