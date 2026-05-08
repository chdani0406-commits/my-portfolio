import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

/**
 * HeroSection 컴포넌트
 * Props: 없음
 */
function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: 'var(--color-bg-primary)',
        py: { xs: 10, md: 16 },
        borderBottom: '1px solid var(--color-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: { xs: '60vh', md: '70vh' },
      }}
    >
      <Container maxWidth='md'>
        <Box
          sx={{
            textAlign: 'center',
            px: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant='overline'
            sx={{
              color: 'var(--color-primary)',
              fontWeight: 600,
              letterSpacing: 3,
              fontSize: { xs: '0.7rem', md: '0.85rem' },
            }}
          >
            Hero Section
          </Typography>
          <Typography
            variant='h2'
            sx={{
              color: 'var(--color-text-primary)',
              fontSize: { xs: '2rem', md: '3.5rem' },
              fontWeight: 700,
              mt: 1,
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            여기는 Hero 섹션입니다.
          </Typography>
          <Typography
            variant='body1'
            sx={{
              color: 'var(--color-text-secondary)',
              fontSize: { xs: '1rem', md: '1.2rem' },
              lineHeight: 1.7,
            }}
          >
            메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection;
