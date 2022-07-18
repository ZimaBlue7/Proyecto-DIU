import React, { Fragment } from 'react'
import {Container,Wrapper,LogoEspacio,LogoContainer,Menu,MenuItem,MenuItemLink,MenuItemLinkE} from '../NabvarPt1/Narbar.elements'
import { AiOutlineShoppingCart } from "react-icons/ai";

import imagenes from '../../../assets/imagenes.js';

const BarraNavegacion = () => {

    return(
        <Fragment>
             <Container>
        <Wrapper>

          <LogoEspacio>
          <img src={imagenes.Logo} alt="Logo" className='Logo1' />
          </LogoEspacio>
            
          <Menu>
            <MenuItem>
              <MenuItemLink>
              Acerca de
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
              Productos
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
              Contacto
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLinkE>
              Carrito
              </MenuItemLinkE>
            </MenuItem>
            <LogoContainer>
              <AiOutlineShoppingCart/>
              </LogoContainer>
          </Menu>

          <LogoContainer>
              <AiOutlineShoppingCart/>
              </LogoContainer>

            {/* Imagen de usuario para que pueda ingresar a su perfil */}

        </Wrapper>
    
        </Container>
        </Fragment>
    )
}

export default BarraNavegacion;