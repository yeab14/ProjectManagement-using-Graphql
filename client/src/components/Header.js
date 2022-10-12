import logo from "../assets/graphq-logo.png";

const Header = () => {
  return (
    <header className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} className="mr-2" alt="" />
            <div>Project Client</div>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
