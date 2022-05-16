/* eslint-disable react/jsx-props-no-spreading */
import "../assets/styles/globals.css";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";

import store, { wrapper } from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <div id="modal__root" />
    </>
  );
}

export default wrapper.withRedux(MyApp);
