import NftMintAbi from "@/abi/DashboardMinter.json";
import { useState } from "react";

import { useSigner, useContract, useAccount } from "wagmi";

const useMintRoom = () => {
  const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const { data: signer } = useSigner();
  const contract = useContract({
    address,
    abi: NftMintAbi.abi,
    signerOrProvider: signer,
  });

  async function mint() {
    const tx = await contract?.mint(
      "https://myroom.infura-ipfs.io/ipfs/QmPoQ8xWQdS34gMP4bCnqCTV7RfEfqgdftf2jo2zZf7PeF"
    );
    await tx.wait();
  }

  return {
    mint,
  };
};

export const useHasNft = () => {
  const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const { data: signer } = useSigner();
  const { isConnected, address: user } = useAccount();
  const contract = useContract({
    address,
    abi: NftMintAbi.abi,
    signerOrProvider: signer,
  });

  const [hasNft, setHasNft] = useState(false);

  if (isConnected && signer) {
    contract?.balanceOf(user).then((balance: number) => {
    if (balance > 0) {
        setHasNft(true);
    }
    });
  }
  return hasNft;
};

export default useMintRoom;
