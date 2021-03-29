import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

function Li(props) {
  const router = useRouter();
  const pagActual = router.asPath;

  if(pagActual == props.href) {
    return (
      <li className="nav__li ">
        <Link href={props.href}>
          <a className="nav__a nav__actual">{props.nombre}</a>
        </Link>
        <style jsx>{`

        .nav__actual {
          background: #ddd3;          
        }  
        
        .nav__li {
          transition: .2s
        }

        .nav__li:hover {
          background: #ddd5;
        }

        .nav__a {
          display: block;
          text-align: center;
          text-decoration: none;
          color: #fff;
          font-size: 1.1rem;
          padding: .6em;
          transition: .3s;
        }
        @media screen and (min-width: 500px) {
          .nav__a {
            display: inline-block;
            text-align: center;
            text-decoration: none;
            color: #fff;
            font-size: 1.1rem;
            padding: .6em;
          }
          .nav__li {
            display: inline-block;
          }
        }
        `}</style>
      </li>
    )
  }
  return (
    <li className="nav__li">
      <Link href={props.href}>
        <a className="nav__a">{props.nombre}</a>
      </Link>
      <style jsx>{`
        .nav__li {
          transition: .2s
        }

        .nav__li:hover {
          background: #fff4;
        }

        .nav__a {
          display: block;
          text-align: center;
          text-decoration: none;
          color: #fff;
          font-size: 1.1rem;
          padding: .6em;
          transition: .3s;
        }
        @media screen and (min-width: 500px) {
          .nav__a {
            display: inline-block;
            text-align: center;
            text-decoration: none;
            color: #fff;
            font-size: 1.1rem;
            padding: .6em;
          }
          .nav__li {
            display: inline-block;
          }
        }
      `}</style>
   </li>

  )
}

export default function Nav() {
  return (
    <nav>
      <div className="nav__izquierdo">
        <Link href="/">
          <a className="nav__a">
            <Image 
              src="/logo.png"
              alt="Logo"
              width={35}
              height={35}
            />
          </a>
        </Link>
      </div>
      <div className="nav__derecho">
        <div className="nav__btn">
          <div className="nav__btn__1"></div>
          <div className="nav__btn__2"></div>
          <div className="nav__btn__3"></div>
        </div>
        <ul className="nav__pages pages-none">
          <Li href="/" nombre="Inicio" />
        </ul>
      </div>
      <style jsx>{`
        nav {
          display: grid;
          grid-area: nav;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: auto;
          grid-template-areas: "izquierdo derecho";
          background: linear-gradient(to right, #373b44, #4286f4);
          height: 41.09px;
          box-shadow: 0px 0px 10px #333;
          position: fixed;
          width: 100%;
          z-index: 1000;
        }

        .nav__izquierdo {
          grid-area: izquierdo;
          display: inline;
          color: #fff;
          display: flex;
          align-items: center;
          padding-left: .5em
        }

        .nav__nombre {
          font-size: 1.2rem
        }

        .nav__derecho {
          padding-right: .5em;
          grid-area: derecho;
          position: relative;
          display: flex;
        }

        .nav__btn {
          width: 2.3rem;
          height: 2.3rem;
          margin: auto 0 auto auto;
          position: relative;
        }
        
        .nav__btn__1,
        .nav__btn__2,
        .nav__btn__3 {
          background: #fff;
          height: 4px;
          width: 100%;
          border-radius: 2px;
          position: absolute;
          transition: .2s; 
        }

        .nav__btn__1 {
          top: 5px;
        }

        .nav__btn__2 {
          top: 16.4px;
        } 

        .nav__btn__3 {
          bottom: 5px;
        }

        .nav__btn__1__x {
          top: 16.4px;
          transform: rotate(45deg);

        }

        .nav__btn__2__x {
          display: none;
        } 

        .nav__btn__3__x {
          top: 16.4px;
          transform: rotate(-45deg);
        }

        .nav__pages {
          position: absolute;
          list-style-type: none;
          margin-block-start: 0;
          margin-block-end: 0;
          padding-inline-start: 0;
          background: linear-gradient(to right, #373b44, #4286f4);
          top: 100%;
          left: -100%;
          width: 100vw;
          transition: .2s;
        }

        .pages-none {
          top: -333%;
        }
        @media screen and (min-width: 500px) {
          nav {
            grid-template-columns: 1fr 2fr;;
          }

          .nav__btn {
            display: none;
          }
          
          .nav__pages {
            position: initial;
            background: none;
            left: none;
            width: auto;
            display: flex;
            justify-content: flex-end;
            width: 100%;
          }
        }

        @media screen and (min-width: 1200px) {
          nav {
            width: 1200px;
            margin: auto;
          }
        }
      `}</style>
    </nav>
  )
}