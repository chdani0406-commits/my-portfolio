import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/**
 * AboutSection 컴포넌트
 * Props: 없음
 */
function AboutSection() {
  return (
    <Box
      sx={{
        bgcolor: 'var(--color-bg-secondary)',
        py: { xs: 8, md: 12 },
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <Container maxWidth='md'>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant='overline'
            sx={{
              color: 'var(--color-primary)',
              fontWeight: 600,
              letterSpacing: 3,
              fontSize: { xs: '0.7rem', md: '0.85rem' },
            }}
          >
            About Me Section
          </Typography>
          <Typography
            variant='h3'
            sx={{
              color: 'var(--color-text-primary)',
              fontSize: { xs: '1.6rem', md: '2.2rem' },
              fontWeight: 700,
              mt: 1,
            }}
          >
            여기는 About Me 섹션입니다.
          </Typography>
        </Box>
        <Card
          sx={{
            bgcolor: 'var(--color-bg-card)',
            border: '1px solid var(--color-border)',
            boxShadow: 'none',
            borderRadius: 2,
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 5 }, textAlign: 'center' }}>
            <Typography
              variant='body1'
              sx={{
                color: 'var(--color-text-secondary)',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              간단한 자기소개와 &apos;더 알아보기&apos; 버튼이 들어갈 예정입니다.
            </Typography>
            <Button
              variant='contained'
              sx={{
                bgcolor: 'var(--color-button-primary)',
                color: '#FFFFFF',
                px: 4,
                py: 1.5,
                borderRadius: 1,
                fontWeight: 600,
                '&:hover': { bgcolor: 'var(--color-button-hover)' },
              }}
            >
              더 알아보기
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default AboutSection;
