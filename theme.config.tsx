import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/MeteorDocs/images/Logo.png"
          alt="MeteorNvim Logo"
          width="30px"
          style={{ marginRight: "5px" }}
        />
        <span>MeteorNvim</span>
      </div>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="MeteorNvim" />
      <meta
        property="og:description"
        content="MeteorNvim enhances Neovim with LSP-based autocompletion, a theme switcher, Discord RPC, inlay hints, and more. Elevate your coding experience!"
      />
      <link rel="icon" href="/MeteorDocs/favicon.ico" sizes="any" />
    </>
  ),
  project: {
    link: "https://github.com/MeteorNvim",
  },
  docsRepositoryBase: "https://github.com/MeteorNvim/MeteorDocs",
  toc: {
    title: "",
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - MNV'
    }
  },
  footer: {
    text: "MeteorNvim Docs",
  },
  primaryHue: 27,
  primarySaturation: 76,
};

export default config;
