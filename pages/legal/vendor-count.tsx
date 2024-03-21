import React, { useEffect, useState } from 'react';

function VendorCount() {
  const [vendorCount, setVendorCount] = useState('Loading...');
  useEffect(() => {
    async function getStatus() {
      await fetch('https://content.overwolf.com/cmp/v3/vendor-list.json')
        .then((response) => response.json())
        .then((data) =>
          setVendorCount(Object.values(data.vendors as any).length.toString()),
        )
        .catch(() =>
          setVendorCount(
            'Could not load vendors list. Please refresh the page.',
          ),
        );
    }

    getStatus();
  }, []);

  return (
    <span style={{ color: 'white', fontWeight: 'bold' }}>{vendorCount}</span>
  );
}

export default VendorCount;
