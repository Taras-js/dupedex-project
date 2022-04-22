/* eslint-disable react/jsx-props-no-spreading */
import '../assets/styles/globals.css';

import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { Header } from '../components/Header';

import store from '../app/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}
