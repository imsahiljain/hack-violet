import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const Adult = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Select
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="gray.100">
          <ModalHeader>Adult</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Sexually transmitted diseases can be caused due to unprotected sex.
            HIV is also an infection that can cause severe health consequences.
            If someone makes intimate relations with and HIV-positive person,
            they can get HIV too. Thus, educating people about sexual health is
            very very important.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Adult;
