/** @jsx jsx */
import { jsx } from '@emotion/core';
function Header() {
  return (
    <div
      css={{
        heigth: '32px',
        padding: '4px',
        background: '#026aa7',
        color: '#fff',
        textAlign: 'center',
        fontSize: '2rem',
      }}
    >
      <em>Trello - lite</em>
    </div>
  );
}

export default Header;
