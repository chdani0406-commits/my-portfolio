import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

/**
 * ContactSection 컴포넌트
 * Props: 없음
 */
function ContactSection() {
  return (
    <Box
      sx={{
        bgcolor: 'var(--color-bg-primary)',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth='md'>
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            variant='overline'
            sx={{
              color: 'var(--color-primary)',
              fontWeight: 600,
              letterSpacing: 3,
              fontSize: { xs: '0.7rem', md: '0.85rem' },
            }}
          >
            Contact Section
          </Typography>
          <Typography
            variant='h3'
            sx={{
              color: 'var(--color-text-primary)',
              fontSize: { xs: '1.6rem', md: '2.2rem' },
              fontWeight: 700,
              mt: 1,
              mb: 1,
            }}
          >
            여기는 Contact 섹션입니다.
          </Typography>
          <Typography
            variant='body2'
            sx={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}
          >
            연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                bgcolor: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                boxShadow: 'none',
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant='subtitle1'
                  sx={{ fontWeight: 700, color: 'var(--color-primary)', mb: 1 }}
                >
                  Email
                </Typography>
                <Typography
                  variant='body2'
                  sx={{ color: 'var(--color-text-muted)' }}
                >
                  이메일 주소가 들어갈 예정입니다.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                bgcolor: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                boxShadow: 'none',
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant='subtitle1'
                  sx={{ fontWeight: 700, color: 'var(--color-primary)', mb: 1 }}
                >
                  SNS
                </Typography>
                <Typography
                  variant='body2'
                  sx={{ color: 'var(--color-text-muted)' }}
                >
                  SNS 링크들이 들어갈 예정입니다.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                bgcolor: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                boxShadow: 'none',
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant='subtitle1'
                  sx={{ fontWeight: 700, color: 'var(--color-primary)', mb: 1 }}
                >
                  Message
                </Typography>
                <Typography
                  variant='body2'
                  sx={{ color: 'var(--color-text-muted)' }}
                >
                  간단한 메시지 폼이 들어갈 예정입니다.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactSection;
