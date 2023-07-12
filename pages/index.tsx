import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

//funcional component, la diferencia con un componente de react es que es obligatorio que las paginas
//que se encuentran dentro de pages sean la exportacion por defecto y es obligatorio
//L
export default function HomePage() {
  return (
    <MainLayout>
      {/**aqui va el children que sera enviando hacia el layout este es el unico que va a cambiar*/}
      <h1>Home Page</h1>
      {/**{'title'} !== 'title' => esto no es lo mismo
       * el segundo no lo va a procesar next porque no es una expresion de js, mientras
       * que el primero es una expresion de js que next a evaluar que no es mas que el
       * retorno de ese string pero este codigo es procesada por next y regresa preprocesada
       * osea toda esta pagina se crea mdiante el static generator(esta es la forma
       * por defecto de como se crean las paginas
       * el primero lo usamos para evaluar expresiones y devolver la clase que queremos)
       */}
      <h1 className={"title"}>
        {/* los link nos permiten cargar en memoria las paginas que queremos navegar de esta forma se hace la transmicion instantanea */}
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/about">About</Link>
      </h1>
      <p>
        Get started by editing <code className={"code"}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}
