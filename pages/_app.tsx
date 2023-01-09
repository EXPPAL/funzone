import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store from '../store';

import "../styles/globals.css";
import "../styles/effects.scss";

import Nav from "@/components/basic/nav";
import Footer from "@/components/basic/footer";

function MyApp({ Component, pageProps }: AppProps) {
  const density = 0;

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={store._persistor}>
          <div
            draggable="false"
            className="bg-black bg-fixed bg-center bg-cover text-white max-h-screen relative select-none before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:opacity-60 before:bg-gradient-radial-at-br before:to-[#0a03a8] before:via-[#171717] before:from-[#bf010b]"
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-[url('/images/background1.png')] mix-blend-color-dodge bg-no-repeat bg-[left_42%_bottom] bg-[length:100%_60%] pointer-events-none"></div>

            <Nav />

            <div className="container mx-auto flex flex-col h-screen pt-64 pb-20 relative">
              <div className="overflow-auto scrollable scrollable-light h-full">
                <main className="flex-auto flex flex-col justify-center min-h-full">
                  <Component {...pageProps} />
                </main>
              </div>
            </div>

            <Footer />

          </div>
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp;