'use client';
import * as React from 'react';
import { PageContainer } from '@toolpad/core/PageContainer';
import Box from '@mui/material/Box';

export default function MapsPage() {
  return (
    <PageContainer>
      <Box sx={{ height: 'calc(100vh - 200px)', width: '100%' }}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d49697.60694885879!2d121.30425943857537!3d-3.8681813879127227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1752484344033!5m2!1sid!2sid"
          style={{ 
            width: '100%', 
            height: '100%', 
            border: 0 
          }}
          allowFullScreen
          loading="lazy"
        />
      </Box>
    </PageContainer>
  );
}
