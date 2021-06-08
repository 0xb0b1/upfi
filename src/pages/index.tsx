/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  const fetchImages = ({ pageParam = 0 }) => api.get('/api/images');

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery('images', fetchImages, {
    getNextPageParam: (lastPage, pages) => lastPage,
  });

  const formattedData = useMemo(() => {
    // TODO FORMAT AND FLAT DATA ARRAY
  }, [data]);

  // TODO RENDER LOADING SCREEN

  // TODO RENDER ERROR SCREEN

  // if (isLoading) {
  //   return (
  //     <>
  //       <Loading />
  //     </>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <>
  //       <Error />
  //     </>
  //   );
  // }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />

        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}

        <Button mt={8} onClick={() => console.log('')}>
          Carregar mais
        </Button>
      </Box>
    </>
  );
}
