import { gql, useQuery } from "@apollo/client";
import { useEnsAddress, useEnsName } from "wagmi";

const getProfileByAddress = gql`
  query GetProfile($address: EthereumAddress!) {
    profiles(request: { ownedBy: [$address] }) {
      items {
        isDefault
        handle
        ownedBy
      }
    }
  }
`;

const getProfileByHandle = gql`
  query GetProfile($handle: Handle!) {
    profiles(request: { handles: [$handle] }) {
      items {
        isDefault
        handle
        ownedBy
      }
    }
  }
`;

type ResolverResult = {
  address?: string;
  name?: string;
  isLens?: boolean;
  isLoading: boolean;
};

type ProfileLensResult = {
  profiles: {
    items: [{
      isDefault: boolean;
      handle: string;
      ownedBy: string;
    }];
  };
};

/**
 * useUniversalResolver finds the address and friendly name of a user
 * @param ref - The address, ENS or Lens name to resolve
 * @returns The resolved address and friendly name
 */
export const useUniversalResolver = (ref: string): ResolverResult => {
  // ENS
  const { data: resolver, isLoading: resvIsLoading } = useEnsAddress({
    name: ref,
  });
  const { data: nameResult, isLoading: pendingSearch } = useEnsName({
    address: ref as `0x${string}`,
  });

  // Lens
  const { data: resolveLensHandleResult, loading: profileHandleLoading } =
    useQuery<ProfileLensResult>(getProfileByHandle, {
      variables: {
        handle: ref,
      },
    });

  const { data: resolveLensAddressResult, loading: profileAddressLoading } =
    useQuery<ProfileLensResult>(getProfileByAddress, {
      variables: {
        address: ref,
      },
    });

  const { data: resolveLensFromEnsAddressResult, loading: profileFromEnsAddressLoading } =
    useQuery<ProfileLensResult>(getProfileByAddress, {
      variables: {
        address: resolver,
      },
    });

  const profileHandle = resolveLensHandleResult?.profiles.items[0];
  const profileAddress = resolveLensAddressResult?.profiles.items[0];
  const upgradeProfile = resolveLensFromEnsAddressResult?.profiles.items[0];

  const lensProfile = profileHandle || profileAddress || upgradeProfile;


  const isLoading =
    resvIsLoading ||
    pendingSearch ||
    profileHandleLoading ||
    profileAddressLoading;
  const hasData = resolver || nameResult;

  if (isLoading && !hasData) return { isLoading };
  if (lensProfile || resolver || nameResult)
    return {
      address: lensProfile?.ownedBy || resolver || ref,
      name: lensProfile?.handle || nameResult || ref,
      isLoading,
      isLens: !!lensProfile,
    };

  return { address: ref, isLoading, isLens: false };
};
