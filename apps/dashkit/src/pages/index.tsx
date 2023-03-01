import Head from "next/head";
import { Inter } from "next/font/google";
import { projectTitle } from "@/config";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Button from "@/components/button";
import BaseRoomLogo from "@/svg/room.svg";

import { HiChevronUp as BaseHiChevronUp } from "react-icons/hi2";
import React, { useRef, useEffect, useState } from "react";



const HiChevronUp = ({ ...props }) => (
  <motion.i {...props}>
    <BaseHiChevronUp />
  </motion.i>
);

// eslint-disable-next-line react/display-name
const RoomLogo = motion(
  React.forwardRef<HTMLDivElement>(function RoomLogo(props, ref) {
    return <div ref={ref}>
      <BaseRoomLogo {...props} />
    </div>;
  })
);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const introRef = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);



  const handleConnect = () => {
    console.log("lets connect");
  };


  const notConnected = (<><br /><Button text="connect" onClick={handleConnect}></Button><br /></>)
  const connected = (<><br />Dashboard<br /></>)

  return (
    <>
      <Head>
        <title>{projectTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={
          "flex flex-col justify-center items-center font-semibold text-6xl h-screen w-screen fixed"
        }
        style={{
          background: "var(--color-primary)",
          color: "var(--color-primary-contrast)",
        }}
      >
        <RoomLogo style={{ opacity, scale }} />
      </div>
      <div
        className={"flex flex-col items-center w-screen h-screen"}
        style={{
          translate: "0 calc(100vh - 400px)",
        }}
      >
        <motion.p
          className="text-center text-6xl pb-16"
          style={{ color: "var(--color-primary-contrast)", fontFamily: "var(--header-font)", opacity }}
        >
          My Room
        </motion.p>
        <div
          ref={introRef}
          className={"flex flex-col items-center bg-slate-200 w-screen h-full"}
          style={{
            borderTopLeftRadius: "50% 12%",
            borderTopRightRadius: "50% 12%",
          }}
        >
          <HiChevronUp
            className={"text-slate-500 text-4xl mt-8 mb-2"}
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span style={{ ...inter.style }} className={"mb-6"}>
            Scroll
          </span>

          <p className="text-center">
            My Room - &copy; 2023
            <br />
            Made for the ETHDenver #BUIDLathon 2023
            <br />
            By Dino, Liang, Geoffrey and Josh.
          </p>
          <div>{provider ? connected : notConnected}</div>
        </div>
      </div>
    </>
  );
}
