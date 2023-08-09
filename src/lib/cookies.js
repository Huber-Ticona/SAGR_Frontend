export function setCookie(name, value, options) {
    options = options || {};

    let cookieString = name + "=" + encodeURIComponent(value);

    if (options.expires) {
        cookieString += "; expires=" + options.expires.toUTCString();
    }

    if (options.path) {
        cookieString += "; path=" + options.path;
    }

    if (options.domain) {
        cookieString += "; domain=" + options.domain;
    }

    if (options.secure) {
        cookieString += "; secure";
    }

    document.cookie = cookieString;
}

// Función para eliminar una cookie por su nombre
export function deleteCookie(name) {
    document.cookie =
        name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
