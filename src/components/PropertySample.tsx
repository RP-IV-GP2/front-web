import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
interface SampleProps {
  id: string;
  name: string;
  adress: string;
  value: number;
  description: string;
  image: string;
}

export function PropertySample({
  id,
  name,
  adress,
  value,
  description,
  image,
}: SampleProps) {
  return (
    // <div className="flex w-8/12 h-48 shadow-xl border-gray-200 border-2 rounded-xl">
    <Link
      to={"/property/".concat(id)}
      className="flex max-w-3xl shadow-md rounded-md bg-white border-2 hover:border-red-400 p-2 justify-start gap-4 mr-8"
    >
      <div className="flex items-center rounded-sm">
        <img
          className="w-36 rounded-md"
          src={process.env.PUBLIC_URL + "/imovel.png"}
          alt={name}
        ></img>
      </div>
      <div className="flex w-full flex-col justify-between ml-2 py-3 right-0">
        <div className="flex w-full h-full">
          <div className="flex w-full flex-col justify-between pb-5">
            <div className="text-2xl">
              <p>{name}</p>
            </div>
            <div className="lugar">
              <p>{adress}</p>
            </div>
            <div className="valor">
              <p className="font-bold text-green-800">R$ {value}</p>
            </div>
          </div>
          <div className="flex w-1/3">
            <div className="flex w-full h-10 shadow-xl border-green-300 bg-green-300 border-2 rounded-xl justify-center items-center hover:border-green-400">
              <p className="text-white text-xl">
                Ver mais <FontAwesomeIcon icon="plus" className="text-sm" />
              </p>
            </div>
          </div>
        </div>

        <div className="descricao">
          <p>{description}</p>
        </div>
      </div>
    </Link>
    // </div>
  );
}
