import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Rating from '@mui/material/Rating';
import { supabase } from '../../utils/supabase.js';

/**
 * GuestbookList 컴포넌트
 *
 * Props:
 * @param {number} refreshKey - 값이 바뀔 때 목록을 새로고침 [Optional, 기본값: 0]
 *
 * Example usage:
 * <GuestbookList refreshKey={refreshKey} />
 */
function GuestbookList({ refreshKey = 0 }) {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntries = async () => {
      setLoading(true);
      if (!supabase) {
        setLoading(false);
        return;
      }
      const { data, error } = await supabase
        .from('portfolio_guestbook_public')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20);

      if (!error && data) {
        setEntries(data);
      }
      setLoading(false);
    };

    fetchEntries();
  }, [refreshKey]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <CircularProgress size={32} sx={{ color: 'var(--color-primary)' }} />
      </Box>
    );
  }

  if (entries.length === 0) {
    return (
      <Box
        sx={{
          textAlign: 'center',
          py: 5,
          bgcolor: 'var(--color-bg-card)',
          borderRadius: 4,
          border: '1px dashed var(--color-border)',
        }}
      >
        <Typography sx={{ fontSize: '2.5rem', mb: 1 }}>🌱</Typography>
        <Typography variant='body2' sx={{ color: 'var(--color-text-muted)' }}>
          첫 번째 방명록을 남겨보세요!
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant='h6' sx={{ fontWeight: 700, color: 'var(--color-text-primary)', fontSize: { xs: '1rem', md: '1.1rem' } }}>
        💬 방명록 ({entries.length})
      </Typography>
      {entries.map((entry) => (
        <Box
          key={entry.id}
          sx={{
            bgcolor: 'var(--color-bg-card)',
            borderRadius: 4,
            p: { xs: 2.5, md: 3 },
            border: '1px solid var(--color-border)',
            boxShadow: '0 2px 12px rgba(107,124,92,0.06)',
            transition: 'all 0.25s ease',
            '&:hover': {
              boxShadow: '0 6px 24px rgba(107,124,92,0.12)',
              transform: 'translateY(-2px)',
            },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                bgcolor: 'rgba(107,124,92,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                flexShrink: 0,
              }}
            >
              {entry.emoji || '😊'}
            </Box>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                <Typography variant='subtitle2' sx={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  {entry.name}
                </Typography>
                {entry.age_group && (
                  <Typography
                    variant='caption'
                    sx={{
                      bgcolor: 'rgba(200,168,130,0.15)',
                      color: 'var(--color-secondary)',
                      px: 1,
                      py: 0.2,
                      borderRadius: 10,
                      fontWeight: 500,
                    }}
                  >
                    {entry.age_group}
                  </Typography>
                )}
              </Box>
              <Typography variant='caption' sx={{ color: 'var(--color-text-muted)' }}>
                {formatDate(entry.created_at)}
                {entry.how_found && ` · ${entry.how_found}을(를) 통해`}
              </Typography>
            </Box>
            {entry.rating > 0 && (
              <Rating value={entry.rating} readOnly size='small' sx={{ '& .MuiRating-iconFilled': { color: 'var(--color-secondary)' } }} />
            )}
          </Box>
          <Typography variant='body2' sx={{ color: 'var(--color-text-secondary)', lineHeight: 1.7, pl: 0.5 }}>
            {entry.message}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default GuestbookList;
