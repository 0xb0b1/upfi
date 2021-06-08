/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { Button, SimpleGrid, useDisclosure } from '@chakra-ui/react';
// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure(); // modal useDisclosure

  // TODO SELECTED IMAGE URL STATE
  const [images, setImages] = useState();

  // TODO FUNCTION HANDLE VIEW IMAGE
  const handleViewImage = (url: string): void => {
    onOpen();
  };

  return (
    <>
      <SimpleGrid>
        <Card
          data={{ title: '', description: '', url: '', ts: 0 }}
          viewImage={() => handleViewImage('#')}
        />
      </SimpleGrid>

      <ModalViewImage
        isOpen={isOpen}
        onClose={onClose}
        imgUrl="https://i.ibb.co/ZHKyrQ3/rick-and-morty-ii-1042-1-20180314090538.png"
      />
    </>
  );
}
