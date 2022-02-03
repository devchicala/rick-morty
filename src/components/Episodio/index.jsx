import img from "../../assets/rick-morty.jpg";
import { FaHeart, FaEye, FaInfo } from "react-icons/fa";

import { Link } from "react-router-dom";

const Episodio = ({ item }) => {
  return (
    <div className="col-sm-3 mb-4">
      <Link to={"/details/" + item.id} style={{ textDecoration: "none" }}>
        <div className="card p-1">
          <div className="col-12">
            <img src={img} alt="" className="w-100 img-fluid" />
          </div>
          <div className="mt-1 text-white back">
            <div className="card-body">
              <h5 className="card-title text-center">{item.name}</h5>
              <span className="d-flex justify-content-between">
                <p className="card-text">Episódio #{item.id}</p>
                <p className="card-text">Nº do Elenco: {item.characters.length ?? '-'}</p>
              </span>
              <p className="card-text text-center">{item.air_date}</p>
              <span className="d-flex justify-content-between">
                <p className="card-text">
                  Favorito <FaHeart />
                </p>
                <p className="card-text">
                  Visto <FaEye />
                </p>
                <p className="card-text">
                  Detalhes <FaInfo />
                </p>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Episodio;
