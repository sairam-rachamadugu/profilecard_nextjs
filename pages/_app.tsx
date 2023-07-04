import Head from "next/head";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import DashboardLayout from "../layout/layout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </>
  );
}
