import React, { useState } from 'react';
import ListPokemonTable from '../../components/ListPokemonTable';
//import logo from '../assets/logo.svg';
import '../App.css';
import SearchIcon from '../../assets/icons/search.svg'

function Home() {

  let [search, setSearch] = useState('');
  return (
    <div className='App w-full px-[4%] py-[24px]'>
      <div className='Heading text-left'>
        <h1 className='text-3xl font-bold text-basecolor'>Stok Pokémon</h1>
      </div>
      <div>
      <div className='pt-12 text-left'>
      <img src={SearchIcon} alt='icon' className='absolute pt-1.5 pl-2'/>
          <input className="shadow appearance-none border rounded w-full py-2 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
