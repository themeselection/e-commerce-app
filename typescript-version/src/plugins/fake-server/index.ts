import { setupWorker } from 'msw/browser'

import { handlerEcommerce } from './handlers/ecommerce'

const worker = setupWorker(...handlerEcommerce)

export default function () {
  const workerUrl = `${import.meta.env.BASE_URL ?? '/'}mockServiceWorker.js`

  worker.start({
    serviceWorker: {
      url: workerUrl,
    },
    onUnhandledRequest: 'bypass',
  })
}
