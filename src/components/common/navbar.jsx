import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Projects', path: '/projects' },
];

/**
 * Navbar 컴포넌트
 * Props: 없음
 */
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentTab = navItems.findIndex((item) => item.path === location.pathname);

  const handleChange = (_, newValue) => {
    navigate(navItems[newValue].path);
  };

  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
        <Typography
          variant='h6'
          sx={{ fontWeight: 700, color: '#FFFFFF', letterSpacing: 1 }}
        >
          Portfolio
        </Typography>
        <Box>
          <Tabs
            value={currentTab === -1 ? 0 : currentTab}
            onChange={handleChange}
            textColor='inherit'
            TabIndicatorProps={{ style: { backgroundColor: '#C8A882' } }}
          >
            {navItems.map((item) => (
              <Tab
                key={item.path}
                label={item.label}
                sx={{
                  color: '#FFFFFF',
                  opacity: 0.8,
                  '&.Mui-selected': { opacity: 1, fontWeight: 600 },
                  fontSize: { xs: '0.75rem', md: '0.875rem' },
                  minWidth: { xs: 60, md: 90 },
                }}
              />
            ))}
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
