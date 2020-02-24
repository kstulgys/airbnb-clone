/** @jsx jsx */
import { jsx } from '@emotion/core'
import Head from 'next/head'
import { Box } from '@chakra-ui/core'

export default ({ children }) => (
  <>
    <Head>
      <link
        rel='stylesheet'
        href='https://unpkg.com/leaflet@1.6.0/dist/leaflet.css'
        integrity='sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=='
        crossorigin=''
      />
    </Head>
    <Box
      as='main'
      css={{
        scrollSnapType: 'y mandatory',
        '::-webkit-scrollbar': { width: 0 },
        MsOverflowStyle: 'none',
        scrollbarWidth: 'none',
        height: '100vh',
        overflowY: 'scroll'
      }}
    >
      {children}
    </Box>
  </>
)
