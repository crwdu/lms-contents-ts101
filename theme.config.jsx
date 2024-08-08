import Footer from "./components/Footer";
import LogoIcon from "./public/images/logo/logo_header.svg";
import favicon from "./public/icons/favicon.ico";

const config = {
  darkMode: false,
  logo: <LogoIcon />,
  logoLink: process.env.NEXT_PUBLIC_URI,
  editLink: {
    component: () => <></>,
  },
  feedback: {
    content: null,
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="바닐라코딩" />
      <meta property="og:description" content="바닐라코딩" />
      <title>바닐라코딩</title>
      <link rel="icon" href={favicon.src} />
    </>
  ),
  footer: {
    component: <Footer />,
  },
};

export default config;
