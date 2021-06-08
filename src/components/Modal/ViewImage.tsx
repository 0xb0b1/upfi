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
      <ModalOverlay bg="rgba(0, 0, 0, 0.3)" />
      <ModalContent
        my="auto"
        alignItems="start"
        maxWidth="900px"
        maxHeight="600px"
      >
        <ModalBody p="0">
          <Image src={imgUrl} alt="image" objectFit="cover" layout="fill" />
        </ModalBody>
        <ModalFooter
          h="2rem"
          w="100%"
          p="2"
          color="pGray.50"
          bg="pGray.800"
          justifyContent="left"
        >
          <Link fontSize="0.87rem" href={imgUrl}>
            Ver original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
