import {
  Divider,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Text,
  chakra,
} from '@chakra-ui/react';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ExperienceStepProps = {
  title: string;
  organisation: string;
  timePeriod: string;
  activites: string[];
  stepCount: number;
  lastStep: boolean;
};
export const ExperienceStep = ({
  title,
  organisation,
  timePeriod,
  activites,
  stepCount,
  lastStep,
}: ExperienceStepProps) => {
  const Icon = chakra(FontAwesomeIcon);
  return (
    <Flex gap={4} w="80%">
      <Flex position="relative">
        {stepCount === 1 ? (
          <Icon icon={faDotCircle} boxSize="25px" />
        ) : (
          <Icon icon={faCircle} color="#D6D6D6" boxSize="25px" />
        )}

        {!lastStep && (
          <Divider
            h="full"
            position="absolute"
            left="12px"
            orientation="vertical"
            mt="25px"
            borderColor="#383636"
          />
        )}
      </Flex>
      <Flex direction="column" gap={1} mb="40px">
        <Heading as="h4" size="md">
          {title}
        </Heading>
        <Link isExternal fontSize="18px" fontWeight="600">
          {organisation}
        </Link>
        <Text
          p="5px"
          px="10px"
          bgColor="#D9D9D9"
          w="fit-content"
          borderRadius="15px"
          fontSize="12px"
          textTransform="uppercase"
        >
          {timePeriod}
        </Text>
        {activites.length > 0 && (
          <List mt="10px" spacing={3}>
            {activites.map((activity) => {
              return (
                <ListItem
                  display="flex"
                  alignItems="baseline"
                  key={activity.substring(0, 15)}
                >
                  <Icon icon={faCircle} mr="8px" boxSize="6px" />
                  <Text display="inline">{activity}</Text>
                </ListItem>
              );
            })}
          </List>
        )}
      </Flex>
    </Flex>
  );
};
