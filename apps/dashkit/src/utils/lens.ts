import { gql, useQuery } from '@apollo/client';

const getFollowingQuery = gql`
query GetFollowing($address: EthereumAddress!) {
  following(request: {
    address: $address
  }) {
    items {
      profile {
        name
        ownedBy
      }
    }
  }
}
`;

type FrensListResult = {
  following: {
    items: {
      profile: {
        name: string;
        ownedBy: string;
      }
    }[]
  }
}

const useFrensList = (address: string) => {
  const { data, loading } = useQuery<FrensListResult>(getFollowingQuery, {
    variables: {
      address,
    },
  });

  if (loading) {
    return {
      frens: [],
      loading,
    };
  }

  return {
    frens: data?.following.items.map((item: any) => item.profile) ?? [],
    loading,
  };
}