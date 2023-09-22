import {defineComponent, PropType} from 'vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {h} from 'vue';

export const VpCardImgLeft = defineComponent({
    name: 'VpCardImgLeft',
    props: {
        imgSrc: {
            type: String as PropType<string>,
            required: true
        },
        imgDesc: {
            type: String as PropType<string>,
            required: true
        },
        title: {
            type: String as PropType<string>,
            required: true
        },
        githubUrl: {
            type: String as PropType<string>,
            default: null
        },
    },
    setup(props, {slots}) {
        return () => (
            <div
                class="bg-white border rounded-xl shadow-sm sm:flex dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div
                    class="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-l-xl sm:max-w-[15rem] md:rounded-tr-none md:max-w-xs">
                    <img class="w-full h-full absolute top-0 left-0 object-cover p-5" src={props.imgSrc}
                         alt={props.imgDesc}/>
                </div>
                <div class="flex flex-wrap">
                    <div class="p-4 flex flex-col h-full sm:p-7">
                        <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                            {props.title}
                        </h3>
                        <p class="mt-1 text-gray-800 dark:text-gray-400">
                            {slots.default?.()}
                        </p>
                        <div class="mt-5 sm:mt-auto">
                            <p class="text-xs text-gray-500 dark:text-gray-500">
                                {props.githubUrl && (
                                    <a v-if={props.githubUrl} href={props.githubUrl} target="_blank">
                                        <font-awesome-icon icon={['fab', 'github']}/>
                                        View on Github</a>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
