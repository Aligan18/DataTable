import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from '@/app/store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import './index.css'


const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Provider store={store}>
      <PersistGate loading={<h1>loading</h1>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>

  </React.StrictMode>,
)
