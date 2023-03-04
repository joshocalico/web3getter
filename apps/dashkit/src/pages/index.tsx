import Head from "next/head";
import { projectTitle } from "@/config";
import { useEffect } from "react";
import { Web3Button } from "@web3modal/react";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";

export default function Home() {
  const router = useRouter()
  const { isConnected } = useAccount()
  
  useEffect(() => {
    if (isConnected)
      router.push("/rooms/me")
  }, [router, isConnected]);

  return (
    <>
      <Head>
        <title>{projectTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={"flex flex-col items-center justify-center w-screen h-screen"}
        style={{
          background: "var(--color-primary)",
          color: "var(--color-primary-contrast)",
        }}
      >
        <p className="text-center text-3xl pb-16"
          style={{ color: "var(--color-primary-contrast)", fontFamily: "var(--header-font)" }}
        >
          My Room
        </p>
        <div
          className={"flex flex-col items-center bg-slate-200 w-screen fixed bottom-0 text-slate-900 pt-20 pb-8"}
          style={{
            borderTopLeftRadius: "50% 25%",
            borderTopRightRadius: "50% 25%",
          }}
        >
          <br />
            <Web3Button icon="hide" label="Connect Wallet" balance="show" />
          <br />

          <p className="text-center p-4 font-sans font-thin">
            My Room - &copy; 2023
            <br />
            Made with ♥ for ETHDenver #BUIDLathon 2023
            <br />
            By Dino, Liang, Geoffrey and Josh.
          </p>
        </div>
      </div>
    </>
  );
}
