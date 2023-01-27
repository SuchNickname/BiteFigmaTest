
import './navbar.css';
import '../styles/base.css';

function Navigation() {


    return(
        <div>

        
            <div className='sticky-header__main'>
                <div className='sticky-header__container'>
                    <ul class='sticky-menu _main'>
                        <li className='sticky-menu__item'><a href='#test' class='segment-switch sticky-menu__link'>Privatiems</a></li>
                        <li className='sticky-menu__item'><a href='#test' class='segment-switch sticky-menu__link'>Verslui</a></li>
                        
                        <form method="post" className="bite-search-form main-search">
                            <input type='search' className='main-search__inp form-search' placeholder='Ieškoti' />
                            


                        </form>
                    </ul>
                    <ul>

                        <li className='sticky-menu__item'><a href='#test' className='segment-switch sticky-menu__link'>labas</a></li>
                        <li className='sticky-menu__item'><a href='#test' className='segment-switch sticky-menu__link'>Apie mus</a></li>
                        <li className='sticky-menu__item'><a href='#test' className='segment-switch sticky-menu__link'>Profai</a></li>
                        <li className='sticky-menu__item'><a href='#test' className='segment-switch sticky-menu__link'>Salonai</a></li>
                        <li className='sticky-menu__item'><a href='#test' className='segment-switch sticky-menu__link'>Pagalba</a></li>
                    </ul>
                </div>
                
                

            </div>
            <div className='sticky-header__sub'>
                    <ul className=''>
                        <li>Test</li>
                        <li>test</li>
                    </ul>

                </div>
        </div>
    );


}

export default Navigation;