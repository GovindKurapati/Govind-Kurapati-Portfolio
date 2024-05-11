import { Flex, Heading } from '@chakra-ui/react';

import { ExperienceStep } from './ExperienceStep';

type Experience = {
  title: string;
  organisation: string;
  timePeriod: string;
  activites: string[];
};

const ExperienceSection = () => {
  const EXPERIENCE_DATA: Experience[] = [
    {
      title: 'Senior Software Engineer',
      organisation: 'Presidio',
      timePeriod: 'Sep 2023 - Present',
      activites: [
        'Built and refactored several UI components using VueJs and ReactJs.',
        'Designed multiple REST APIs using NodeJS and .NET Core.',
        'Leveraged AWS as a cloud provider to deploy and manage apps.',
        'Created and managed SQL scripts for a few processes that involved updating/removing data from SQL server DB.',
        'Developed an automation script with Puppeteer, enhancing the developer workflow thereby significantly reducing time spent on repetitive tasks by 75%.',
      ],
    },
    {
      title: 'Software Engineer',
      organisation: 'Presidio',
      timePeriod: 'JUL 2021 - sep 2023',
      activites: [
        'Used Vue and NextJS as frontend technologies to develop the user interface by following the coding standards and the UX design templates.',
        'Developed backend APIs with NodeJS using the serverless framework.',
        'Utilised DynamoDB and RDS as the database and used its SDK for making operations to manipulate the data persisted on DB.',
        'Worked with a few AWS services like DynamoDB, SES, Lambda, S3 and Cloudwatch.',
        'Used Material, Bootstrap and TailwindCSS as UI libraries for creating reusable frontend components.',
      ],
    },
    {
      title: 'Software Engineer Trainee',
      organisation: 'Presidio',
      timePeriod: 'SEP 2020 - JUN 2021',
      activites: [
        'Developed a Hiring Management System to streamline candidate management, meeting scheduling, and feedback processes for the HR department.',
        'Engaged in the entire product life cycle, spanning from the initial gathering of requirements to the final stages of system testing and deployment.',
        'Involved in both frontend and backend development.',
        'Upheld coding standards and confirmed functionality through the inclusion of test cases.',
      ],
    },
  ];
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      w="100%"
      id="work"
    >
      <Heading fontSize="4xl" fontWeight="extrabold">
        Work Experience
      </Heading>

      {EXPERIENCE_DATA.length > 0 && (
        <Flex
          direction="column"
          my="60px"
          alignItems="center"
          w={{ sm: '90%', lg: '50%' }}
        >
          {EXPERIENCE_DATA.map((e, index) => {
            return (
              <ExperienceStep
                title={e.title}
                organisation={e.organisation}
                timePeriod={e.timePeriod}
                activites={e.activites}
                stepCount={index + 1}
                lastStep={index + 1 === EXPERIENCE_DATA.length}
                key={e.title + e.organisation}
              />
            );
          })}
        </Flex>
      )}
    </Flex>
  );
};

export default ExperienceSection;
