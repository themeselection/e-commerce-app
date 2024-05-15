import { HttpResponse, http } from 'msw'
import { db } from './db'

export const handlerEcommerce = [
  http.get('/api/ecommerce/products', () => {
    const products = db.products

    return HttpResponse.json(products, { status: 200 })
  }),

  http.get('/api/ecommerce/products/:id', ({ params }) => {
    const id = Number(params.id)

    const product = db.products.find(item => item.id === id)

    if (!product)
      return HttpResponse.error()

    return HttpResponse.json(product, { status: 200 })
  }),
]
