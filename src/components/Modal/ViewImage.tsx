import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent
        my="auto"
        alignItems="start"
        maxWidth="900px"
        maxHeight="600px"
      >
        <ModalBody padding="initial">
          <Image
            maxW="900px"
            maxH="600px"
            height="100%"
            weight="100%"
            src={imgUrl}
            alt="image"
            objectFit="cover"
            layout="fill"
          />
        </ModalBody>

        <ModalFooter
          h="2rem"
          w="100%"
          p="2"
          color="pGray.50"
          bg="pGray.800"
          justifyContent="left"
          borderBottomRadius={5}
        >
          <Link fontSize="0.87rem" lineHeight="16px" href={imgUrl}>
            Ver original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
