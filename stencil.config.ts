import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "cr7-stencil-component",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ]
};
