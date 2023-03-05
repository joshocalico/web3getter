import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";

import { useDefaultOnHydration, useUniversalResolver } from "@/utils";
import { Button, Navigation, DragGrid, Greeter } from "@/components";

import { HiPaperAirplane } from "react-icons/hi2";

import { NextPage } from "next";

const RoomOfAccount: NextPage = () => {
  const { status, address: _address } = useAccount();
  const { name: _name, isLens } = useUniversalResolver(_address as string);

  const name = useDefaultOnHydration(_name, "unknown");
  const address = useDefaultOnHydration(_address as string, "unknown");

  const router = useRouter();

  return (
    <>
      <Navigation />
      <div className="flex flex-col justify-center items-center">
        <div className="flex">
          <Greeter
            me
            name={name ?? `${address?.slice(0, 8) ?? "unknown"}...`}
          />
          {isLens && (
            <Button>
              <HiPaperAirplane /> Share to Lenster
            </Button>
          )}
        </div>

        <DragGrid />
      </div>
      <p className="text-center p-4 font-sans font-thin">
        My Room - &copy; 2023
        <br />
        Made with ♥ for ETHDenver #BUIDLathon 2023
        <br />
        By Dino, Liang, Geoffrey and Josh.
      </p>
      <h1>
        Welcome{" "}
        <strong>{name ?? `${address?.slice(0, 8) ?? "let's create a room"}!!!`}</strong>!
      </h1>
      {isLens && (
        <Button>
          <HiPaperAirplane /> Share to Lenster
        </Button>
      )}
    </>
  );
};

export default RoomOfAccount;
