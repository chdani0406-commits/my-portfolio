import Box from '@mui/material/Box';
import HeroSection from '../components/landing/hero-section.jsx';
import AboutSection from '../components/landing/about-section.jsx';
import SkillTreeSection from '../components/landing/skill-tree-section.jsx';
import ProjectsSection from '../components/landing/projects-section.jsx';
import ContactSection from '../components/landing/contact-section.jsx';

/**
 * HomePage 컴포넌트
 * Props: 없음
 */
function HomePage() {
  return (
    <Box sx={{ width: '100%' }}>
      <HeroSection />
      <AboutSection />
      <SkillTreeSection />
      <ProjectsSection />
      <ContactSection />
    </Box>
  );
}

export default HomePage;
