

export default function Footer() {
  return(
      <footer>
        <a href="https://github.com/Luisjva" target="_blank">
          <img className="logo-github" src="/logo-github.png" alt="footer"/>
        </a>
        <img className="footer-fondo" src="/footer.png" alt="footer"/>
        <script src="/btnnav.js"></script>
        <style jsx>{`
          footer {
            background: #fff;
            position: relative;
          }
          .footer-fondo {
            width: 100%;
          }
          .logo-github {
            width: 40px;
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            transition: .3s;
          }
          .logo-github:hover {
            transform: scale(1.2) translateX(-49%);
          }
        `}</style>
      </footer>
      
  )
}