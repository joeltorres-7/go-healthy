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

    }

    @media only screen and (max-width: 810px) {
        #footer-identity-row {
            flex-direction: column;
        }
    }

    @media only screen and (max-width: 650px) {

        // Welcome Page

        #rolling-box {
            min-width: 45vw;
        }

        #gatsby-focus-wrapper {
            overflow: hidden;
        }

        #carousel {
            flex-direction: column;

            h1 {
                margin-bottom: 0.6rem;
            }
        }

        #social-nav, #scroll-message {
            display: none;
        }

        #navbar {
            justify-content: space-between;

            .link {
                display: none;
            }

            .menu-icon {
                display: block;
            }

            #nav-logo {
                justify-self: flex-start;
            }
        }

        // Dots

        #dot-box {
            .blue-dot {
                height: 2rem;
                width: 2rem;
                position: fixed;
                top: 14rem;
                right: 4rem;
                border-radius: 100%;
                background: #118AB2;
            }

            .blue-dot-rev {
                height: 1.5rem;
                width: 1.5rem;
                position: fixed;
                top: 6rem;
                left: 3rem;
                border-radius: 100%;
                background: #118AB2;
            }

            .yellow-dot-rev, .pink-dot {
                display: none;
            }
        }

        .section-subtitle {
            line-break: auto;
            max-width: 60vw;
            text-align: center;
        }
    }

    @media only screen and (max-width: 550px) {
        #rolling-box {
            min-width: 55vw;
        }
    }

    @media only screen and (max-width: 450px) {
        #rolling-box {
            min-width: 65vw;
        }

        p .section-title {
            min-width: 60vw;
        }
    }

    @media only screen and (max-width: 380px) {
        #rolling-box {
            min-width: 76vw;
        }

        .section-title {
            min-width: 40vw;
        }
    }

    // Queries: Height

    @media only screen and (max-height: 430px) {

        // Welcome Page

        #social-nav, #scroll-message {
            display: none;
        }

    }
`;

export default GlobalStyles;