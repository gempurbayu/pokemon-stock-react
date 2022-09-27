import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import ListPokemonTable from '../components/ListPokemonTable';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailPokemon from '../pages/DetailPokemon';
import renderer from 'react-test-renderer';

describe("PokemonList Component", () => {
  it("should render pokemon same pokemon name with search", async () =>{
    render(
      <Provider store={store}>
        <Router>
          <ListPokemonTable search='ivysaur'/>
        </Router>
      </Provider>
    )
    await waitFor(() => {
      screen.getByText("ivysaur")
    })
  })
})

describe("Pokemon Detail", () => {
    it("should render pokemon names when api responds", async () =>{
        const component = renderer.create(
            <Provider store={store}>
            <Router>
                <Routes>
                <Route path='/pokemon/4' element={<DetailPokemon/>}>
                </Route>
                </Routes>
            </Router>
            </Provider>
         );
          let tree = component.toJSON();
          expect(tree).toMatchSnapshot();

          tree = component.toJSON();
          expect(tree).toMatchInlineSnapshot(`null`);
   })
  })
  
