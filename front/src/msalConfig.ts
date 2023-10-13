export const msalConfig = {
  auth: {
    clientId: "36148247-7edd-499a-b4d2-6f37380a4f57",
    authority: "https://login.microsoftonline.com/b50567c1-417f-41a0-a60b-1800062c92b5", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: import.meta.env.DEV ? "http://localhost:4173" : "https://nice-flower-001d0cb1e.3.azurestaticapps.net",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  }
};

export const loginRequest = {
 scopes: ["User.Read", "offline_access", "api://c4a52562-6388-47ef-bf9e-ba63750510e4/identity"]
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};