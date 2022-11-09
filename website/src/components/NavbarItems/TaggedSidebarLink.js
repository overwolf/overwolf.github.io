import React from 'react';
import DocNavbarItem from '@theme/NavbarItem/DocNavbarItem';
import NavbarItem from '../../theme/NavbarItem';

export default function TaggedSidebarLink(props) {
  return (
    <>
    {console.log(props)}
      <NavbarItemComponent {...props} />
    </>
  );
}