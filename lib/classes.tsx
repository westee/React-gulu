export default function scopedClassName(preName: string) {
    return function f1(name?: string) {
        return [preName, name].filter(Boolean).join('-');
    }
}