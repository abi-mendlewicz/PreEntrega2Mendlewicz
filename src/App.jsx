import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NoMatch from './components/NoMatch'

function App() {
  return (
    <>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App