import React, {useRef, useEffect} from 'react'
import img1 from '../imagenes/1.jpg';
import img2 from '../imagenes/2.jpg';
import img3 from '../imagenes/3.jpg';
import img4 from '../imagenes/4.jpg';
import {ReactComponent as FlechaIzquierda} from '../imagenes/iconmonstr-angel-left-thin.svg';
import {ReactComponent as FlechaDerecha} from '../imagenes/iconmonstr-angel-right-thin.svg'; 
import styled from 'styled-components';


const Slideshow=() => {
  const slideshow = useRef(null);
  const intervaloSlideshow= useRef(null);
  const siguiente = ()=> {
    
    if(slideshow.current.children.length>0){

     /* const primerElemento = slideshow.current.children[0];

      slideshow.current.style.transition= `500ms ease-out all`;

      const tamañoSlide = slideshow.current.children[0].offsetWidth;

      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`

      const transicion = () => {

      slideshow.current.style.transition= 'none';
      
      slideshow.current.style.transform= `translateX(0)`;
      slideshow.current.appendChild(primerElemento);
      
      }

      slideshow.current.addEventListener('transitionend', transicion);

      */

    
  
      slideshow.current.style.transition= `500ms ease-out all`;
      const primerElemento = slideshow.current.children[0];
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`
      
      const transicion = () => {
        slideshow.current.style.transition= 'none';
        slideshow.current.style.transform= `translateX(0)`;
        slideshow.current.appendChild(primerElemento);
        slideshow.current.removeEventListener('transitionend', transicion);
      }
  
      slideshow.current.addEventListener('transitionend', transicion);
    }

  };
  
  const anterior = () => {

    console.log('anterior');
    if (slideshow.current.children.length >0){
      /*const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(ultimoElemento,slideshow.current.firstChild);
      
      slideshow.current.style.transition = 'none';
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transition = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {

      },0,3)
      }*/
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(ultimoElemento,slideshow.current.firstChild);
      slideshow.current.style.transition ='none';
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
      
      setTimeout(() =>  {
        slideshow.current.style.transition= `300ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      },30);
          }
  };

  useEffect(() => {
    intervaloSlideshow.current= setTimeout(() => {
      siguiente();
    }, 3000);
    console.log(`${intervaloSlideshow.current} useeffect`)

    slideshow.current.addEventListener('mouseenter', ()=> {
      var intervalo= intervaloSlideshow.current;
      console.log(`${intervaloSlideshow.current} mouseenter1`);
      console.log(`${intervalo} mouseenter2`);
      clearTimeout(intervaloSlideshow.current);
      console.log(`${intervaloSlideshow.current} mouseenter3`);
      console.log(`${intervalo} mouseenter4`);
    });

    slideshow.current.addEventListener('mouseleave', ()=> {
      intervaloSlideshow.current = setTimeout(() => {
        siguiente();
      } ,3000);
      console.log(`${intervaloSlideshow.current} mouseleave`);
      });
    
  }, []);
  
  
   return(
    
    <ContenedorPrincipal>
      <ContenedorSlideshow ref= {slideshow}>
        <Slide>
          <a href="https://bellacol.github.io/calculator/">
            <img src={img1} alt='Calculator'></img>  
          </a>
          <TextoSlide> 
            <p> CALCULATOR</p>

          </TextoSlide>
        </Slide>
        <Slide>
          <a href="https://bellacol.github.io/clics-counter/">
            <img src={img2} alt='clicsCounter'></img>  
          </a>
          <TextoSlide> 
            <p> CLICS COUNTER</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="https://bellacol.github.io/aplicacion-react-tareas/">
            <img src={img3} alt='toDoList'></img>  
          </a>
          <TextoSlide> 
            <p> TO DO  LIST</p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="https://bellacol.github.io/ecommerce-app-bm/">
            <img src={img4} alt='Volcán en acción'></img>  
          </a>
          <TextoSlide> 
            <p> WEB PAGES</p>
          </TextoSlide>
        </Slide>
      </ContenedorSlideshow>
      <Controles>
        <Flecha onClick={anterior}>
          <FlechaIzquierda/>
        </Flecha>
        <Flecha derecha onClick={siguiente
        }>
          <FlechaDerecha/>
        </Flecha>
      </Controles>
    </ContenedorPrincipal>
  )
} 

const ContenedorPrincipal = styled.div`
position: relative;
`;
const ContenedorSlideshow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide= styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: .3s ease all;
  z-index: 10;
  max-height: 180px;
  position: relative;

  img {
    width: 100%;
    vertical-aligne: top;
   
    @media screen and (max-width: 1200px)  {
      height: 100%;
  
    }
    @media screen and (max-width: 500px)  {
      height: 80px;
  
    }
  
  }
  `;

const TextoSlide= styled.div`
  background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.3)'};
  color: ${props => props.colorTexto ? props.colorTexto : '#fff'};
  width: 100%;
  padding: 0px 60px;
  text-align: center;
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 500px)  {
    position: relative;
    background: #000;

  }
  `;
  const Controles = styled.div`
    position: absolute;
    top:0;
    z-index: 20;
    width: 100%;
    height:100%;
    pointer-events:none;
  `
  const Flecha= styled.button`
    pointer-events: all;
    background:none;
    border: none;
    cursor: pointer;
    outline:none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
    &: hover {
      background: rgba (0,0,0,.2);
      path{
        fill: #fff; 
      }
    }

    path {
      filter: ${props => props.derecha ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
    }

    ${props=> props.derecha ? 'right: 0' : 'left:0'}
  `;
export default Slideshow