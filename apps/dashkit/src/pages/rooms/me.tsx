import { NextPage } from "next"

import { useRouter } from "next/router"
import { useAccount } from "wagmi"
import { useUniversalResolver } from "@/utils"

import { HiPaperAirplane } from "react-icons/hi2"

const RoomOfAccount: NextPage = () => {
  const { isConnected, address } = useAccount()
  const { name, isLens } = useUniversalResolver(address as string)

  const router = useRouter()

  if (!isConnected) {
    router.push('/')
  }

  return <>
    <h1>Welcome 
      <strong>{name ?? `${address?.slice(0, 8)}...`}</strong>
    </h1>

    {isLens && <button>
      <HiPaperAirplane /> Share to Lenster
    </button>}
  </>
}

export default RoomOfAccount;