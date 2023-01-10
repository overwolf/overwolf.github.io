import React from 'react';
import NavbarItem from '@theme-original/NavbarItem';

export default function NavbarItemWrapper(props) {
  // console.log(props);
  return (
    <div className='i-did-a-thing'>
      <NavbarItem {...props} />
    </div>
  );
}
