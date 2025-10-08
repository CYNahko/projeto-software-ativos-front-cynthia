import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'


createRoot(document.getElementById('root')).render(
  <Auth0Provider
      domain="dev-1m7en8ylkhnx1x7r.us.auth0.com"
      clientId="7g52PDXw0ben7KUJxMadFROCRrSQJCN4"
      authorizationParams={{
        audience: "https://dev-1m7en8ylkhnx1x7r.us.auth0.com/api/v2/",
        redirect_uri: window.location.origin
      }}
    >
    <App />
  </Auth0Provider>,
)
