function Product() {

    return (
      <div className='product-panel'>
                    <p>Palyginti</p>
                    <div className='green-box'>Išsiuntimas tą pačią dieną*</div>
                    <div className='green-box'>Veikia be telefono</div>
                    <div className='green-box'>Su eSIM paslauga</div>
  
                    <div className='esim-cont'>
                      <img src='/images/esim-contour.svg' alt='esim-logo' />
                      <div class="centered">eSIM</div>
                    </div>
                    
                    <img src='/images/products-watch.svg' alt='esim-watch' />
                    <div className='prod-name'>
                      <p>Apple</p>
                      
                      <h3>Watch GT3 išmanusis laikrodis</h3>
                    </div>
  
                    <div className='price-container'>
                      <div className='line1'>
                        <p className='strikethrough'>12,47 €</p>
  
                        <p className='red-p'>329,40 €</p>
                      </div>
                      <div className='line2'>
                        <p className='large-p'>9,15 €</p><p className='nopad-p'>/ mėn.</p>
                      </div>
                      <div className='line3'>
                        <p className='bold-p'>327,40 €</p>
                        <p className='regular-p'>499,40 €</p>
                      </div>
                      
                      
                    </div>
                    
  
                    
  
                  </div>
    );
  }

  export default Product;