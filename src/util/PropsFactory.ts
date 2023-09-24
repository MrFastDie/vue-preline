import {ComponentObjectPropsOptions} from "@vue/runtime-dom";

export function PropsFactory<
    PropsOptions extends ComponentObjectPropsOptions
>(props: PropsOptions, source: string) {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Object.keys(props).reduce<any>((obj, prop) => {
        const isObjectDefinition = typeof props[prop] === 'object' && props[prop] != null && !Array.isArray(props[prop]);

        obj[prop] = isObjectDefinition ? props[prop] : {type: props[prop]};

        if (source && !obj[prop].source) {
            obj[prop].source = source;
        }

        return obj;
    }, {});
}
