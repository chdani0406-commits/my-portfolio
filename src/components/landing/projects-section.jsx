import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const placeholderProjects = [
  { title: 'Project 1' },
  { title: 'Project 2' },
  { title: 'Project 3' },
];

/**
 * ProjectsSection 컴포넌트
 * Props: 없음
 */
function ProjectsSection() {
  return (
    <Box
      sx={{
        bgcolor: 'var(--color-bg-secondary)',
        py: { xs: 8, md: 12 },
        borderBottom: '1px solid var(--color-border)',
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
            Projects Section
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
            여기는 Projects 섹션입니다.
          </Typography>
          <Typography
            variant='body2'
            sx={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}
          >
            대표작 썸네일 3-4개와 &apos;더 보기&apos; 버튼이 들어갈 예정입니다.
          </Typography>
        </Box>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {placeholderProjects.map((project) => (
            <Grid key={project.title} size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  bgcolor: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'none',
                  borderRadius: 2,
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    height: 140,
                    bgcolor: 'var(--color-bg-secondary)',
                    borderBottom: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant='body2'
                    sx={{ color: 'var(--color-text-muted)' }}
                  >
                    썸네일 이미지
                  </Typography>
                </Box>
                <CardContent sx={{ p: 2.5 }}>
                  <Typography
                    variant='h6'
                    sx={{
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      fontSize: '1rem',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: 'var(--color-text-muted)', mt: 0.5 }}
                  >
                    프로젝트 설명이 들어갈 예정입니다.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant='outlined'
            sx={{
              borderColor: 'var(--color-primary)',
              color: 'var(--color-primary)',
              px: 5,
              py: 1.5,
              fontWeight: 600,
              '&:hover': {
                bgcolor: 'var(--color-primary)',
                color: '#FFFFFF',
                borderColor: 'var(--color-primary)',
              },
            }}
          >
            더 보기
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ProjectsSection;
