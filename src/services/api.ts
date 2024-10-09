import { Produto } from '../App'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/ebac_sports'
  }),
  endpoints: (build) => ({
    getProduto: build.query<Produto[], void>({
      query: () => ''
    })
  })
})

export const { useGetProdutoQuery } = api

export default api
