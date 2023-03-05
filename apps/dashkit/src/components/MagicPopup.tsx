import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Magic } from "magic-sdk";
import { ethers } from "ethers";
import { useRouter } from "next/router";


type MagicPopupModalProps = {
  children: React.ReactNode;
  className?: string;
}

export default function MagicPopup() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const router = useRouter()
  const handleSignIn = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("boo ")

    const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY as string);
    console.log("🚀 ~ file: MagicPopup.tsx:25 ~ handleSignIn ~ magic:", magic)

    const didToken = magic.auth.loginWithMagicLink({
      email
    });
    // // 🌐 Send didToken to your backend API

    const provider = new ethers.providers.Web3Provider(magic.rpcProvider as any);

    const signer = provider.getSigner();
    const address = await signer.getAddress();

    setAddress(address as any);
    if (address) {
      router.push("/rooms/me")
    }

  }




  const openModal = () => {
    setShowModal(true);
    console.log("opened")
  }

  const closeModal = () => {
    setShowModal(false);
    console.log("closed")
  }

  return (
    <>
      <button className=" text-white font-bold py-2 px-4 rounded-md" onClick={openModal} style={{ borderRadius: '10px', backgroundColor: "#E88C38" }}>Connect with Magic ✨</button>
      {showModal && (
        <div className="popup-overlay min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          {/* <div className="sm:mx-auto sm:w-full sm:max-w-md">
            {address && (
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {address}
              </h2>
            )}
          </div> */}

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md" >
            <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10" style={{ border: '1px solid var(--color-primary)' }}>
              <form className="space-y-6" onSubmit={handleSignIn}>
                <div>
                  <div className="mt-1" style={{ fontFamily: 'var(--header-font)' }}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                    style={{ background: 'transparent', color: 'var(--color-primary)', border: '1px solid var(--color-primary)', borderRadius: '12px' }}
                  >

                    Sign in
                  </button>

                </div>
              </form>


            </div>
          </div>
        </div>
      )}
    </>
  );
};


