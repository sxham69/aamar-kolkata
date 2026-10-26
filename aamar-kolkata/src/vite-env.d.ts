/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Set to "1" to skip the Google Maps iframe (used for sandboxed previews). */
  readonly VITE_NO_MAP?: string;
}
