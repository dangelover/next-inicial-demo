import Head from "next/head";
// import styles from "@/styles/globals.css";
import Link from "next/link";
// import { NavBar } from "@/components/NavBar";
import { MainLayout } from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";

//funcional component, la diferencia con un componente de react es que es obligatorio que las paginas
//que se encuentran dentro de pages sean la exportacion por defecto y es obligatorio
//L
export default function AboutPage() {
  return (
    <>
      {/* //Head es un componente especial que le dice al framework hey la
      informacion que esta aqui es informacion que deberia estar en el head del
      html //este reemplaza al head del navegador web //podemos tener multiples
      head */}
      <>
        <h1>About Page</h1>
        <h1 className={"title"}>
          {/* los link nos permiten cargar en memoria las paginas que queremos navegar de esta forma se hace la transmicion instantanea */}
          {/* Ir a <a href="/">Home</a> */}
          Ir a <Link href="/">Home</Link>
        </h1>
        <p>
          Get started by editing <code className={"code"}>pages/index.js</code>
        </p>
      </>
    </>
  );
}
//creamos nuestra funcion de getLayout
//el Pages sera de tipo JSX.element
AboutPage.getLayout = function getLayout(pages: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{pages}</DarkLayout>
    </MainLayout>
  );
};
