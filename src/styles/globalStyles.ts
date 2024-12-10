'use client'
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body{
        max-width: 100vw;
        width: 100vw;
        overflow-x: hidden;
        background-color: #B0B0B0;
        height: 100vh;
        scroll-behavior: smooth;
    }
`