import { useRouter } from "next/router";
import Link from "next/link";
import { FC } from "react";
//creamos fuera este objeto porque no es neceasrio que se genere cada vez que el componente sea renderizado
//Vamos a definir este objeto como tipo CSSProperties, de esta forma vamos a bloquear cualquier propiedad que no sea de tipo CSS
const style = {
  color: "#0070f3",
  textDecoration: "underline",
};
//vamos a crear una interface denominado props, para definir de que tipo sera text y href
interface Props {
  text: string,
  href: string
}
//vamos a recibir los props y vamos a desestructurar el text y el href
//es un FC pero internamente sus propertys lucen como la interface Props
export const ActiveLink: FC<Props> = ({ text, href }) => {
  //vamos a usar un customHook de next
  //vamos a desestructurar del router el asPath => este nos indica en que ruta nos encontramos
  const { asPath } = useRouter();
  //   console.log(router);
  return (
    //vamos a usar estas variables que recibimos de los props para colocarlo en el href y el text
    //si el asPath es igual al href(la ruta) que recibimos entonces le daras el estilo pero sino el style sera undefined
    <Link href={href} style={asPath === href ? style : undefined}>
      {text}
    </Link>
  );
};
