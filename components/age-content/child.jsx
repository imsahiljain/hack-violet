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
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";

const Child = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Select
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="gray.100">
          <ModalHeader>Childhood</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            It&apos;s never too early to talk with your child about sex. Talking
            about sex, sexuality and bodies as your child moves towards puberty
            can help your child understand that sex and sexuality are typical,
            healthy parts of life. Open and honest conversations when your child
            is young can make later conversations easier. And these early
            conversations also lay the groundwork for children to make healthier
            and safer choices about sex and sexual relationships when
            they&apos;re older. The key early message for your child is that he
            can come to you for open, honest and reliable information, and that
            he shouldn&apos;t feel scared or embarrassed to ask you about sex
            and sexuality.
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

export default Child;
