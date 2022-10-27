import { use } from 'react';

function wait<T>(ms: number, result: T) {
    return new Promise<T>((res) => { setTimeout(() => res(result), ms) })
};
async function getData() {
    const res = await wait(1000, {hello:"world"});
    return res.hello;
}

export default function Page() {
    // This value is fully typed
    // The return value is *not* serialized
    // so you can return Date, Map, Set, etc.
    const name = use(getData());

    return <div>{name}</div>;
}