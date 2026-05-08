import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

/**
 * AboutPage 컴포넌트
 * Props: 없음
 */
function AboutPage() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '80vh',
        bgcolor: 'var(--color-bg-primary)',
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
          About Me Page
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
          About Me 페이지가 개발될 공간입니다.
        </Typography>
        <Typography
          variant='body1'
          sx={{
            color: 'var(--color-text-secondary)',
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.8,
          }}
        >
          상세한 자기소개가 들어갈 예정입니다.
        </Typography>
      </Container>
    </Box>
  );
}

export default AboutPage;
