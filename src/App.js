import Navigation from './components/navbar.js';
import Product from './components/product.js';
//import './styles/style.css';
import './App.css';
import React, {useState, useEffect} from 'react';


function App() {

  const [scrollPos, setScrollPos] = useState(0);
  const [product, setProduct] = useState('tab1');
  

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPos(position);

    

    

  }


  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll, {passive: true});
    //window.removeEventListener('scroll', onScroll);
    //window.addEventListener('scroll', onScroll, {passive: true});
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  

  if(document.getElementById('left-img') !== null){
    let img1 = document.getElementById('left-img');
    let img2 = document.getElementById('mid-img');
    let img3 = document.getElementById('right-img');
    let scrollText = document.querySelector('.scroll-text');
    //let test = findCust.getBoundingClientRect();
    
      let pageTop = document.querySelector('.parallax-bg').getBoundingClientRect().top;
      let pageBottom = document.querySelector('.parallax-container').getBoundingClientRect().bottom
      
      if(pageTop < 0 && pageBottom > 900){
        
  
        
        
        img1.style.transform = `translate(${-(pageTop*-100/2000)*2}%)`;
        
        img2.style.transform = `translateX(${(-(pageTop*-100/2900))*5-50}%)`;
        img3.style.transform = `translate(${26 -(pageTop*-100/2000)/5}%)`;
  
        
        
        
      }
      
      if(pageTop > -905){
  
        scrollText.style.opacity = pageTop/-900;
      }
      
      
      //console.log(pageBottom,window.innerHeight);
      let rotCont = document.querySelector('.rotating-container');
      //console.log(rotCont.clientHeight-window.innerHeight, rotCont.getBoundingClientRect().top);
      //console.log(window.innerHeight);
      
      if(rotCont.getBoundingClientRect().top < rotCont.clientHeight - window.innerHeight && rotCont.getBoundingClientRect().top > -(rotCont.clientHeight - window.innerHeight)){
        
        let deg = (rotCont.clientHeight - document.getElementById('apple-watches').getBoundingClientRect().bottom)*22/rotCont.clientHeight;
        document.getElementById('apple-watches').style.rotate = `${deg}deg`;
  
      }
  
  
      let ftText = document.getElementById('ft-text').getBoundingClientRect().top;
      console.log(ftText);
      console.log(rotCont.getBoundingClientRect().bottom);
      //if(rotCont.getBoundingClientRect().bottom)
  
    
  }
 

  return (
    <div class=''>
      <Navigation />
      <div className="first-section">
      {/* Section 1 */}
      <div className='container apple-watch'>
        <div className='container row'>
          <div className='col-md-6 flex-column left-align'>
            <h1>
              "Apple Watch" su
            <br />
            eSIM jau BITĖJE!</h1>

            <button className='btn btn-default'>Rinktis laikrodį</button>
            <label>Pasiūlymo sąlygos <i className='icon icon-info'></i></label>
            
          </div>
          <div className='col-md-4 right-align'>
            <img alt="apple" src='/images/apple_watch.svg' />
          </div>
          </div>
        
      {/* Section 1 END */} 

      

      </div>

      


      </div>
      
      {/* Section 2 (paralax?)*/}

      <div className='parallax-container'>
        
        <div className='parallax-bg'>
        
            
            <img id='left-img' alt="apple" src='/images/watch-left.svg' className='watch-img img1 animations' />
            <img id='mid-img' alt="apple" src='/images/watch-middle.svg' className='watch-img img2 animations' />
            <img id='right-img' alt="apple" src='/images/watch-right.svg' className='watch-img img3 animations' />
            <div className='container scroll-text'>
              <div className='col-md-9 col-sm-12 watch-presentation-content-left height-inherit'>
                <h3>Jūsų laikrodis - Jūsų telefonas.</h3>
                <h2>Palikite telefoną namuose ir naudodamiesi „Apple Watch“ su eSIM:</h2>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-5'>
                      <img src="/images/ic1.svg" alt='icon1' className="sm-icons"/>
                      <h3>
                        Atsiliepkite ir skambinkite
                      </h3>
                    </div>
                    <div className='col-md-5'>
                      <img src="/images/ic2.svg" alt='icon2' className="sm-icons" />
                    <h3>
                      Naršykite
                    </h3>
                    </div>
                    
                    <div className='col-md-5'>
                      <img src="/images/ic3.svg" alt='icon3' className="sm-icons" />
                      <h3>
                        Stebėkite fizinį aktyvumą
                      </h3>
                    </div>
                    <div className='col-md-5'>
                      <img src="/images/ic4.svg" alt='icon4' className="sm-icons" />
                      <h3>
                        Klausykite muzikos
                      </h3>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            

            

            
          
        </div>

        
        
        
        

        
      </div>

      {/* Section 2 END */}

      {/* Section 3 */}
    <div className='rotating-container'>
      <img src="/images/apple-watches.svg" alt="apple-watches" className="center-img" id='apple-watches'/>
      <div className='container scroll-text-other' id='ft-text'>
        <div className='container row'>
        <div className='col-md-3 ft'>
          <h4>Išskirtinis dizainas</h4>
          <p>Nuo krašto iki krašto – visada aktyvus „Retina“ ekranas. Ryškus ir aiškus vaizdas.</p>
        </div>
        <div className='col-md-3 ft'>
          <h4>Nuolatinis ryšys</h4>
          <p>Skambinkite ir rašykite tiesiogiai nuo savo riešo. Visos dienos akumulia-<br/>torius.</p>
        </div>
        <div className='col-md-3 ft'>
          <h4>Sportas</h4>
          <p>Patobulinta „Workout“ programa suteiks naujų būdų sportuoti.</p>
        </div>
        <div className='col-md-3 ft'>
          <h4>Sveikata</h4>
          <p>Pažangūs sveikatos jutikliai ir miego sekimas.</p>
        </div>
        </div>
        
      </div>
    </div>
    {/*  Section 3 END */}

    {/* Section 4 */}
    <div class='container products'>
      
      <h1>Laikrodžiai-telefonai su eSIM paslauga</h1>

      <div className='product-buttons'>
        <div className='product-row'>
          <div className={'tab-content tab1 ' + (product === 'tab1' ? 'active' : '')} onClick={() => setProduct('tab1')}>
            <p>Apple Watch SE</p>
          </div>
          <div className={'tab-content tab2 ' + (product === 'tab2' ? 'active' : '')} onClick={()=> setProduct('tab2')}>
            <p>Apple Watch SERIES 8</p>
          </div>
          <div className={'tab-content tab3 ' + (product === 'tab3' ? 'active' : '')} onClick={()=>setProduct('tab3')}>
            <p>Apple Watch Ultra</p>
          </div>
        </div>
        
      </div>

      <div className='container'>
        <div>

          <div className='products-data' id='tab1'>
            <ul>
              <li>
                <Product />
              </li>
              <li><Product /></li>
              <li><Product /></li>
              <li><Product /></li>
            </ul>

          </div>
          <div className='products-data' id='tab2'></div>
          <div className='products-data' id='tab3'></div>

        </div>


      </div>


    </div>
      {/* Section 4 END */}


      {/* Section 5 */}
      <div className='specification-container'>
        <div className='container'>
          <div className='specs'>
            <div className='container-header'>
              <h1>Kodėl verta rinktis eSIM laikrodį?</h1>
              <img src='/images/specs-watch.svg' alt='specs-watch' />
            </div>
            <div className='specs-table'>
              <table>
                <tr>
                  <td><h4>Savybės</h4></td>
                  <td>GPS</td>
                  <td><img src='/images/logo-esim.svg' alt='esim' /></td>
                </tr>
                <tr>
                  <td>
                    <h4>IP68 atsparumo sertifikatas</h4>
                    <p>Užtikrina atsparumą vandeniui</p>
                  </td>
                  <td><img src='/images/check.svg' alt='check' /></td>
                  <td><img src='/images/check.svg' alt='check' /></td>
                </tr>
                <tr>
                  <td>
                    <h4>Veikia su "Bluetooth"</h4>
                    <p>Sinchronizuojasi su telefonu ar belaidėmis ausinėmis</p>
                  </td>
                  <td><img src='/images/check.svg' alt='check' /></td>
                  <td><img src='/images/check.svg' alt='check' /></td>
                </tr>
                <tr>
                  <td>
                    <h4>Vienas numeris veikia telefone ir išmaniajame laikrodyje</h4>
                    <p>Leidžia palikti mobilųjį namuose ir skambinti naudojantis laikrodžiu</p>
                  </td>
                  <td><img src='/images/minus.svg' alt='minus' /></td>
                  <td><img src='/images/check.svg' alt='check' /></td>
                </tr>
                <tr>
                  <td>
                    <h4>Esate pasiekiamas net išsikrovus telefonui</h4>
                    <p>Skambučiai nukreipiami tiesiai į laikrodį</p>
                  </td>
                  <td><img src='/images/minus.svg' alt='minus' /></td>
                  <td><img src='/images/check.svg' alt='check' /></td>
                </tr>
                <tr>
                  <td>
                    <h4>Muzika visada kartu</h4>
                    <p>Klausykitės, net jei telefoną palikote namuose</p>
                  </td>
                  <td><img src='/images/minus.svg' alt='minus' /></td>
                  <td><img src='/images/check.svg' alt='check' /></td>
                </tr>
                <tr>
                  <td>
                    <h4>
                      Neribotos pramogos
                    </h4>
                    <p>Laikrodžio programėlėmis galite naudotis net jei nesate prisijungęs prie Wi-Fi</p>
                  </td>
                  <td><img src='/images/minus.svg' alt='minus' /></td>
                  <td><img src='/images/check.svg' alt='check' /></td>
                </tr>
                <tr>
                  <td>
                    <h4>Lengvas atsiskaitymas</h4>
                    <p>Galimybė apmokėti už pirkinius bekontakčių mokėjimo būdu.</p>
                  </td>
                  <td><img src='/images/minus.svg' alt='minus' /></td>
                  <td><img src='/images/check.svg' alt='check' /></td>
                </tr>
              </table>
            </div>
          </div>
          
        </div>
        

      </div>

    </div>
  );
}

export default App;
