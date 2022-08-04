import React from 'react';
import Previews from '../Previews';
import styled from 'styled-components';

const FooterStyle = styled.div`
    z-index: 20;
    background: #048A81;
    color: #fffffe;
    padding: 4rem 0rem;
    margin: 0;
    font-size: 0.8rem;

    div {
        display: flex;
        flex-direction: column;
        margin: 0rem 5rem;

        &.identity-footer {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 0rem;

            .sitemap {
                display: flex;
                    flex-direction: row;
                ul {
                    list-style: none;
                    width: fit-content;
                    
                    li {
                        padding: 0.5rem 1.5rem;

                        &.title {
                            font-weight: 700;
                        }
                    }
                }
            }
        }

        &.copyright-footer {
            display: flex;
            flex-direction: row;
            margin-top: 2rem;
            justify-content: space-between;

            .social-icons {
                display: flex;
                flex-direction: row;
                margin: 0;

                a {
                    margin: 0rem 1rem;

                    &.border {
                        margin-right: 0rem;
                    }
                }
            }
        }
    }

    a {
        text-decoration: none;
        color: #fffffe;

        img {
            width: 1.2rem;
        }
    }

    h2 {
        font-size: 1.1rem;
    }

    p {
        font-weight: 500;
        font-size: 0.7rem;
        width: 80%;
        line-height: 1rem;
        text-align: left;
        margin: 1rem 0rem;
    }

    input {
        width: 60%;
        border-radius: 0.5rem;
        border: none;
        padding: 0.8rem 1.5rem;
        background: url(../images/icons/send-arrow.svg) no-repeat #fffffe scroll 7px 7px;
        padding-left:30px;
    }
`

const Footer = () => {
    return (
        <FooterStyle>
            <div id="footer-identity-row" className="identity-footer">
                <div className="newsletter">
                    <h2>GoHealthy</h2>
                    <p>¡Suscríbete a nuestra newsletter para recibir promociones y descuentos!</p>
                    <input placeholder='Correo electronico'/>
                </div>
                <div className="sitemap">
                    <ul>
                        <li className="title">GoHealthy para</li>
                        <li><a href='#'>Pacientes y familiares</a></li>
                        <li><a href='#'>Doctores</a></li>
                        <li><a href='#'>Administrativo</a></li>
                    </ul>
                    <ul>
                        <li className="title">Recursos</li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>Centro de Ayuda</a></li>
                        <li><a href='#'>Terminos y privacidad</a></li>
                    </ul>
                    <ul>
                        <li className="title">Compañia</li>
                        <li><a href='#'>Nosotros</a></li>
                        <li><a href='#'>Empleos</a></li>
                        <li><a href='#'>Centro de ventas</a></li>
                    </ul>
                </div>
            </div>
            <div id="footer-copy-row" className="copyright-footer">
                <p>Copyright © 2022 GoHealthy. Todos los derechos reservados.</p>
                <div className="social-icons">
                    <a href='#'><img src={Previews.facebook}/></a>
                    <a href='#'><img src={Previews.twitter}/></a>
                    <a href='#' className="border"><img src={Previews.instagram}/></a>
                </div>
            </div>
        </FooterStyle>
    )
}

export default Footer