import BaseModal from "./BaseModal"
import Button from "../Button"
import useMintRoom from "@/utils/wallet"

const mintables = [
    {
        name: 'Polygon',
        address: '0xC7cC55b12B16CC2bd24A9ba8E1b7802799E62178',
        image: '/chain/polygon.png',
    },
    {
        name: 'Base',
        address: '0xC7cC55b12B16CC2bd24A9ba8E1b7802799E62178',
        image: '/chain/base.png',
    },
    {
        name: 'Scroll',
        address: '0xC7cC55b12B16CC2bd24A9ba8E1b7802799E62178',
        image: '/chain/scroll.png',
    },
    {
        name: 'Ethereum',
        address: '0xC7cC55b12B16CC2bd24A9ba8E1b7802799E62178',
        image: '/chain/ethereum.png',
    },
]

type MintModalProps = {
    onMint: () => void
}

const options = mintables.map((mintable) => { return {
    value: mintable.name,
    label: mintable.name,
}})

const MintModal = ({ onMint }: MintModalProps) => {
    const { mint } = useMintRoom()

    return (
        <BaseModal open>
            <div className="font-sans">
            <h1 className="text-xl font-bold">To continue you&apos;ll need to create your room.</h1>
            <p className="text-lg">
                Make sure you&apos;re using the right wallet as this will be
                the login wallet for your room.
            </p>
            <span className="font-light">
                Select your favourite chain and let&apos;s get started.
            </span>
            <div className="flex justify-between py-4 items-center">
                <span>
                    Supported: Polygon, Base, Scroll, Ethereum (Testnets)
                </span>
                <Button className={"text-lg p-3"} onClick={() => mint().then(onMint)}>Create</Button>
            </div>
            </div>
        </BaseModal>
    )
}

export default MintModal
