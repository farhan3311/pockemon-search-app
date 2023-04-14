import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import * as Pages from './Pages'


function App() {
  return <>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Pages.HomePage />} />
        <Route path="/pokemon/:name" element={<Pages.PokemonPage />} />
        <Route path="/search" element={<Pages.SearchPage />} />
        <Route path="*" element={<Pages.NotFoundPage />} />
      </Route>
    </Routes>
  </>
}

export default App;