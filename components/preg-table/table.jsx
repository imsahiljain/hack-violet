import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Link,
} from "@chakra-ui/react";

const PregTable = () => {
  return (
    <Table variant="simple" width="30%" mt="10">
      <Thead>
        <Tr>
          <Th>Topic</Th>
          <Th>Link</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>inches</Td>
          <Td>
            <Link href="" target="_blank">
              Know more
            </Link>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default PregTable;
