import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      align="center"
      alignSelf="flex-end"
      justifyContent="center"
      marginX={{ base: '10px', md: '40px', lg: '56px' }}
      paddingBottom="20px"
    >
      <Text fontSize="xs">
        <Link href="/">govind kurapati</Link> - {new Date().getFullYear()}
      </Text>
    </Flex>
  );
};

export default Footer;
