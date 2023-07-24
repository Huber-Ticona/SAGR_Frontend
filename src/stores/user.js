import { writable } from "svelte/store";
export const User = (function () {
    const { subscribe, set } = writable(null);
    return {
        subscribe,
        signout: () => {
            console.log("Removiendo session.");
            set(null);
        },
        signin: () => {
            console.log("Añadiendo session.");
            set("John");
        },
    };
})();
