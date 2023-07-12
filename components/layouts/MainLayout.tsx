//Los layouts => son componentes como en react que recibe un children y este childre es el elemento que va a cambiar y ser diferente
//es un componente que se a reutilizar en todas las pantallas
import Head from "next/head";
import styles from "./MainModule.module.css";
import { NavBar } from "../NavBar";
import { FC, PropsWithChildren } from "react";
//recibimos mediante las propertys el children
//children=> es la propiedad que nos va a mandar react cuando usemos este layout
//como un hight order Component(no es mas que un componente que recibe otros elementos
//como componentes html interno, jsx o un arreglo de jsx)
//Si queremos usar children se debe de especificar de que tipo es en este caso es Funcional Component y este va a extender de PropsWithChildren
export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Kevin Home</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* importamos el componente navbar */}
      <NavBar />
      <main className={styles.main}>{children}</main>
    </>
  );
};
