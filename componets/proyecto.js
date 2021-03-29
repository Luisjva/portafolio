export default function Proyectos() {
  return (
    <div>
      <div className="slider-contenedor">
        <div className="vistas">
          <button className="vistas-btn vistas__telefono vista-btn--activo">Telefono</button>
          <button className="vistas-btn vistas__pc">Pc</button>
        </div>


        <div className="slider-absoluto">
          <div className="slider-contenedor-telefono">


            <div className="pag-telefono fade">
              <img src="/proyecto3.jpg"/>
              <a href="https://luisjva.github.io/Maqueta1/" target="_blank">
                <div className="espesificaciones">
                  <div className="espesificaciones-der">
                    <span>HTML</span>
                    <span>CSS</span>
                  </div>
                  <div className="espesificaciones-izq">
                    <p>Maqueta</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="pag-telefono fade">
              <img src="/proyecto2.jpg"/>
              <a href="http://a2ndocean.herokuapp.com/" target="_blank">
                <div className="espesificaciones">
                  <div className="espesificaciones-der">
                    <span>Express</span>
                    <span>Pug</span>
                    <span>CSS</span>
                  </div>
                  <div className="espesificaciones-izq">
                    <p>Blog</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="pag-telefono fade">
              <img src="/proyecto1.jpg"/>
              <a href="https://luisjva.github.io/tren-en-linea/" target="_blank">
                <div className="espesificaciones">
                  <div className="espesificaciones-der">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JS</span>
                  </div>
                  <div className="espesificaciones-izq">
                    <p>Juego</p>
                  </div>
                </div>
              </a>

              
            </div>
            <div className="flecha-telefono">
              <p className="flecha-telefono-antes slider-flecha center-y">
                &#10094;
              </p>
              <p className="flecha-telefono-despues slider-flecha center-y">
                &#10095;
              </p>
            </div>
          </div>
        </div>

        <div className="slider-absoluto">
          <div className="slider-contenedor-pc slider-contenedor--cerrado">
            

            <div className="pag-pc fade">
              <a href="https://luisjva.github.io/Maqueta1/" target="_blank">
                <img className="img-pc" src="/proyecto3-pc.jpg"/>
              </a>
            </div>

            <div className="pag-pc fade">
              <a href="http://a2ndocean.herokuapp.com/" target="_blank">
                <img className="img-pc" src="/proyecto2-pc.jpg"/>
              </a>
            </div>

            <div className="pag-pc fade">
              <a href="https://luisjva.github.io/tren-en-linea/" target="_blank">
                <img className="img-pc" src="/proyecto1-pc.jpg"/>
              </a>
            </div>


            <div className="flecha-pc">
              <p className="flecha-pc-antes slider-flecha-pc center-y">
                &#10094;
              </p>
              <p className="flecha-pc-despues slider-flecha-pc center-y">
                &#10095;
              </p>
            </div>

          </div>
        </div>

      </div>
      
      <script src="/slider.js"></script>
      <script src="/vistas.js"></script>


      <style jsx>{`
        .center-y {
          position: relative;
          top: 40%;
          transform: translateX(-50%)
        }

        /*    Vistas    */
        .vistas {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto;
          width: 240px;
          margin: auto;
        }

        .vistas-btn {
          background: none;
          border: none;
          outline: none;
          cursor: pointer;
          padding: .5rem;
          border-radius: 7px 7px 0px 0px;
          transition: .3s;
        }

        .vistas-btn:hover {
          box-shadow: 2px 2px 3px #333;
          background: linear-gradient(to bottom, #373b44aa, #3d6bb6aa);
        }

        .vista-btn--activo {
          background: linear-gradient(#373b44, #3d6bb6);
          color: #fff;
          border-radius: 7px 7px 0px 0px;
          cursor: default;
        }

        .vista-btn--activo:hover {
          background: linear-gradient(to bottom, #373b44, #3d6bb6);
          box-shadow: none;
        }

        /* Tomar foto en 350px 777px */
        .slider-contenedor{
          width: 240px;
          height: 571px;
          margin: auto;
          position: relative;
          transition: .3s;
        }
        
        .slider-absoluto {
          position: absolute;
          top: 34px;
          left: 0;
        }

        .slider-contenedor-telefono {
          background: #333;
          width: 240px;
          height: 533px;
          margin: auto;
          position: relative;
          overflow: hidden;
          border-radius: 0px 0px 15px 15px;
          transition: .3s;
        }

        .slider-contenedor--cerrado {
          transform: scale(0);
        }

        .slider-contenedor-telefono:hover,
        .slider-contenedor-pc:hover {
          box-shadow: 0px 0px 5px #333;
        }

        .pag-telefono {
          height: 100%;
          width: 100%;
          position: absolute;
          z-index: 10;
        }

        .espesificaciones {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: linear-gradient(to bottom, transparent 70%, #333);
          z-index: 100;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .espesificaciones-der {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-bottom: 1.5rem;
        }

        .espesificaciones-der span {
          color: #fff;
          background: #373b44;
          background: linear-gradient(to right, #373b44, #3c619d);
          margin-top: .25rem;
          padding: .2rem;
          border-radius: 3px;
        }

        .espesificaciones-izq {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-bottom: 1.5rem;
        }

        .espesificaciones-izq p {
          color: #fff;
          font-size: 1.7em;
          font-family: 'Yanone Kaffeesatz', sans-serif;
        }

        .pag-telefono img,
        .img-pc {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slider-flecha {
          color: #fff;
          font-size: 40px;
          cursor: pointer;
          position: absolute;
        }

        .flecha-telefono-antes {
          left: 15px;
          z-index:200;

          background: linear-gradient(to bottom, #373b44, #4286f4);


          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }

        .flecha-telefono-despues {
          right: 5px;
          z-index:200;
          background: linear-gradient(to bottom, #4286f4, #373b44);


          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }

        .none {
          display: none;
        }

        .fade {
          animation-name: fade;
          animation-duration: .5s;
        }

        /*    Slider pc    */
        .slider-contenedor--pc {
          height: 240px;
        }

        .slider-contenedor-pc {
          background: #333;
          width: 240px;
          height: 201px;
          margin: auto;
          position: relative;
          overflow: hidden;
          border-radius: 0px 0px 10px 10px;
          transition: .3s;
        }

        .pag-pc {
          height: 100%;
          width: 100%;
          position: absolute;
        }
        


        .flecha-pc-antes {
          left: 15px;
          z-index:200;

          background: linear-gradient(to bottom, #373b44, #4286f4);


          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }

        .flecha-pc-despues {
          right: 5px;
          z-index:200;
          background: linear-gradient(to bottom, #4286f4, #373b44);


          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }

        .slider-flecha-pc {
          color: #fff;
          font-size: 40px;
          cursor: pointer;
          position: absolute;
          top: 30px;
        }



        @keyframes fade{
          from {opacity: .4}
          to {opacity: .1}
        }

        @media screen and (min-width: 650px) {
          .slider-contenedor{
            width: 300px;
            height: 710px;
          }

          .slider-contenedor-telefono {
            width: 300px;
            height: 666px;
          }

          .slider-contenedor--pc {
            height: 300px;
          }

          .slider-contenedor-pc {
            width: 300px;
            height: 251px;
          }

          
          .vistas {
            width: 300px;
            margin: auto;
          }

          .slider-flecha-pc {
          top: 25%;
        }
        }
      `}</style>
    </div>
  )
}