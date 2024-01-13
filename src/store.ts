import { configureStore } from '@reduxjs/toolkit'
import produtosReducer from './produtoSlice'
import carrinhoReducer from './carrinhoSlice'
import favoritosReducer from './favoritoSlice'

const store = configureStore({
  reducer: {
    produtos: produtosReducer,
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
