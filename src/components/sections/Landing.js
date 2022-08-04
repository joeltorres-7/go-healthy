import * as React from 'react';
import Layout from '../Layout';
import Previews from '../Previews';
import styled from 'styled-components';

// Styles

const SectionWelcome = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2rem 5rem 0rem 5rem;
    font-size: 0.8rem;
    justify-content: center;
    padding: 0;
    width: fit-content;
    min-height: 100vh;

    div {
        width: fit-content;
        display: flex;

        &.text {
            flex-direction: column;
        }

        &.previews {
            display: flex;
            flex-direction: row;
            align-items: center;

            img {
                &.watch {
                    width: 8rem;
                    height: 13rem;
                    z-index: 4;

                    transform: rotate(15deg)
                }
                
                &.phone {
                    width: 16rem;
                    height: 32rem;
                    z-index: 2;

                    transform: rotate(-15deg)
                }
            }
        }
    }

    h2 {
        display: inline-flex;
        margin: .1rem;
        font-size: 2.5rem;
        width: fit-content;
        white-space: nowrap;
    }

    p {
        width: 30vw;
        font-weight: 400;
        margin-top: 1rem;

        &.description {
            font-size: 1.1rem;
        }
    }

    .download-div {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 0.5rem;
    }
    
    .action-button {
        background: #048A81;
        color: #E2FADB;
        border-radius: 0.5rem;
        padding: 0.8rem 1.5rem;
        cursor: pointer;
        transition-duration: 0.5s;

        &:hover {
            transform: scale(1.1);
        }
      }
  
    .link {
       color: #048A81;
       margin-right: 2rem;
       cursor: pointer;
    }

    .icon {
       width: 1rem;
       height: 1rem;
       margin: 0rem 0.5rem 0rem 2rem;
    }

    // Set Scrollbar for Firefox
    html {
        overflow-y: scroll;
        scrollbar-color: #0A4C95 #C2D2E4;
    }
    
    // Set scrollbar default for Chrome
     /* width */
    html::-webkit-scrollbar {
        width: 6px;
    }
    
    /* Track */
    html::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    
    /* Handle */
    html::-webkit-scrollbar-thumb {
        background: #888;
    }
    
    /* Handle on hover */
    html::-webkit-scrollbar-thumb:hover {
        background: #555;
    } 
`;

const GreenDot = styled.div`
    width: 12rem;
    height: 12rem;
    border-radius: 100%;
    position: fixed;
    background: #E2FADB;
    padding: 10rem;
    z-index: -10;

    &.top-left {
        top: -10rem;
        left: -10rem;
    }

    &.bottom-right {
        bottom: -8rem;
        right: -8rem;
    }
`;

const Landing = () => {
    return (
        <Layout className="text-preview-div">
            <GreenDot className="top-left"/>
            <GreenDot className="bottom-right"/>
            <SectionWelcome id='landing-main'> 
                <div className="text">
                    <h2>De tu reloj, a<br/>tu celular.</h2>
                    <p className="description">¡Lleva un registro detallado de tu salud conectando GoHealthy con su reloj inteligente!</p>
                    <div className="download-div">
                        <a class="action-button">Descargar la app</a>
                        <img className="icon" src={Previews.star} alt='Icon of a star.' />
                        <p>4.8 en <span className="link">App Store</span></p>
                    </div>
                </div>
                <div className="previews">
                    <img className="watch" src={Previews.watch}/>
                    <img className="phone" src={Previews.phone}/>
                </div>
            </SectionWelcome>
        </Layout>
    )
}

export default Landing