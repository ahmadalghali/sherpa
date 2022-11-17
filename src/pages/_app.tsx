import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { store } from "../store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollableLayout from "@/common/components/layouts/ScrollableLayout";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = // @ts-ignore
    Component.getLayout ??
    ((page: any) => <ScrollableLayout>{page}</ScrollableLayout>);

  return (
    <>
      <Head>
        <title>Sherpa</title>
        <meta
          name="description"
          content="The one and only task planner you need."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          {getLayout(<Component {...pageProps} />)}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Provider>
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </>
  );
}
