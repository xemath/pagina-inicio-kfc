import {useState, useEffect} from 'react'
const imagenes = ['/images/burger_fries.png','/images/burger.png', '/images/french_fries.png', '/images/fried_chicken.png']
function App() {
  const [index, setIndex] = useState(0)
  const [imagen, setImagen] = useState(imagenes)
  const [activo, setActivo] = useState(false)

  useEffect(()=>{
    let ultimoValor = imagen.length - 1
    if(index < 0){
      setIndex(ultimoValor)
    }
    else if(index > ultimoValor){
      setIndex(0)
    }
  },[index])

  useEffect(()=>{
    let cambiarImagen = setInterval(()=>{
      setIndex(index + 1);
    }, 4000);

    return ()=> clearInterval(cambiarImagen)
  }, [index])

  const mostrarMenu = ()=>{
    setActivo(!activo)
  }
  
  return (
    <section class="main">
        <header>
            <a href="#"><img src="/images/logo.png" alt="" class="logo"/></a>
            <div class={activo?'toggle active':'toggle'} onClick={mostrarMenu}></div>
            <ul class={activo ? 'navigation active':'navigation'}>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Menú</a></li>
                <li><a href="#">Informacion</a></li>
                <li><a href="#">Contactame</a></li>
            </ul>
        </header>
        <div class="content">
            <div class="text">
                <h2>Para Chuparse<br/>el <span>Dedo.</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, optio. Molestias, amet ex id quas optio pariatur! Nulla iusto iure corporis ipsam! Sit quaerat odit, id neque qui, voluptatibus laborum sed eaque, suscipit illum excepturi.</p>
                <a href="#" class="btn">Ordenar Ahora</a>
            </div>
            <div class="slider">
                <div class="slides active">
                    <img src={imagen[index]} alt=""/>
                </div>
                
            </div>
        </div>
        <div class="footer">
            <ul class="sci">
                <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
            </ul>
            <div class="prevnext">
                <p>Siempre fresco!</p>
                <span class="prev" onClick={()=>setIndex(index - 1)}><ion-icon name="chevron-back-outline"></ion-icon></span>
                <span class="next" onClick={()=>setIndex(index + 1)}><ion-icon name="chevron-forward-outline"></ion-icon></span>
            </div>
          </div>
    </section>
  );
}

export default App;
