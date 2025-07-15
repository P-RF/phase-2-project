import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <Link className="main-link" to="/">
          <h1 className="header">LifeTask</h1>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;