import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="flex items-center justify-between bg-gray-800 p-4">
        <h1 className="text-3xl text-white">Campus Corner</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/books" className="text-white hover:text-gray-300">Books</Link>
          </li>
          <li>
            <Link to="/pyq" className="text-white hover:text-gray-300">PYQs</Link>
          </li>
          <li>
            <Link to="/notes" className="text-white hover:text-gray-300">Notes</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
          </li>
          <li>
            <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
              Login
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;
