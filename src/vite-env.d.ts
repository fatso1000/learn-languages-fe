/// <reference types="vite/client" />

declare module "vite/client" {
  interface ImportMeta {
    glob: (
      globPattern: string
    ) => Record<string, () => Promise<{ default: string }>>;
  }
}
