import {
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Show,
  Stack,
  Text,
  VStack,
  Link,
  chakra,
} from '@chakra-ui/react';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeroPage = () => {
  const Icon = chakra(FontAwesomeIcon);
  return (
    <Flex
      alignItems="center"
      justifyContent="space-around"
      width="100%"
      my="60px"
      minHeight="60vh"
      bgGradient="radial(gray.500 1px, transparent 0)"
      bgSize="40px 40px"
      py="100px"
      id="home"
      scrollBehavior="smooth"
    >
      <VStack gap="10" bgColor="#F5F5F5" borderRadius="20px" m="50px">
        <Stack direction="column" m="0px">
          <Heading fontSize="4xl" fontWeight="extrabold">
            Govind Kurapati
          </Heading>
          <Text fontSize="2xl" color="brand.main" fontWeight="medium">
            Software Developer
          </Text>
        </Stack>

        <Stack w="100%" gap="2">
          <HStack alignItems="center" justifyContent="space-between">
            <HStack>
              <Icon icon={faLinkedin} boxSize={8} />
              <Button variant="link" color="gray.800">
                <Link
                  href="https://www.linkedin.com/in/govind-k-2b4880148"
                  isExternal
                >
                  LinkedIn
                </Link>
              </Button>
            </HStack>
            <HStack>
              <Icon icon={faGithub} boxSize={8} />
              <Button variant="link" color="gray.800">
                <Link href="https://github.com/GovindKurapati" isExternal>
                  GitHub
                </Link>
              </Button>
            </HStack>
          </HStack>
          <Flex w="100%">
            <Button
              w="100%"
              variant="solid"
              size="lg"
              _hover={{
                bg: 'gray.600',
                color: '#F5F5F5',
              }}
            >
              Resume
            </Button>
          </Flex>
        </Stack>
      </VStack>
      <Show above="md">
        <Flex>
          <Image src="./assets/hero.png" title="hero" width={450} />
        </Flex>
      </Show>
    </Flex>
  );
};

export default HeroPage;
