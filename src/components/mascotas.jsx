import Mascota from "./mascota";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const { useState, useEffect } = require("react");

function Mascotas() {
    const [mascotas, setMascotas] = useState([]);

    useEffect(() => {
        const URL = 'https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json';
        fetch(URL).then(data => data.json()).then(data => {setMascotas(data);})},[]);
    return (
        <div className="container">
            <h1>Listado de mascotas</h1>
            <hr></hr>
            <Row>
                {mascotas.map(mascota => <Col><Mascota mascota={mascota} key={mascota.id}/></Col>)}
            </Row>
        </div>
    );
}


export default Mascotas;