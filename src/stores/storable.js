import { writable } from "svelte/store";
import { browser } from "$app/environment";

const usuario = writable(null);

if (browser) {
    console.log(
        "| (login) App ejecutandose en el navegador -> localStorage disponible."
    );
    const storedData = localStorage.datos_usuario;

    if (storedData) {
        usuario.set(JSON.parse(storedData));
    }
}

export const Usuario = {
    subscribe: usuario.subscribe,
    value: () => {
        if (browser) {
            const storedData = localStorage.datos_usuario;
            return storedData;
        }
        return null;
    },
    set: (n) => {
        if (browser) {
            if (n === null) {
                localStorage.removeItem("datos_usuario");
            } else {
                localStorage.datos_usuario = JSON.stringify(n);
            }
        }
        usuario.set(n);
    },
};

export function storable(data) {
    const store = writable(data);

    if (browser) {
        console.log(
            "| App ejecutandose en el navegador -> localstore disponible."
        );
        const storedData = localStorage.storable;
        if (storedData) {
            store.set(JSON.parse(storedData));
        }
    }

    return {
        subscribe: store.subscribe,
        set: (n) => {
            if (browser) {
                localStorage.storable = JSON.stringify(n);
            }
            store.set(n);
        },
        update: (cb) => {
            const updatedStore = cb(get(store));
            if (browser) {
                localStorage.storable = JSON.stringify(updatedStore);
            }
            store.set(updatedStore);
        },
    };
}
