import './App.css';
import Testimonio from  "./componentes/Testimonio";
function App() {
  return (
    <div className="App">
      <h1>Esto es lo que dicen los profesionales de lo que ofrecemos:</h1>
      <Testimonio 
      nombre="Emma Bostian"
      pais="Suecia"
      imagen="emma"
      cargo="Ingeniera de software"
      empresa="Spotify"
      testimonio="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, sapiente, maiores eaque doloremque ex eius minus itaque labore accusantium saepe esse, eum nisi vel sit sint porro iure omnis magni." />

<Testimonio 
      nombre="Shawn Wang"
      pais="Singapur"
      imagen="shawn"
      cargo="Ingeniera de software"
      empresa="Amazon"
      testimonio="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, sapiente, maiores eaque doloremque ex eius minus itaque labore accusantium saepe esse, eum nisi vel sit sint porro iure omnis magni." />

<Testimonio 
      nombre="Sarah Chima"
      pais="Republica Dominicana"
      imagen="sarah"
      cargo="Ingeniera de software"
      empresa="ChatDesk"
      testimonio="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, sapiente, maiores eaque doloremque ex eius minus itaque labore accusantium saepe esse, eum nisi vel sit sint porro iure omnis magni." />

    </div>
  );
}

export default App;
