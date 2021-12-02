import { Image } from '@chakra-ui/image';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { FC } from 'react';

export const FullImageModal: FC<
  Omit<Parameters<typeof Modal>[0], 'children'> & { src: string }
> = ({ isOpen, onClose, src }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW='1024px'>
        <ModalHeader>Full Project Screenshot</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={src} maxW='full' />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
