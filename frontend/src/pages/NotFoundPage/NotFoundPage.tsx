import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <>
      <h1>Page not found</h1>
      <p>
        <Link className="text-primary underline" to="/">Back to home</Link>
      </p>
    </>
  );
}
