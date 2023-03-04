import { useUniversalResolver } from "@/utils";
import { NextPage } from "next";
import { useRouter } from "next/router";

const RoomWithRef: NextPage = () => {
    const {
        query: { ref },
    } = useRouter()

    const {
        address: roomAddress,
        name: roomOwnerName,
        isLens
    } = useUniversalResolver(ref as string)

    const displayName = roomOwnerName ?? roomAddress;

    return <>
        <h1>
            {displayName}
        </h1>
        <p>
            {roomAddress}
        </p>
        {
            isLens && <p>
                This is a Lens Protocol user
            </p>
        }
    </>
}

export default RoomWithRef;