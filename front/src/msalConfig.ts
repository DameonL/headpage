export const msalConfig = {
  auth: {
    clientId: "900f4f61-a401-44ce-990f-d5cb183dc9de",
    authority: "https://login.microsoftonline.com/329b180e-d58e-4ff8-8774-bcb44323ec55", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: import.meta.env.DEV ? "http://localhost:4173" : "https://nice-flower-001d0cb1e.3.azurestaticapps.net",
    navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: [],
};

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
