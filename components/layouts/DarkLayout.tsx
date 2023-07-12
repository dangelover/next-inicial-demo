//como este es un hight order component va a recibir un children es decir otros
//componentes otros ejs escomo una plantilla

import { FC, PropsWithChildren } from "react";

//se debe de usar muy poco el tipo any
//Si queremos usar children se debe de especificar de que tipo es en este caso es Funcional Component y este va a extender de PropsWithChildren
export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#645F57",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
