import {Prop} from 'vue';
import {PropsFactory} from "../../util/PropsFactory";

export function VpCardProps(vpCardName: string) {
    return PropsFactory({
        imgSrc: {
            type: String,
            required: true
        } as Prop<string>,
        imgDesc: {
            type: String,
            required: true
        } as Prop<string>,
        title: {
            type: String,
            required: true
        } as Prop<string>,
        githubUrl: {
            type: String,
            default: null
        } as Prop<string>,
    }, vpCardName);
}