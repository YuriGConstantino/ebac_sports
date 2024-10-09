import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    addCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((p) => p.id == produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { addCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
