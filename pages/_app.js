import React from 'react'
import { LoadingScreen } from '@/components'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/styles/theme.scss'
import '@/styles/all.min.css'
import { PortfolioProvider } from '@/context/PortFolioContext'


export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      {loading ? (
        <PortfolioProvider>
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
        </PortfolioProvider>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}

