export const msalConfig = {
  auth: {
    clientId: "36148247-7edd-499a-b4d2-6f37380a4f57",
    authority: "https://login.microsoftonline.com/f02557e2-0f9a-4a24-8388-cac48fdc9332", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: import.meta.env.DEV ? "http://localhost:4173" : "https://calm-sea-0f71c5010.3.azurestaticapps.net/",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  }
};

export const loginRequest = {
 scopes: ["User.Read", "offline_access", "api://36148247-7edd-499a-b4d2-6f37380a4f57/Invoke"]
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};