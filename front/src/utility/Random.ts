
const r = [
    // 0~9
    ...Array.from({length: 10}, (_,i) => i),
    // 대문자
    ...Array.from({length: 26}, (_,i) => String.fromCharCode(i+65)),
    // 소문자
    ...Array.from({length: 26}, (_,i) => String.fromCharCode(i+97)),
];

function getRandomKey(keyMaxLength: number): string {
    let key: string = '';

    for (let i=0; i<keyMaxLength; i++) {
        const k = Math.floor(Math.random()*61);
        key += r[k];
    }
    return key;
}
export default getRandomKey;