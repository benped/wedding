/// <reference types="vite/client" />

interface ImportMetaEnv {
  // ... existing env variables ...
  readonly VITE_SITE_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace NodeJS {
  interface ProcessEnv {
    GOOGLE_PLACES_API_KEY: string;
  }
}
