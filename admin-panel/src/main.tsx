import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux'
import WebRoutes from './routes'
import { Toast } from './components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <Provider store={store}>
        <WebRoutes />
        <Toast />
    </Provider>
  </React.StrictMode>,
)
