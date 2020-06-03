/** @jsx jsx */
import { jsx } from '@emotion/core';
function Header(): JSX.Element {
  return (
    <nav css={{ background: '#026aa7' }}>
      <div
        css={{
          padding: '4px',
          color: '#fff',
          fontSize: '2rem',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <em css={{ width: '30%' }}>Trello - lite</em>
        <span
          css={{
            fontSize: '11pt',
            padding: 10,
            textDecoration: 'none',
          }}
        >
          Source code available on{' '}
          <a
            href="https://github.com/tuf75588/react-trello-clone"
            css={{
              '&:hover': { textDecoration: 'underline', color: '#f2f2f2' },
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            GitHub
          </a>
        </span>
      </div>
    </nav>
  );
}

export default Header;
