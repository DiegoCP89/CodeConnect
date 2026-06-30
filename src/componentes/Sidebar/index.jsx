import Logo from "./assets/Logo.svg";
import Feed from "./assets/feed.svg";

export default function Sidebar() {
  return (
    <aside>
      <img src={Logo} alt="Logo do CodeConnect" />
      <nav>
        <ul>
          <li>
            <a href="#"> Publicar </a>
          </li>
          <li>
            <a href="#">
              <img src={Feed} alt="" />
              <span> Feed </span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
