
const Nav = () => {
  return (
    <div>
      <nav className="flex align-middle justify-around p-2 text-xl bg-black text-white">
        <div className="logo">Moh</div>
        <ul className="flex align-middle justify-between list-none gap-4">
          <li><a href="/">home</a></li>
          <li><a href="/about">about</a></li>
          <li><a href="/login">login</a></li>
        </ul>
      </nav>
      {/* <Outlet /> */}
    </div>
    
  );
};

export default Nav;
