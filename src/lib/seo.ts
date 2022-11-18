import { DefaultSeoProps } from "next-seo/";

export const title = "Toastify";
export const description = "The official website for Toastify.";
export const domain = "toastify.tk";
export const color = "#ffdb00";

export const config: DefaultSeoProps = {
  title: "Home",
  titleTemplate: `%s | ${title}`,
  description,
  themeColor: color,
  additionalLinkTags: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "mask-icon",
      color,
      href: "/safari-pinned-tab.svg",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
  additionalMetaTags: [
    {
      name: "msapplication-TileColor",
      content: color,
    },
  ],
  twitter: {
    handle: "@ToastifyDev",
    cardType: "summary",
  },
  openGraph: {
    type: "website",
    url: `https://${domain}`,
  },
};
