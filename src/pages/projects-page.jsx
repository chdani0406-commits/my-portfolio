import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

/**
 * ProjectsPage 컴포넌트
 * Props: 없음
 */
function ProjectsPage() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '80vh',
        bgcolor: 'var(--color-bg-secondary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth='md' sx={{ textAlign: 'center' }}>
        <Typography
          variant='overline'
          sx={{
            color: 'var(--color-primary)',
            fontWeight: 600,
            letterSpacing: 3,
            fontSize: { xs: '0.7rem', md: '0.85rem' },
          }}
        >
          Projects Page
        </Typography>
        <Typography
          variant='h2'
          sx={{
            color: 'var(--color-text-primary)',
            fontSize: { xs: '1.8rem', md: '2.8rem' },
            fontWeight: 700,
            mt: 1,
            mb: 3,
          }}
        >
          Projects 페이지가 개발될 공간입니다.
        </Typography>
        <Typography
          variant='body1'
          sx={{
            color: 'var(--color-text-secondary)',
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.8,
          }}
        >
          포트폴리오 작품들이 들어갈 예정입니다.
        </Typography>
      </Container>
    </Box>
  );
}

export default ProjectsPage;
