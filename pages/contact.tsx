import Head from "next/head";
import Link from "next/link";
// import { NavBar } from "@/components/NavBar";
import { MainLayout } from "../components/layouts/MainLayout";

//funcional component, la diferencia con un componente de react es que es obligatorio que las paginas
//que se encuentran dentro de pages sean la exportacion por defecto y es obligatorio
//L
export default function ContactPage() {
  return (
    <>
      <MainLayout>
        <h1>Contact Page</h1>
        <h1 className={"title"}>
          {/* los link nos permiten cargar en memoria las paginas que queremos navegar de esta forma se hace la transmicion instantanea */}
          {/* Ir a <a href="/about">About</a> */}
          Ir a <Link href="/">Home</Link>
        </h1>
        <p>
          Get started by editing{" "}
          <code className={"code"}>pages/conctact.js</code>
        </p>
      </MainLayout>
    </>
  );
}
