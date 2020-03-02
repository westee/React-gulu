interface extraClass {
    extra: string | undefined
}

export default function scopedClassName(preName: string) {
    return function f1(name?: string,  option?: extraClass) {
        const result = [preName, name].filter(Boolean).join('-');

        if(option && option.extra){
            return [result, option && option.extra].filter(Boolean).join(' ');
        } else {
            return result;
        }
    }
}