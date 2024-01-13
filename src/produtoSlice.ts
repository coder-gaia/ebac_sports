import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const carregarProdutos = createAsyncThunk(
  'produtos/carregarProdutos',
  async () => {
    const response = await fetch(
      'https://fake-api-tau.vercel.app/api/ebac_sports'
    )
    const produtos = await response.json()
    return produtos
  }
)

const produtosSlice = createSlice({
  name: 'produtos',
  initialState: {
    lista: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(carregarProdutos.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(carregarProdutos.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.lista = action.payload
    })
    builder.addCase(carregarProdutos.rejected, (state) => {
      state.status = 'failed'
    })
  }
})

export default produtosSlice.reducer
