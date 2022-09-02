// 여기는 페이지의 css를 초기화 하는 곳입니다!!
import { css } from '@emotion/react'
import * as B from './basic'

export const resetStyles = css`
    html {
        font-size: 100%!important;
        @media (min-width: ${B.bigTablet}px) and (max-width: ${B.noteBook - 1}px) {
            font-size: 5vw!important;
        }
        @media (min-width: ${B.smallTablet}px) and (max-width: ${B.bigTablet - 1}px) {
            font-size: 5vw!important;
        }
        @media (min-width: ${B.mobile}px) and (max-width: ${B.smallTablet - 1}px) {
            font-size: 5vw!important;
        }
        @media (max-width: ${B.mobile - 1}px) {
            font-size: 5vw!important;
        }
    }
    @font-face {
        font-family: "Binggrae";
        src: url("/font/Binggrae.ttf") format("truetype");
        font-weight: normal;
    }
    @font-face {
        font-family: "Binggrae";
        src: url("/font/Binggrae-Bold.ttf") format("truetype");
        font-weight: bold;
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
	    padding: 0;
	    border: 0;
	    font-size: 100%;
	    font: inherit;
        font-family: -apple-system, Binggrae, sans-serif!important;
	    vertical-align: baseline;
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
	    line-height: 1;
    }
    ol, ul {
	    list-style: none;
    }
    blockquote, q {
	    quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
	    content: '';
	    content: none;
    }
    table {
	    border-collapse: collapse;
	    border-spacing: 0;
    }
    img {
	    display: block;
	    width: 100%;
	    height: 100%;
    }
    video {
	    width: 100%;
	    height: 100%;
    }
`;