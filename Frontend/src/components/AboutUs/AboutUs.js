import React, { useContext, useEffect } from 'react'

// Imagenes
import logo from '../../Assets/img/LogoSucur.png'
import aboutIcon from '../../Assets/aboutImg/about.png'
import historyIcon from '../../Assets/aboutImg/scroll.png'
import locationIcon from '../../Assets/aboutImg/map-g2f6563a0e_1280.png'
import imgVision from '../../Assets/aboutImg/vecteezy_curious-man-looking-far-away-with-hand-over-head-trying-to_6552176.jpg'
import imgMision from '../../Assets/aboutImg/vecteezy_flag-on-the-high-graph-peak-business-concept-of-goal_.jpg'

// Styles
import '../../Styles/AboutUs/aboutUs.css'

// Context
import StoreContext from '../../Context/Store/StoreContext'

// Components
import Navegation from '../General/Navegation'

export default function AboutUs() {

    const storeContext = useContext(StoreContext)
    const {infoTienda, redesSociales, correos, telefonos, getInfoTienda} = storeContext

    useEffect(() => {
        getInfoTienda()
    })

  return (
    <div className='bodyAboutUs'>
        <Navegation /> 
        <img className='logoAbout' src={logo} alt='' />
        <div className='contAbout'>
            <div className='contTitleAbout'>
                <h2>¿Quienes somos?</h2>
            </div>
            <p>Al comparar los mockups iniciales, podremos observar que el color que se utilizó no era el más adecuado con respecto a lo que la empresa quería transmitir, el cliente también exigió algunos cambios. También tomamos en cuenta las clases recibidas para hacer los respectivos ajustes en ciertas interfaces que encontramos falencias.</p>
            <img className='imgContAbout' src={aboutIcon} alt=''/>
        </div>
        <div className='contHistory'>
            <div className='contTitleHistory'>
                <h2>Nuestra historia</h2>
            </div>
            <p>Al comparar los mockups iniciales, podremos observar que el color que se utilizó no era el más adecuado con respecto a lo que la empresa quería transmitir, el cliente también exigió algunos cambios. También tomamos en cuenta las clases recibidas para hacer los respectivos ajustes en ciertas interfaces que encontramos falencias.</p>
            <img className='imgContHistory' src={historyIcon} alt=''/>
        </div>
        <div className='contMisionVision'>
            <div className='contMision'>
                <div className='contTitleMision'>
                    <h2>Mision</h2>
                </div>
                <p>Al comparar los mockups iniciales, podremos observar que el color que se utilizó no era el más adecuado con respecto a lo que la empresa quería transmitir, el cliente también exigió algunos cambios. También tomamos en cuenta las clases recibidas para hacer los respectivos ajustes en ciertas interfaces que encontramos falencias.</p>
                <img src={imgMision} alt=''/></div> 
            <div className='contVision'>
                <div className='contTitleVision'>
                    <h2>Vision</h2>
                </div>
                <p>Al comparar los mockups iniciales, podremos observar que el color que se utilizó no era el más adecuado con respecto a lo que la empresa quería transmitir, el cliente también exigió algunos cambios. También tomamos en cuenta las clases recibidas para hacer los respectivos ajustes en ciertas interfaces que encontramos falencias.</p>
                <img src={imgVision} alt=''/>
            </div> 
        </div>
        <div className='contLocation'>
            <div className='contTitleLocation'>
                <h2>¿Donde estamos ubicados?</h2>
            </div>
            <div className='contTextImg'>
                <img src={locationIcon} alt=''/>
                <p>Al comparar los mockups iniciales, podremos observar que el color que se utilizó no era el más adecuado con respecto a lo que la empresa quería transmitir, el cliente también exigió algunos cambios. También tomamos en cuenta las clases recibidas para hacer los respectivos ajustes en ciertas interfaces que encontramos falencias.</p>
            </div>
        </div> 
    </div>
  )
}
