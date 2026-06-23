/// <reference types="vite/client" />

interface ImportMetaEnv {
	/** Formspree form endpoint for the contact form (https://formspree.io). */
	readonly VITE_FORMSPREE_ENDPOINT?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
