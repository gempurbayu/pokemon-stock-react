import React, { useState } from 'react';
import ListPokemonTable from '../../components/ListPokemonTable';
//import logo from '../assets/logo.svg';
import '../App.css';

function Home() {

  let [search, setSearch] = useState('');
  return (
    <div className='App w-full px-[4%] py-[24px]'>
      <div className='Heading text-left'>
        <h1 className='text-3xl font-bold text-basecolor'>Stok Pokémon</h1>
      </div>
      <div>
      <div className='pt-12 text-left'>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="search" 
                  type='text'
                  name='search' 
                  placeholder='Cari Pokemon'
                  onChange={(e) => setSearch(e.target.value)}>
          </input>
      </div>
        <ListPokemonTable search={search}/>
      </div>
    </div>
  );
}

export default Home;
