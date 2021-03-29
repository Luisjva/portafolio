import React from "react";

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nombre: '',
                  email: '',
                  descripcion: ''}
  }

  syncNombrechanges(nombre) {
    this.setState({nombre: nombre})
  }

  syncEmailchanges(email) {
    this.setState({email: email})
  }

  syncTextareachanges(descripcion) {
    this.setState({descripcion: descripcion})
  }

  submitForm() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="contacto">
        <h2 id="contacta">Contacto</h2>
        <form>
          <input 
            onChange={(e)=>{ this.syncNombrechanges(e.target.value) }}
            type="text" 
            value={this.state.nombre} 
            placeholder="Nombre" />

          <input 
            onChange={(e)=>{ this.syncEmailchanges(e.target.value) }}
            type="email" 
            value={this.state.email} 
            placeholder="Email" />
          
          <textarea 
            onChange={(e)=>{ this.syncTextareachanges(e.target.value) }} 
            value={this.state.descripcion} 
            placeholder="Descripción" />
          
          <input 
            className="btn"
            onClick={ ()=> this.submitForm() }
            type="submit" 
            value="Enviar" />
        </form>
        <style jsx>{`
          h2 {
            text-align: center;
          }

          .contacto {
            grid-area: contacto;
            margin-top: .5rem;
          }

          input,
          textarea {
            background: none;
            border: none;
            outline: none;
            margin: auto;
            border-bottom: 3px solid #3c5787;
            width: 100%;
            margin-bottom: .5rem;
            padding: .2rem;
            transition: .2s;
          }
          
          input:focus,
          textarea:focus {
            border-bottom: 3px solid #4077d1;
          }

          textarea {
            resize: vertical;
          }

          .btn {
            border: 3px solid #3c5787;
          }

          .btn:focus {
              background: #3c5787;
              color: #fff;
              border: 3px solid #3c5787;
              padding: .2rem;
          }

          @media screen and (min-width: 500px) {
            input,
            textarea {
              width: 60%;
              margin-bottom: .5rem;
            }
            form {
              display:flex;
              justify-content: center;
              flex-direction: column;
            }

            .btn:hover {
              background: #3c5787;
              color: #fff;
              border: 3px solid #3c5787;
              padding: .2rem;
            }

          }
          @media screen and (min-width: 735px) {
            input,
            textarea {
              width: 50%;
              margin-bottom: .5rem;
            }
          }
        `} </style>
      </div>
    )
  }
}

export default Formulario

