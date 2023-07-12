import { NextPage } from "next";
import "../styles/globals.css";
import { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";
//vamos a definir el tipo de dato que sera, en este caso de tipo Page
//estos types tienen estos nombres porque asi lo recomienda el equipo de react
type NextPageWithLayout = NextPage & {
  //creamos la propiedad getLayout => este nos permite usar los template y es opcional porque no todos los tienen
  //este es una funcion que va a regresar un JSXElement o ReactNode, los dos son lo mismo pero el ReactNode debemos de importarlo
  // getLayout?: () => JSX.Element;
  getLayout?: (page: ReactElement) => ReactNode;
}
//vamos a definir los properties de este componente
// 
type AppPropsWithLayout = AppProps & {
  //vamos a crear nuestra propiedad Component que sera obligatorio y extendera de NextPageWithLayout
  Component: NextPageWithLayout 
}
//vamos a definir de que tipo son las properties
//{ Component, pageProps } son de tipo AppPropsWithLayout
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  //vamos a llamar a nuestra funcion que tiene los dos layouts anidados
  //y vamos a revisar el componente que se quiere renderizar en este momento
  const getLayout = Component.getLayout || ((page) => page);
  // return (<Component {...pageProps} />);
  return getLayout(<Component {...pageProps} />);
}
