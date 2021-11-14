import {
  ErrorBoundary,
  ErrorComponent,
  AuthenticationError,
  AuthorizationError,
  useQueryErrorResetBoundary,
} from 'blitz'

import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
