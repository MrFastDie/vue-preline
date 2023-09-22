import {defineComponent, PropType} from 'vue';

export const VpCardImgTop = defineComponent({
    name: 'VpCardImgTop',
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
            <div class="flex flex-col flex-[1_0_0%] bg-white dark:bg-gray-800">
                <img class="w-full h-auto rounded-t-xl sm:rounded-tr-none p-5" src={props.imgSrc} alt={props.imgDesc}/>
                <div class="p-4 flex-1 md:p-5">
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
        );
    }
});