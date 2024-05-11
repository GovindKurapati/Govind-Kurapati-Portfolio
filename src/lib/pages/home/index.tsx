import { Flex } from '@chakra-ui/react';

import CertificationsSection from './components/CertificationsSection';
import ExperienceSection from './components/ExperienceSection';
import HeroPage from './components/HeroPage';
import SkillsSection from './components/SkillsSection';

const Home = () => {
  return (
    <Flex gap={1} width="100%" direction="column" scrollBehavior="smooth">
      <HeroPage />
      <ExperienceSection />
      <SkillsSection />
      <CertificationsSection />
    </Flex>
  );
};

export default Home;
