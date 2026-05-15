import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { supabase } from '../../utils/supabase.js';

const EMOJI_OPTIONS = ['😊', '😍', '🎉', '👏', '💖', '🌱', '✨', '🔥'];
const AGE_GROUPS = ['10대', '20대', '30대', '40대 이상'];
const HOW_FOUND_OPTIONS = ['검색', 'SNS', '지인 추천', '기타'];

/**
 * GuestbookForm 컴포넌트
 *
 * Props:
 * @param {function} onSubmitSuccess - 제출 성공 시 호출되는 콜백 [Required]
 *
 * Example usage:
 * <GuestbookForm onSubmitSuccess={handleRefresh} />
 */
function GuestbookForm({ onSubmitSuccess }) {
  const [form, setForm] = useState({
    name: '',
    message: '',
    email: '',
    age_group: '',
    how_found: '',
    emoji: '😊',
    rating: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleEmojiSelect = (emoji) => {
    setForm((prev) => ({ ...prev, emoji }));
  };

  const handleRatingChange = (_, value) => {
    setForm((prev) => ({ ...prev, rating: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setError('이름과 메시지는 필수입니다.');
      return;
    }
    setLoading(true);
    setError('');

    const payload = {
      name: form.name.trim(),
      message: form.message.trim(),
      emoji: form.emoji,
      ...(form.email.trim() && { email: form.email.trim() }),
      ...(form.age_group && { age_group: form.age_group }),
      ...(form.how_found && { how_found: form.how_found }),
      ...(form.rating > 0 && { rating: form.rating }),
    };

    const { error: supabaseError } = await supabase
      .from('portfolio_guestbook')
      .insert([payload]);

    setLoading(false);
    if (supabaseError) {
      setError('저장 중 오류가 발생했습니다. 다시 시도해주세요.');
    } else {
      setForm({ name: '', message: '', email: '', age_group: '', how_found: '', emoji: '😊', rating: 0 });
      onSubmitSuccess?.();
    }
  };

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: 3,
      bgcolor: 'var(--color-bg-primary)',
      '& fieldset': { borderColor: 'var(--color-border)' },
      '&:hover fieldset': { borderColor: 'var(--color-primary)' },
      '&.Mui-focused fieldset': { borderColor: 'var(--color-primary)' },
    },
    '& .MuiInputLabel-root.Mui-focused': { color: 'var(--color-primary)' },
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{
        bgcolor: 'var(--color-bg-card)',
        borderRadius: 4,
        p: { xs: 3, md: 4 },
        border: '1px solid var(--color-border)',
        boxShadow: '0 4px 20px rgba(107,124,92,0.08)',
      }}
    >
      <Typography
        variant='h6'
        sx={{ fontWeight: 700, color: 'var(--color-text-primary)', mb: 3, fontSize: { xs: '1rem', md: '1.15rem' } }}
      >
        ✍️ 방명록 남기기
      </Typography>

      {error && (
        <Alert severity='error' sx={{ mb: 2, borderRadius: 2 }}>
          {error}
        </Alert>
      )}

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
          <TextField
            label='이름 *'
            value={form.name}
            onChange={handleChange('name')}
            fullWidth
            size='small'
            sx={inputSx}
          />
          <TextField
            label='이메일 (비공개)'
            value={form.email}
            onChange={handleChange('email')}
            fullWidth
            size='small'
            type='email'
            sx={inputSx}
          />
        </Box>

        <TextField
          label='메시지 *'
          value={form.message}
          onChange={handleChange('message')}
          fullWidth
          multiline
          rows={3}
          sx={inputSx}
        />

        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
          <TextField
            select
            label='나이대'
            value={form.age_group}
            onChange={handleChange('age_group')}
            fullWidth
            size='small'
            sx={inputSx}
          >
            <MenuItem value=''>선택 안 함</MenuItem>
            {AGE_GROUPS.map((g) => (
              <MenuItem key={g} value={g}>{g}</MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label='어떻게 알게 되었나요?'
            value={form.how_found}
            onChange={handleChange('how_found')}
            fullWidth
            size='small'
            sx={inputSx}
          >
            <MenuItem value=''>선택 안 함</MenuItem>
            {HOW_FOUND_OPTIONS.map((o) => (
              <MenuItem key={o} value={o}>{o}</MenuItem>
            ))}
          </TextField>
        </Box>

        <Box>
          <Typography variant='body2' sx={{ color: 'var(--color-text-secondary)', mb: 1, fontWeight: 500 }}>
            이모지 선택
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {EMOJI_OPTIONS.map((emoji) => (
              <Chip
                key={emoji}
                label={emoji}
                onClick={() => handleEmojiSelect(emoji)}
                variant={form.emoji === emoji ? 'filled' : 'outlined'}
                sx={{
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  borderRadius: '50px',
                  borderColor: form.emoji === emoji ? 'var(--color-primary)' : 'var(--color-border)',
                  bgcolor: form.emoji === emoji ? 'rgba(107,124,92,0.12)' : 'transparent',
                  transition: 'all 0.2s ease',
                  '&:hover': { borderColor: 'var(--color-primary)', bgcolor: 'rgba(107,124,92,0.08)' },
                }}
              />
            ))}
          </Box>
        </Box>

        <Box>
          <Typography variant='body2' sx={{ color: 'var(--color-text-secondary)', mb: 0.5, fontWeight: 500 }}>
            별점 평가
          </Typography>
          <Rating
            value={form.rating}
            onChange={handleRatingChange}
            sx={{ '& .MuiRating-iconFilled': { color: 'var(--color-secondary)' }, '& .MuiRating-iconHover': { color: 'var(--color-primary)' } }}
          />
        </Box>

        <Button
          type='submit'
          variant='contained'
          disabled={loading}
          sx={{
            bgcolor: 'var(--color-primary)',
            color: '#fff',
            borderRadius: 3,
            py: 1.2,
            fontWeight: 600,
            fontSize: '0.95rem',
            transition: 'all 0.25s ease',
            '&:hover': { bgcolor: 'var(--color-primary-dark)', transform: 'translateY(-1px)', boxShadow: '0 4px 12px rgba(107,124,92,0.3)' },
          }}
        >
          {loading ? <CircularProgress size={22} sx={{ color: '#fff' }} /> : '방명록 남기기 🌿'}
        </Button>
      </Box>
    </Box>
  );
}

export default GuestbookForm;
