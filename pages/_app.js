import "../styles/globals.css";
import { useState, useEffect } from "react";
import { MDXProvider } from "nextra/mdx";
import { Callout } from "nextra-theme-docs";

import CustomSandpack from "../components/CustomSandpack";

import useUser from "../hooks/useUser";
import useGlobalEvents from "../hooks/useGlobalEvents";
import { isDeployed } from "../utils/config";

export default function Nextra({ Component, pageProps }) {
  if (isDeployed()) {
    useGlobalEvents();
  }

  const { isLoggedIn } = useUser();

  const [hasVisitedContentPage, setHasVisitedContentPage] = useState(true);

  const shortcodes = { Callout, CustomSandpack };

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedContentPage");

    if (!hasVisited) {
      setHasVisitedContentPage(false);
    }
  }, [hasVisitedContentPage]);

  if (!isLoggedIn && process.env.NODE_ENV === "production") {
    return <></>;
  }

  return (
    <>
      <MDXProvider components={shortcodes}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}
