import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { FC } from 'react';
import ImageLoadable from '../components/image-loadable';

export const FullImageModal: FC<
  Omit<Parameters<typeof Modal>[0], 'children'> & {
    src: string;
    title?: string;
  }
> = ({ isOpen, onClose, src, title, ...rest }) => {
  return (
    <Modal {...rest} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW='1024px' minH='80vh'>
        <ModalHeader>{title ? title : 'Full size screenshot'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ImageLoadable src={src} maxW='full' />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
