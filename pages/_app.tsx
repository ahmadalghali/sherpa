import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Layout from "../components/layout";
import { store } from '../store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sherpa</title>
        <meta name='description' content='The one and only task planner you need.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
