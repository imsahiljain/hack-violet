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

const Teen = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Select
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="gray.100">
          <ModalHeader>Teenage</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Involved with multiple people with different backgrounds in theory,
            research, sex and STD/HIV education to develop the curriculum.
            Assessed relevant needs and assets of target group. Used a logic
            model approach to develop the curriculum that specific the health
            goals, the behaviors affecting those health goals, the risk and
            protective factors affecting those behaviors, and the activities
            addressing those risk and protective factors. Designed activities
            consistent with community values and available resources (e.g. staff
            time, staff skills, facility space and supplies.)
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

export default Teen;
