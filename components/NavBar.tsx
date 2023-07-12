import Link from "next/link";
//Para poder importar un archivo de css es necesario crearlo como un module
import style from "./NavBar.module.css";
import { ActiveLink } from "./ActiveLink";
const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];
export const NavBar = () => {
  return (
    //   <nav className={style.menu}>
    //.menu-container no es un nombre valido en js
    //para ello react lo convierte en una propiedad computada, va a buscar del objeto style la propiedad computada menu-container
    <nav className={style["menu-container"]}>
      {/* el map => barre cada uno de los elementos del arreglo y debe de retornar un valor */}
      {menuItems.map(({ text, href }) => (
        <ActiveLink key={href} text={text} href={href} />
      ))}
      {/* <ActiveLink text="Home" href="/" />
      <ActiveLink text="About" href="/about" />
      <ActiveLink text="Contact" href="/contact" />
      <ActiveLink text="Pricing" href="/pricing" /> */}
    </nav>
  );
};
