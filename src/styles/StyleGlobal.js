import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` :root {
    font-size: 60%;
    --color-primary: #de8f75;
    --color-secondary: #5f75aa;
    --color-background: #FFFFFF;
    --color-login: #686868;
    --color-border-icon: rgba(104, 104, 104, 0.4);
    --color-text-menu: #AEB6C1;
    --color-complement3: #a9095e;
    --color-complement4: #2a5a75;
    --color-black: #000;
    --color-white: #fff;
    --color-sucess: #32917b;
    --color-gray: #f2f2f2;
    --color-gray-dark: #ebebeb;
    --color-gray-light: #e3e3e3;
    --color-border: #CCCCCC;
    --color-gray-complement1: #adadad;
    --color-gray-complement2: #7f7f7f;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: "Montserrat", sans-serif;
}

html,
body {
    overflow-x: hidden;
    background: rgba(255, 255, 255, 0.9);
   
}

button {
    cursor: pointer;
}

.header-empty-space {
    display: flex;
    height: 159px;
    background: #000;
    position: absolute;
}

.shop {
    margin-left: 20px;
}

/* square buttons */
.rec.rec-arrow {
    display: none;
}
/* round buttons on hover */
.rec.rec-arrow:hover {
    display: none;
}
/* hide disabled buttons */
.rec.rec-arrow:disabled {
    display: none;
}
/* disable default outline on focused items */
/* add custom outline on focused items */
.rec-carousel-item:focus {
    display: none;
}

.carrol {
    @media (max-width: 767px) {
        margin-right: 0;
        width: 100%;
    }
}


/* MOBILE */

@media (max-width: 767px) {
    .header-empty-space {
        height: 100px;
    }
    .col-md-text-right {
        text-align: center;
    }
}

`;
