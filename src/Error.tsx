import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>404</h2>
        <Link className='App-link' to="/">Back to Home</Link>
      </header>
    </div>
  );
}

export default Error;
