import React from 'react'; 
import s from './header.module.css'

function Search() {
  return (<div className={s.search_box}>
    <input type="text" className={s.search_input} placeholder=" Search" />
      <button className={s.search_btn}> Go </button>
    </div>);
}

export default Search;