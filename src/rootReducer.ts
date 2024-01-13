import { combineReducers } from '@reduxjs/toolkit'
import produtosReducer from './produtoSlice'
import carrinhoReducer from './carrinhoSlice'
import favoritosReducer from './favoritoSlice'

const rootReducer = combineReducers({
  produtos: produtosReducer,
  carrinho: carrinhoReducer,
  favoritos: favoritosReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
