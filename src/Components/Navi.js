import React from "react";
import styles from '../styles/navi.module.css';
import { NavLink, Outlet } from "react-router-dom";




function Navi({basket}) {

    
    return(
    <div  >
       <div className={styles.backColor} >
           <h1 className={styles.logo}>Market App</h1>
              <nav className={styles.link}   >
                  <span  >
                 
                      <NavLink className={styles.linkDetail} to="/product">
                      Ürünler
                      </NavLink>
                  </span>
                  <span >
                      <NavLink className={styles.linkDetail} to="/basket">
                            Sepet
                            
                      </NavLink >
                  </span>
              </nav>

       </div>
         <div className={styles.bgg}>
             <Outlet>   </Outlet>
         </div>
    </div>
    )
}

export default Navi;