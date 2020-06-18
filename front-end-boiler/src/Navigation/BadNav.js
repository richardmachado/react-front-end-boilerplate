import React from 'react';
import { useHistory} from 'react-router-dom';
import {Head, HeadContainer, HLeft, HRight} from './styled-components';


import "./styles.css"

function BadNav() {
    const history = useHistory();
  
    const delToken = () => {
      localStorage.removeItem("token"); 
      history.push("/logout");
    }
  
    return(
      <HeadContainer>
        <Head>
            <HLeft>
                <div id="headerLogo"> {/* Header Logo Here */} </div>
                <div className="hLeft">
                  <h1 id="app-name">Need to fix</h1>
                  <span id="app-description">Login doesn't refresh</span>
                </div>
            </HLeft>
          <HRight>
          {localStorage.getItem("token")  && (
            <div id="header-login" onClick={delToken}>Log Out</div>
          )}
          {!localStorage.getItem("token")  && (
            <div id="header-login" onClick={()=>history.push("/Login")}>Log In</div>
          )}
            
          </HRight>
        </Head>
      </HeadContainer>
    );
  }
  
  export default BadNav