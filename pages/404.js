import Nav from "../componets/nav"
import Head from "next/head"
import Footer from "../componets/footer"

export default function Custom404() {
  return(
    <div className="cuerpo">
      <Head>
        <title>404 | Luis Villegas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#4286f4" />
        <link rel="shortcut icon" href="fav.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,300&family=Yanone+Kaffeesatz&display=swap');
        </style>
      </Head>
      <Nav />
      <main>
        <img src="/404.svg" />
        <p>La pagina que busco no existe</p>

      </main>
      <Footer />
      <style jsx>{`
        .cuerpo {
          height: 96vh;
        }

        main {
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      `}</style>
    </div>
  )
}