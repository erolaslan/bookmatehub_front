import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LanguageSelector from '../../components/LanguageSelector/LanguageSelector';

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        position: 'relative',
      }}
    >
      <Box sx={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 2 }}>
        <LanguageSelector />
        <Link onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
          {t('back_to_home')}
        </Link>
      </Box>

      <Box sx={{ textAlign: 'center', margin: '0 auto', maxWidth: '800px', padding: '20px' }}>
        <header>
          <h1>{t('privacy_policy.title')}</h1>
          <p>{t('privacy_policy.last_updated')}</p>
        </header>

        <main>
          <section>
            <h2>{t('privacy_policy.introduction.title')}</h2>
            <p>{t('privacy_policy.introduction.content')}</p>
          </section>

          <section>
            <h2>{t('privacy_policy.information_collection.title')}</h2>
            <p>{t('privacy_policy.information_collection.content')}</p>
          </section>

          <section>
            <h2>{t('privacy_policy.information_usage.title')}</h2>
            <p>{t('privacy_policy.information_usage.content')}</p>
          </section>

          <section>
            <h2>{t('privacy_policy.rights.title')}</h2>
            <p>{t('privacy_policy.rights.content')}</p>
          </section>

          <section>
            <h2>{t('privacy_policy.contact.title')}</h2>
            <p>{t('privacy_policy.contact.content')}</p>
          </section>
        </main>

        <footer>
          <p>{t('privacy_policy.footer')}</p>
        </footer>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
