import {useParam} from 'react-router-dom';
const { useState, useEffect } = require("react");

export default function Detail() {
    const params = useParams();
    const [mascota, setMascota] = useState({});
    useEffect(() => {
        const URL = 'https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json';
        fetch(URL)
            .then(data => data.json())
            .then(data => {
                setMascota(data.find(mascota => mascota.id === parseInt(params.mascotaId)));
            });
    }, [params.mascotaId]);
    return(
        <div>
            <h1>{mascotaPedida.nombre}</h1>
            <img style={{height:"35rem"}} src={mascotaPedida.foto} alt={mascotaPedida.descripcion} />
            <h2>{mascotaPedida.raza}</h2>
        </div>
    );
}