import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="container">
        <Tarjeta
          imagen="http://i.imgur.com/llaiQjGl.jpg"
          dinosaurio="Tiranosaurio Rex"
          estatura="11.1 a 12.3 metros"
          categoria="Carnívoro"
          alt="tiranosaurioRex"
        />
        <Tarjeta
          imagen="https://i0.wp.com/hipertextual.com/wp-content/uploads/2018/07/parque_jurasico_steven_spielberg.jpg?resize=670%2C447&ssl=1"
          dinosaurio="Braquiosaurio"
          estatura="18 a 21 metros"
          categoria="Herviboro"
          alt="braquiosaurio"
        />
        <Tarjeta
          imagen="https://i.pinimg.com/originals/f3/fa/52/f3fa5201bf24d32ab266fcbd404b8342.jpg"
          dinosaurio="Velociraptor"
          estatura="1.8 a 2 metros"
          categoria="Carnívoro"
          alt="velociraptor"
        />
        <Tarjeta
          imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSdIIAdGwIKYyd4qif7c7CNSGVQWKC2JgKkA&usqp=CAU"
          dinosaurio="Pteranodon"
          estatura="5.6 metros"
          categoria="Carnívoro"
          alt="pteranodon"
        />
        <Tarjeta
          imagen="https://img.europapress.es/fotoweb/fotonoticia_20200921164207_1200.jpg"
          dinosaurio="Spinosaurus"
          estatura="15 m"
          categoria="Carnívoro"
          alt="spinosaurus"
        />
        <Tarjeta
          imagen="https://cdnb.artstation.com/p/assets/images/images/021/931/355/large/gavin-eastwood-anm-indominus-3-bigroar-00074.jpg?1573495532"
          dinosaurio="Indominus Rex"
          estatura="15.2 metros"
          categoria="Carnívoro"
          alt="indominus Rex"
        />
        <Tarjeta
          imagen="https://yokmedios.com/img/content/1639/1590774670977.jpg"
          dinosaurio="Indoraptor"
          estatura="7.3 metros"
          categoria="Carnívoro"
          alt="indoraptor"
        />
        <Tarjeta
          imagen="http://pm1.narvii.com/6868/f50a93205895273e7c452ff29f7155daede5e97br1-1280-720v2_uhq.jpg"
          dinosaurio="Ankylosaurus"
          estatura=" 6.25 metros"
          categoria="Hervíboro"
          alt="ankylosaurus"
        />
      </div>
    </div>
  );
}

function Tarjeta(props) {
  return (
    <div className="card">
      <img className="card_image" src={props.imagen} alt="" />
      <div className="card_info">
        <h1>{props.dinosaurio}</h1>
        <h6>Longitud: {props.estatura}</h6>
        <h6>Dieta: {props.categoria}</h6>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <img
        src="https://filmakersmovie.com/wp-content/uploads/2020/06/jurassic_park.jpg"
        alt="logoJurasicPark"
      ></img>
    </div>
  );
}

function Banner() {
  return (
    <div className="banner">
      <h2>Jurasic Park</h2>
    </div>
  );
}

export default App;
