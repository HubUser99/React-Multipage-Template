import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return(
      <div className='Menu'>
        <a href='/'>Home</a>
        <a href='/about/'>About</a>
        <a href='/contacts/'>Contacts</a>
      </div>
    );
  }
}

export default Menu;
