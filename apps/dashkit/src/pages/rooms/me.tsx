import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";

import { useDefaultOnHydration, useUniversalResolver } from "@/utils";
import { Button, Navigation } from "@/components";

import { HiPaperAirplane } from "react-icons/hi2";

import { NextPage } from "next";


const RoomOfAccount: NextPage = () => {
  const { isConnected, address: _address } = useAccount();
  const { name: _name, isLens } = useUniversalResolver(_address as string);

  const { name, address } = useDefaultOnHydration(
    {
      name: _name,
      address: _address,
    },
    // Default
    {
      name: "unknown",
      address: "unknown",
    }
  );

  const router = useRouter();

  useEffect(() => {
    if (!isConnected) {
      router.push("/");
    }
  }, [isConnected, router]);

  return (
    <>
      <Navigation />
      <h1>
        Welcome{" "}
        <strong>{name ?? `${address?.slice(0, 8) ?? "unknown"}...`}</strong>!
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
