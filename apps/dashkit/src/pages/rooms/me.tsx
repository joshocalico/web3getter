import { useEffect } from "react"
import { useRouter } from "next/router"
import { useAccount } from "wagmi"
import { useUniversalResolver } from "@/utils"

import { HiPaperAirplane } from "react-icons/hi2"

import { NextPage } from "next"
import { Button } from "@/components"

const RoomOfAccount: NextPage = () => {
  const { isConnected, address } = useAccount()
  const { name, isLens } = useUniversalResolver(address as string)

  const router = useRouter()

  useEffect(() => {
    if (!isConnected) {
      router.push('/')
    }
  }, [isConnected, router])

  return <>
    <h1>Welcome 
      <strong>{name ?? `${address?.slice(0, 8)}...`}</strong>
    </h1>

    {isLens && <Button>
      <HiPaperAirplane /> Share to Lenster
    </Button>}
  </>
}

export default RoomOfAccount;