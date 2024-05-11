import { Flex, Link, Text } from '@chakra-ui/react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  // const Icon = chakra(FontAwesomeIcon);

  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="space-between"
      gridGap={2}
      wrap="wrap"
      position="fixed"
      maxWidth="100%"
      paddingX={{ base: '10px', md: '40px', lg: '20px' }}
      bgColor="#F5F5F5"
      height="80px"
      zIndex={100}
    >
      <Flex>
        <Text fontSize="x-large" fontWeight="500">
          <Link
            href="#home"
            textDecoration="none"
            _hover={{
              textDecoration: 'none',
            }}
          >
            GK
          </Link>
        </Text>
      </Flex>
      <Flex
        gap={{ base: '20px', md: '30px', lg: '50px' }}
        justifyContent="space-between"
      >
        <Text>
          <Link fontSize="md" href="#home" scrollBehavior="smooth">
            Home
          </Link>
        </Text>
        <Text>
          <Link fontSize="md" href="#work">
            Work
          </Link>
        </Text>
        <Text>
          <Link fontSize="md" href="#skills">
            Skills
          </Link>
        </Text>
        {/* <Text>
          <Link fontSize="md" href="#home">
            Contact
          </Link>
        </Text> */}
      </Flex>
      {/* <Flex> */}
      {/* <ThemeToggle /> */}
      {/* <Button variant="link"> */}
      {/* <Icon icon={faEnvelope} boxSize={6} /> */}
      {/* </Button> */}
      {/* </Flex> */}
    </Flex>
  );
};

export default Header;
