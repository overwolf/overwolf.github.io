import React from 'react';
import NavbarItem from '@theme-original/NavbarItem';

export default function NavbarItemWrapper(props) {
  // console.log(props);
  return (
    <NavbarItem data-text={props.label} {...props} />
  );
}
