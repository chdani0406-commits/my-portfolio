import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinearProgress from '@mui/material/LinearProgress';

const placeholderSkills = [
  { name: 'Skill A', level: 80 },
  { name: 'Skill B', level: 65 },
  { name: 'Skill C', level: 90 },
  { name: 'Skill D', level: 50 },
];

/**
 * SkillTreeSection 컴포넌트
 * Props: 없음
 */
function SkillTreeSection() {
  return (
    <Box
      sx={{
        bgcolor: 'var(--color-bg-primary)',
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
            Skill Tree Section
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
            여기는 Skill Tree 섹션입니다.
          </Typography>
          <Typography
            variant='body2'
            sx={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}
          >
            기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {placeholderSkills.map((skill) => (
            <Grid key={skill.name} size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  bgcolor: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'none',
                  borderRadius: 2,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}
                  >
                    <Typography
                      variant='body1'
                      sx={{ fontWeight: 600, color: 'var(--color-text-primary)' }}
                    >
                      {skill.name}
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{ color: 'var(--color-secondary)', fontWeight: 600 }}
                    >
                      {skill.level}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant='determinate'
                    value={skill.level}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      bgcolor: 'var(--color-border)',
                      '& .MuiLinearProgress-bar': {
                        bgcolor: 'var(--color-primary)',
                        borderRadius: 4,
                      },
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default SkillTreeSection;
