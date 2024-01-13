import { useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store, { RootState } from './store'
import { carregarProdutos } from './produtoSlice'
import { AppDispatch } from './store'
import { favoritar } from './favoritoSlice'
import { adicionarAoCarrinho } from './carrinhoSlice'

import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(carregarProdutos())
  }, [dispatch])

  const produtos = useSelector((state: RootState) => state.produtos.lista)
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)
  const carrinho = useSelector((state: RootState) => state.carrinho.itens)

  const handleAdicionarAoCarrinho = (produto: Produto) => {
    dispatch(adicionarAoCarrinho(produto))
  }

  const handleFavoritar = (produto: Produto) => {
    dispatch(favoritar(produto))
    console.log('Chamada para handleFavoritar com produto:', produto)
  }

  return (
    <Provider store={store}>
      <>
        <GlobalStyle />
        <div className="container">
          <Header itensNoCarrinho={carrinho} favoritos={favoritos} />
          <Produtos
            produtos={produtos}
            favoritos={favoritos}
            adicionarAoCarrinho={handleAdicionarAoCarrinho}
            favoritar={handleFavoritar}
          />
        </div>
      </>
    </Provider>
  )
}

export default App
