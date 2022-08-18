import './App.css';


function App() {
  let imagen = "ghostOfTsushimaPS4.jpg";
  let titulo = "Ghost of Tsushima PS4";
  let descripcion = "Ghost of Tsushima is an open-world action-adventure game set in the mid-13th century. In the center of the story is a samurai named Jin, who finds himself on the island of Tsushima in the midst of the first Mongol invasion of Japan. It is he who will have to stop the invasion of the Mongols into the territory of the Land of the Rising Sun. The game is based on real events, but the characters are created by the authors themselves. Tsushima Island in the game is an open world in which players can move freely in any direction, and in Ghost of Tsushima there are a minimum of different markers and pointers - you need to navigate the local world yourself. Players must not only explore the island, but also fight the Mongols, liberate castles and destroy military camps, and help civilians in trouble.";
  const producto = {id:1, image:imagen, title:titulo, description:descripcion};
  
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <h1 className='text-center'>Mi primer aplicación de React.js</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4 offser-md-2 pt-4'>
          <img src={imagen} alt={producto.title} className="img-fluid"></img>
        </div>
        <div className='col-md-4 pt-4'>
          <h1>{producto.title}</h1>
          <p>{producto.description}</p>
        </div>
      </div>
    </div>
  )
}

export default App;
