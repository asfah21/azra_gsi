'use client'

import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Home Page!</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => router.push('/dashboard')}
        sx={{ mt: 2 }}
      >
        Masuk ke Dashboard
      </Button>
    </div>
  )
}
