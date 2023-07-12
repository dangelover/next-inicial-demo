// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
//INDICAMOS DE QUE TIPO ES LA REQUEST Y LA RESPONSE
//los type a diferencia de las interface no se pueden expandir, es algo fijo
type Data = {
  name: string;
};
//Dentro de los signos de mayuscula y minuscula le indicamos el tipo de dato que sera la respuesta, en este caso de tipo Data
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
