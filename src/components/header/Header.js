import "./Header.css";

function Header() {
  return (
    <div className="container">
           <div className="navbar">
            <a href="./index.html"><i class="fa fa-home" aria-hidden="true"></i></a>
            <a href="#">KỸ NĂNG</a>
            <a href="./sothich.html">SỞ THÍCH</a>
            <a href="#contact">ĐỊNH HƯỚNG</a>
        </div>
     </div>
  );
}

export default Header;
