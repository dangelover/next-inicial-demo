import { MainLayout } from "../../components/layouts/MainLayout";
import Link from "next/link";
import React from "react";

export default function PricingPage() {
  return (
    <MainLayout>
      {/**aqui va el children que sera enviando hacia el layout este es el unico que va a cambiar*/}
      <h1>Pricing Page</h1>
      <h1 className={"title"}>
        {/* los link nos permiten cargar en memoria las paginas que queremos navegar de esta forma se hace la transmicion instantanea */}
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>
      <p>
        Get started by editing{" "}
        <code className={"code"}>pages/pricing/index.js</code>
      </p>
    </MainLayout>
  );
}
