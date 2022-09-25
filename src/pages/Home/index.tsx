import React from 'react';
import ListPokemonTable from '../../components/ListPokemonTable';
import SearchInput from '../../components/SearchInput';
//import logo from '../assets/logo.svg';
import '../App.css';

function Home() {
  return (
    <div className='App w-full px-[4%] py-[24px]'>
      <div className='Heading text-left'>
        <h1 className='text-3xl font-bold text-basecolor'>Stok Pokémon</h1>
      </div>
      <div>
        <SearchInput/>
        <ListPokemonTable/>
      </div>
    </div>
  );
}

export default Home;
