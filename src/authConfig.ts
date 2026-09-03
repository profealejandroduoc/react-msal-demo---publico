import type { Configuration } from "@azure/msal-browser";

export const msalConfig: Configuration = {
    auth: {
        clientId: "cfb5f906-2fb1-xxxx-xxxx-xxxxxx", //tu cliente
        authority: "https://login.microsoftonline.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", //tu tenant
        redirectUri: "http://localhost:5173",
    },

    cache: {
        cacheLocation: "sessionStorage",
    },
};