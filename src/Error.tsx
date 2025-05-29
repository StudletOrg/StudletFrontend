import { Link } from 'react-router-dom';

/**
 * Renders a 404 error page with a link to navigate back to the home page.
 * 
 * This component displays a message indicating that the requested page
 * could not be found, along with a navigation link for the user to 
 * return to the home page.
 * 
 * @returns A JSX element representing the 404 error page.
 */
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
