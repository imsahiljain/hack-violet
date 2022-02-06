import { Table, Thead, Tbody, Tr, Th, Td, Link } from "@chakra-ui/react";

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
          <Td>Healthy Eating</Td>
          <Td>
            <Link
              href="https://health.gov/myhealthfinder/topics/pregnancy/nutrition-and-physical-activity/eat-healthy-during-pregnancy-quick-tips#:~:text=Eat%20a%20variety%20of%20vegetables,bread%2C%20and%20some%20snack%20foods"
              target="_blank"
            >
              Know more
            </Link>
          </Td>
        </Tr>
        <Tr>
          <Td>Physical & mental fitness</Td>
          <Td>
            <Link
              href="https://timesofindia.indiatimes.com/life-style/parenting/mental-fitness-is-as-important-as-physical-fitness-for-new-moms/articleshow/71149003.cms"
              target="_blank"
            >
              Know more
            </Link>
          </Td>
        </Tr>
        <Tr>
          <Td>Changes in pregnancy</Td>
          <Td>
            <Link
              href=".
              https://www.healthline.com/health/pregnancy/bodily-changes-during"
              target="_blank"
            >
              Know more
            </Link>
          </Td>
        </Tr>
        <Tr>
          <Td>Healthy Eating</Td>
          <Td>
            <Link
              href="https://health.gov/myhealthfinder/topics/pregnancy/nutrition-and-physical-activity/eat-healthy-during-pregnancy-quick-tips#:~:text=Eat%20a%20variety%20of%20vegetables,bread%2C%20and%20some%20snack%20foods."
              target="_blank"
            >
              Know more
            </Link>
          </Td>
        </Tr>
        <Tr>
          <Td>Physical preparation for childbirth</Td>
          <Td>
            <Link
              href="https://utswmed.org/medblog/prepare-body-labor-delivery/"
              target="_blank"
            >
              Know more
            </Link>
          </Td>
        </Tr>
        <Tr>
          <Td>Parental care</Td>
          <Td>
            <Link
              href="https://www.plannedparenthood.org/learn/pregnancy/prenatal-care"
              target="_blank"
            >
              Know more
            </Link>
          </Td>
        </Tr>
        <Tr>
          <Td>Newborn care and safety</Td>
          <Td>
            <Link
              href="https://www.womenshealth.gov/pregnancy/childbirth-and-beyond/newborn-care-and-safety"
              target="_blank"
            >
              Know more
            </Link>
          </Td>
        </Tr>
        <Tr>
          <Td>Postpartum Changes</Td>
          <Td>
            <Link
              href="https://en.wikipedia.org/wiki/Postpartum_physiological_changes#:~:text=After%20birth%2C%20the%20fundus%20contracts,delivered%20a%20child%20or%20children."
              target="_blank"
            >
              Know more
            </Link>
          </Td>
        </Tr>
        <Tr>
          <Td>Environmental exposure</Td>
          <Td>
            <Link
              href="https://www.karger.com/Article/Abstract/514884#:~:text=Pregnant%20and%20lactating%20women%20are,preterm%20birth%2C%20and%20thyroid%20function."
              target="_blank"
            >
              Know more
            </Link>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default PregTable;
