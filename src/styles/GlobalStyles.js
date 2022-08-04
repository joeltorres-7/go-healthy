import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');

    html {
        padding: 0;
        margin: 0;
    }

    * {
        -ms-overflow-style: none;
    }
    
    ::-webkit-scrollbar {
        display: none;
    }   

    body {
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        color: #04151F;
    }

    html, body {
        scroll-behavior: smooth;
    }

    h1 {
        font-size: 2.4rem;
        font-weight: 600;
        margin: 0;
    }

    h2 {
        font-size: 1.2rem;
        font-weight: 600;
        margin: .2rem;
    }

    p {
        font-size: .9rem;

        &.section-title {
            line-height: 1.3rem;
        }
    }

    // Universal Classes

    .text-preview-div {
        display: flex;
        flex-direction: row;
    }

    // Floating previews

        .previews {
            .watch {
                animation: floating-watch 4s linear infinite;
            }

            .phone {
                animation: floating-phone 6s linear infinite;
            }
        }

    // Animations

    @keyframes floating-watch {
        0% {
            transform: translateY(0rem) rotate(15deg);
        } 50% {
            transform: translateY(1rem) rotate(15deg);
        } 100% {
            transform: translateY(0rem) rotate(15deg);
        }
    }

    @keyframes floating-phone {
        0% {
            transform: translateY(0rem) rotate(-15deg);
        } 50% {
            transform: translateY(1rem) rotate(-15deg);
        } 100% {
            transform: translateY(0rem) rotate(-15deg);
        }
    }

    // Queries: Width

    @media only screen and (max-width: 1100px) {

        // Welcome Page

        #navbar {
            a {
                font-size: 0.6rem;
            }
        }

        #landing-main {

            .action-button {
                text-align: center;
                font-size: 0.6rem;
                min-width: 12vw;
            }

            .description {
                width: 80vw;
            }
        }

        .newsletter {
            p {
                width: 100%;
            }
        }

        .sitemap {
            ul {
                padding-left: 20px;
            }

            input {
                width: 100%;
            }
        }
    }

    @media only screen and (max-width: 900px) {

        // Welcome Page

        .nav-hide {
            display: none;
        }

        #navbar {
            a {
                &.link {
                    margin-right: 5rem;
                }
            }
        }

        #landing-main {
            flex-direction: column;
            margin: 10rem auto 2rem auto;

            .previews {
                margin: 5rem 5rem;
            }
        }

    }

    @media only screen and (max-width: 810px) {
        #footer-identity-row {
            flex-direction: column;

            .newsletter {
                align-items: center;
                justify-content: center;
                
                p {
                    text-align: center;
                }

                input {
                    width: 60%;
                }
            }

            .sitemap {
                margin-top: 2rem;
                ul {
                    text-align: center;
                }
            }
        }
    }

    @media only screen and (max-width: 650px) {
        #gatsby-focus-wrapper {
            overflow: hidden;
        }

        #navbar {
            justify-content: space-between;

            .link-nav, .link {
                display: none;
            }

            .menu-icon {
                display: block;
            }

            .landing-logo {
                margin-left: 2rem;
            }
        }

        #landing-main {
            margin: 10rem auto 2rem auto;

            .previews {
                margin: 5rem 0rem;
            }
        }

        #footer-identity-row {
            .sitemap {
                flex-direction: column;
                align-items: center;
                margin: 2rem auto;
                ul {
                    text-align: center;
                }   
            }
        }

        #footer-copy-row {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;

            p {
                text-align: center;
            }

            .social-icons {
                justify-content: center;
                align-center: center;
                width: 1.5rem;
                margin: 2.5rem 0;
            }
        }
    }
`;

export default GlobalStyles;