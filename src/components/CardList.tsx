/* eslint-disable react/no-array-index-key */
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
  const [imageUrl, setImageUrlSelected] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  const handleViewImage = (url: string): void => {
    setImageUrlSelected(url);
    onOpen();
  };

  return (
    <>
      {/* <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        {cards?.map((card, index) => (
          <Card
            key={index}
            data={card}
            viewImage={url => handleViewImage(card.url)}
          />
        ))}
      </SimpleGrid> */}
      <Button onClick={() => onOpen()}>Click</Button>

      {isOpen && (
        <ModalViewImage
          isOpen={isOpen}
          onClose={onClose}
          imgUrl="https://i.ibb.co/zXdPThr/cropped.png"
        />
      )}
    </>
  );
}
