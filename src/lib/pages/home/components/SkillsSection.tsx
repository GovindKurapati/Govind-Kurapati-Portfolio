import { Flex, Heading, Text } from '@chakra-ui/react';
// import { useEffect, useState } from 'react';
// import { useState } from 'react';

const SkillsSection = () => {
  const SKILLS_LIST = [
    'ReactJS',
    'VueJS',
    'Angular',
    'NodeJS',
    'JavaScript',
    'Java',
    'Python',
    '.NET',
    'SpringBoot',
    'AWS',
    'Azure',
    'NextJS',
    'NestJS',
  ];
  // const [columnCount, setColumnCount] = useState(0);

  // const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  // useEffect(() => {
  //   if (isLargerThan800) {
  //     setColumnCount(3);
  //   } else {
  //     setColumnCount(2);
  //   }
  // }, [isLargerThan800]);

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      w="100%"
      id="skills"
    >
      <Heading fontSize="4xl" fontWeight="extrabold">
        Skills
      </Heading>
      <Flex
        w={{ sm: '80%', md: '80%', xl: '50%' }}
        wrap="wrap"
        alignItems="center"
        justifyContent="center"
        my="40px"
      >
        {SKILLS_LIST.map((skills) => {
          return (
            <Flex key={skills}>
              {/* {(index + 1) % columnCount === 0 && (
                <Flex
                  height="80px"
                  borderRadius="15"
                  bgImage="linear-gradient(#ECEBEB, #DBDBDB)"
                  width="80px"
                  m="10px"
                />
              )} */}
              <Flex
                maxWidth="150px"
                height="80px"
                alignItems="center"
                p="20px"
                borderRadius="15"
                bgImage="linear-gradient(#ECEBEB, #DBDBDB)"
                fontSize="lg"
                m="10px"
                minWidth="150px"
                justifyContent="center"
              >
                <Text>{skills}</Text>
              </Flex>

              {/* {(index + 1) % columnCount === 0 && (
                <Flex
                  height="80px"
                  borderRadius="15"
                  bgImage="linear-gradient(#ECEBEB, #DBDBDB)"
                  width="80px"
                  m="10px"
                />
              )} */}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default SkillsSection;
