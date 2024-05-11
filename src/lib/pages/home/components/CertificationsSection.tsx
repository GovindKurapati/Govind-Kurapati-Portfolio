import { Flex, Heading, Text, Link, chakra } from '@chakra-ui/react';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CertificationsSection = () => {
  const Icon = chakra(FontAwesomeIcon);
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      w="100%"
    >
      <Heading fontSize="4xl" fontWeight="extrabold">
        Certifications
      </Heading>

      <Flex direction="column" gap="10px" my="40px" px="10px">
        <Text>
          <Icon icon={faCertificate} boxSize="15px" mr="10px" />
          <Link
            href="/assets/AWS Certified Solutions Architect - Associate certificate.pdf"
            isExternal
          >
            AWS Certified Solutions Architect - Associate
          </Link>
        </Text>
        <Text>
          <Icon icon={faCertificate} boxSize="15px" mr="10px" />
          <Link href="/assets/Azure AZ-900.pdf" isExternal>
            Azure Fundamentals - AZ 900
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
};

export default CertificationsSection;
