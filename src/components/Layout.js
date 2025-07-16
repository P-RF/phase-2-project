import { Link, Outlet } from "react-router-dom";

// header with link that takes user to main page -- consistent navigation for all pages
function Layout() {
  return (
    <div className="app-header">
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