import React, { Component } from "react";

function Cuadro(props) {
  console.log(props);
  return (
    <main>
      <div className="imagen">
        <img src="https://orig00.deviantart.net/2032/f/2016/014/4/e/saitama_2_one_punch_man_by_truss31-d9nz7ey.png"></img>
      </div>
      <div className="text">
        <h1 className="title">{props.title}</h1>
        <p>
          One-Punch Man es una franquicia creada por ONE. El webcómic comenzó en
          julio de 2009, con más de 10 millones de visitas y 20,000 visitas por
          día. Shueisha Young Jump Next retomó la serie después de que Yusuke
          Murata contactó a ONE y propuso volver a dibujar el cómic para su
          publicación digital. En 2015 una adaptación al anime fue llevada a
          cabo por el estudio Madhouse. La serie gira en torno a Saitama, quien
          ha entrenado tanto que se le ha acabado cayendo el pelo, y tiene tanta
          fuerza que es capaz de derrotar de un solo golpe a los misteriosos
          monstruos que aparecen en el mundo. Sin embargo, Saitama se ha
          aburrido de su fuerza, por lo que busca a rivales cada vez más fuertes
          para divertirse.
        </p>
      </div>
    </main>
  );
}

export default Cuadro;
