import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from './App'

interface FavoritosState {
  lista: Produto[]
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: [],
  lista: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      console.log('Favoritar Action Dispatched:', action.payload)
      const index = state.itens.findIndex((p) => p.id === action.payload.id)
      if (index === -1) {
        state.itens.push(action.payload)
      } else {
        state.itens.splice(index, 1)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
