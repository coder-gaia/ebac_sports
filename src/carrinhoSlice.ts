import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Produto } from './App'

interface CarrinhoState {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produtoExistente = state.itens.find(
        (item) => item.id === action.payload.id
      )
      if (!produtoExistente) {
        state.itens.push(action.payload)
      } else {
        alert('Produto já está no carrinho')
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions
export const selectCarrinho = (state: RootState) => state.carrinho
export default carrinhoSlice.reducer
