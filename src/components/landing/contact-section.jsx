import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import GuestbookForm from './guestbook-form.jsx';
import GuestbookList from './guestbook-list.jsx';

const CONTACT_EMAIL = 'chdani0406@gmail.com';

const SNS_LINKS = [
  { label: 'GitHub', icon: <GitHubIcon />, href: 'https://github.com/chdani0406' },
];

/**
 * ContactSection 컴포넌트
 * Props: 없음
 */
function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleGuestbookSubmit = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <Box
      sx={{
        bgcolor: 'var(--color-bg-secondary)',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth='md'>
        {/* 섹션 헤더 */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant='overline'
            sx={{
              color: 'var(--color-primary)',
              fontWeight: 600,
              letterSpacing: 3,
              fontSize: { xs: '0.7rem', md: '0.85rem' },
            }}
          >
            Contact
          </Typography>
          <Typography
            variant='h3'
            sx={{
              color: 'var(--color-text-primary)',
              fontSize: { xs: '1.7rem', md: '2.2rem' },
              fontWeight: 700,
              mt: 1,
              mb: 1.5,
            }}
          >
            함께 이야기해요 🌿
          </Typography>
          <Typography
            variant='body1'
            sx={{ color: 'var(--color-text-secondary)', fontSize: { xs: '0.95rem', md: '1rem' }, maxWidth: 480, mx: 'auto', lineHeight: 1.7 }}
          >
            언제든지 연락주세요. 새로운 인연과 아이디어를 항상 환영합니다.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* 연락처 카드 */}
          <Box
            sx={{
              bgcolor: 'var(--color-bg-card)',
              borderRadius: 4,
              p: { xs: 3, md: 4 },
              border: '1px solid var(--color-border)',
              boxShadow: '0 4px 20px rgba(107,124,92,0.08)',
              transition: 'all 0.25s ease',
              '&:hover': { boxShadow: '0 8px 32px rgba(107,124,92,0.14)' },
            }}
          >
            <Typography
              variant='h6'
              sx={{ fontWeight: 700, color: 'var(--color-text-primary)', mb: 3, fontSize: { xs: '1rem', md: '1.1rem' } }}
            >
              📬 연락처
            </Typography>

            {/* 이메일 */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: 2.5,
                bgcolor: 'var(--color-bg-primary)',
                borderRadius: 3,
                mb: 2.5,
                border: '1px solid var(--color-border-light)',
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  bgcolor: 'rgba(107,124,92,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <EmailIcon sx={{ color: 'var(--color-primary)', fontSize: '1.2rem' }} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant='caption' sx={{ color: 'var(--color-text-muted)', display: 'block', mb: 0.3 }}>
                  이메일
                </Typography>
                <Typography variant='body2' sx={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>
                  {CONTACT_EMAIL}
                </Typography>
              </Box>
              <Tooltip title={copied ? '복사됨!' : '이메일 복사'}>
                <IconButton
                  onClick={handleCopyEmail}
                  size='small'
                  sx={{
                    color: copied ? 'var(--color-primary)' : 'var(--color-text-muted)',
                    transition: 'all 0.2s ease',
                    '&:hover': { color: 'var(--color-primary)', bgcolor: 'rgba(107,124,92,0.08)' },
                  }}
                >
                  {copied ? <CheckIcon fontSize='small' /> : <ContentCopyIcon fontSize='small' />}
                </IconButton>
              </Tooltip>
            </Box>

            {/* SNS 아이콘 */}
            <Box>
              <Typography variant='caption' sx={{ color: 'var(--color-text-muted)', display: 'block', mb: 1.5, fontWeight: 500 }}>
                SNS 링크
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                {SNS_LINKS.map(({ label, icon, href }) => (
                  <Tooltip key={label} title={label}>
                    <IconButton
                      component='a'
                      href={href}
                      target='_blank'
                      rel='noopener noreferrer'
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        bgcolor: 'rgba(107,124,92,0.1)',
                        color: 'var(--color-primary)',
                        border: '1px solid var(--color-border)',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          bgcolor: 'var(--color-primary)',
                          color: '#fff',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 6px 16px rgba(107,124,92,0.3)',
                        },
                      }}
                    >
                      {icon}
                    </IconButton>
                  </Tooltip>
                ))}
              </Box>
            </Box>
          </Box>

          {/* 방명록 폼 */}
          <GuestbookForm onSubmitSuccess={handleGuestbookSubmit} />

          {/* 방명록 목록 */}
          <GuestbookList refreshKey={refreshKey} />
        </Box>
      </Container>
    </Box>
  );
}

export default ContactSection;
