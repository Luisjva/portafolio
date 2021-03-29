import Nav from "../componets/nav"
import Head from "next/head"
import Proyectos from "../componets/proyecto"
import Formulario from "../componets/formulario"
import Footer from "../componets/footer"


export default function Index() {
  return (
    <div className="cuerpo">
      <Head>
        <title>Portafolio | Luis Villegas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#4286f4" />
        <link rel="shortcut icon" href="fav.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,300&family=Yanone+Kaffeesatz&display=swap');
        </style>
      </Head>
      <Nav />
      <main>
        <div className="tarjeta">
          <img className="tarjeta__img" src="/yo.png" />
          <h2 className="tarjeta__nombre">Luis Villegas</h2>
          <h3 className="tarjeta__sub">Programador Web</h3>
          <p className="tarjeta__texto">Desarrollador web con conocimientos en React, Next, Express y otras tecnologias</p>
        </div>
        <div className="proyectos">
          <h2>Proyectos</h2>
          <Proyectos />
          <p className="proyectos-text">Si quiere ver el proyecto, solo haga click en el slider</p>
        </div>


        
        <div className="habilidades">
          <h2 className="habilidades__titulo">Habilidades</h2>

          <div className="habilidades__caja">
            <div className="habilidad habilidad-1">
              <span>React</span>
              <div className="habilidad-progreso-1"><div className="falta-1"></div></div>
            </div>

            <div className="habilidad habilidad-2">
              <span>Next</span> 
              <div className="habilidad-progreso-2"><div className="falta-2"></div></div>
            </div>

            <div className="habilidad habilidad-4">
              <span>Pug</span> 
              <div className="habilidad-progreso-4"><div className="falta-4"></div></div>
            </div>

            <div className="habilidad habilidad-5">
              <span>Sass</span>
              <div className="habilidad-progreso-5"><div className="falta-5"></div></div>
            </div>

            <div className="habilidad habilidad-6">
              <span>Bootstrap</span>
              <div className="habilidad-progreso-6"><div className="falta-6"></div></div>
            </div>

            <div className="habilidad habilidad-7">
              <span>Git</span>
               <div className="habilidad-progreso-7"><div className="falta-7"></div></div>
            </div>

          </div>
        </div>
        <Formulario />
      </main>
      
      <Footer />
      <style jsx>{`
        main {
          margin: .5rem;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: repeat(4, auto);
          grid-template-areas: 
            "tarjeta"
            "proyectos"
            "habilidades"
            "contacto";
        }

        .cuerpo {
          background: #fff;
        }

        h2 {
          text-align: center;
        }

        /*    Targeta    */
        .tarjeta {
          grid-area: tarjeta;
          background: linear-gradient(to right, #373b44, #4286f4);
          display: grid;
          grid-template-columns: 1fr 2fr;
          grid-template-rows: repeat(3, auto);
          grid-template-areas: 
            "img nombre"
            "img titulo"
            "img texto";
          color: #fff;
        }

        .tarjeta__img {
          grid-area: img;
          object-fit: cover;
          height: 190px;
          margin: auto;
          margin-bottom: 0;
        }

        .tarjeta__nombre {
          grid-area: nombre;
          text-align: left;
          font-size: 1.5rem;
        }

        .tarjeta__sub {
          grid-area: titulo;
          font-size: 1.17rem;
        }

        .tarjeta__texto {
          grid-area: texto;
          font-size: 1rem;
        }
        /*    Proyectos    */
        .proyectos {
          grid-area: proyectos;
        }

        .proyectos-text {
          text-align: center;
          width: 80%;
          margin: auto;
          font-size: 0.8rem;
          color: #0009;
          margin-top: .5rem;
        }

        /*    Habilidades    */
        .habilidades {
          grid-area: habilidades;
        }
        .habilidades__caja {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: repeat(7, auto);
          grid-template-areas:
            "hab1"
            "hab2"
            "hab3"
            "hab4"
            "hab5"
            "hab6"
            "hab7";
        }

        .habilidad-progreso-1,
        .habilidad-progreso-2,
        .habilidad-progreso-3,
        .habilidad-progreso-4,
        .habilidad-progreso-5,
        .habilidad-progreso-6,
        .habilidad-progreso-7 {
          margin: .14rem 0 .14rem 0;
          display: flex;
          justify-content: flex-end;
          border-radius: 3px;
        }

        .habilidad {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 2fr;
          margin-bottom: .5rem;
        }

        .habilidad-progreso-1 {
          background: #373b44;
          border: 2px solid #373b44;
        }

        .falta-1 {
          width: 10%;
          background: #fff;
        }

        .habilidad-progreso-2 {
          background: #394966;
          border: 2px solid #394966;
        }

        .falta-2 {
          width: 5%;
          background: #fff;
        }

        .habilidad-progreso-3 {
          background: #3c5787;
          border: 2px solid #3c5787;        
        }

        .falta-3 {
          width: 15%;
          background: #fff;
        }

        .habilidad-progreso-4 {
          background: #3c619d;
          border: 2px solid #3c619d;      
        }

        .falta-4 {
          width: 5%;
          background: #fff;
        }

        .habilidad-progreso-5 {
          background: #3d6bb6;
          border: 2px solid #3d6bb6;
        }

        .falta-5 {
          width: 10%;
          background: #fff;
        }

        .habilidad-progreso-6 {
          background: #4077d1;
          border: 2px solid #4077d1;
        }

        .falta-6 {
          width: 5%;
          background: #fff;
        }

        .habilidad-progreso-7 {
          background: #4286f4;
          border: 2px solid #4286f4;
        }

        .falta-7 {
          width: 10%;
          background: #fff;
        }

        @media screen and (min-width: 500px) {
          main {
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 210px repeat(2, auto);
          grid-template-areas: 
            "tarjeta     proyectos"
            "habilidades proyectos"
            "contacto contacto";
          }
          
          .tarjeta {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(3, auto);
            grid-template-areas: 
              "img   nombre"
              "img   titulo"
              "texto texto";
            margin-bottom: auto;
            font-size: 1.5rem;
            margin-top: 0.83em;
          }

          .tarjeta__img {
            height: 125px;
          }

          .tarjeta__texto {
            margin: .5rem;
          }

          .proyectos {
            margin-left: 0.25rem;
          }
          .habilidades {
            margin-right: 0.25rem;
          }
        }

        @media screen and (min-width: 600px) {
          .tarjeta {
            grid-template-columns: 2fr 3fr;
          }
        }

        @media screen and (min-width: 720px) {
          main {
            width: 705px;
            margin: .5rem auto;
          }

          .tarjeta {
            grid-template-columns: 1fr 2fr;
            grid-template-areas: 
              "img nombre"
              "img titulo"
              "img texto";
          }

          .tarjeta__img {
            height: 170px;
          }

          .tarjeta__texto {
            margin: 0 .5rem .5rem 0;
          }

        }
        @media screen and (min-width: 900px) {
          main {
            width: 800px;
          }

          .tarjeta {
            grid-template-columns: 1fr 2fr;
          }
        }

        @media screen and (min-width: 1200px) {
          .cuerpo {
            width: 1200px;
            margin: auto;
            box-shadow: 0px 0px 5px #333;
          }
        }
      `}</style>
    </div>
  )
}