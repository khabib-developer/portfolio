import styled, { createGlobalStyle, css } from "styled-components";

const FontToken = css`
  @media (min-width: 787px) {
    --font-sm: 0.875em;
    --font-md: 1.124em;
    --font-x-md: 1.667em;
    --font-x-lg: 3.275em;
  }
  @media (max-width: 787px) {
    --font-sm: 0.813em;
    --font-md: 1.011em;
    --font-x-md: 1.517em;
    --font-x-lg: 2.775em;
  }
`;

const LightTheme = css`
  :root {
    --bg: #fffdfc;
    --bcg: rgba(255, 255, 255, 1);
    // --bcg: rgba(0, 0, 0, 1);
    --button-index: #f4f1ee;
    --cw: #000;
    --invert: 0;
    --mark: #f9f7f6;
    --theme-amount: 0;
    --gray: #d6d6d6;
    --pattern: #f8f7f7;
    --light-gray: #dedede;
    --lighter-gray: #f5f5f5;
    --article-color: #545454;
    --header-bg: rgba(255, 255, 255, 0.8);
    --token: #666;
    --border-color: #eaeaea;
    --sidebar-tag: #efe9e4;
    --gray-alpha: #f6f4f06b;
    --sidebar-cta: #0b0c15;
    --nav-link: rgba(0, 0, 0, 0.5);
    --timeline: #e0e0e0;
    ${FontToken}
  }
`;

const DarkTheme = css`
  :root {
    --bg: #020a13;
    --bcg: rgba(0, 0, 0);
    // --bcg: rgba(0, 0, 0, 0.05);
    --invert: 1;
    --theme-amount: 1;
    --cw: #e1e1e1;
    --gray: #9e9e9c;
    --pattern: transparent;
    --light-gray: #444;
    --lighter-gray: #222;
    --article-color: #c6c6c6;
    --header-bg: rgba(19, 20, 21, 0.8);
    --token: #999;
    --border-color: #14202b;
    --button-index: #091521;
    --mark: #080f18;
    --sidebar-tag: #13283e;
    --sidebar-cta: #3f566e;
    --gray-alpha: #07121dd4;
    --timeline: #0f1923;
    --nav-link: rgba(255, 255, 255, 0.8);
    ${FontToken}
  }
`;

export const BodyStyling = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap');

  ${(props) => (props.theme ? DarkTheme : LightTheme)}
  ::selection {
    background: var(--token);
    color: #fff;
  }

  ::-moz-selection {
    background: var(--token);
    color: #fff;
  }

  /*::placeholder { color: #c5c5c5 !important; font-weight: 300 !important }*/
  ::-webkit-input-placeholder {
    color: var(--light-gray);
    opacity: 1;
  }

  :-moz-placeholder {
    color: var(--light-gray);
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: var(--light-gray);
    opacity: 1;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }


  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
    Helvetica, sans-serif;
  }


  body {
    background: var(--bcg) !important;
    padding-right: 0px !important;
    font-family: "Blorado", sans-serif;
    margin: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

  }

  html {
    scroll-behavior: smooth;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
  }


  svg {
    fill: var(--article-color);

    &.logo__section {
      path {
        fill: var(--cw);
      }
    }
  }

  a, h1, h2, h3, h4, h5, h6, p, button, input[type=text], input[type=date], input[type=password], input[type=value], b, label, td, select, textarea, th {
    font-family: "Blorado", sans-serif;
    text-rendering: geometricPrecision;
    color: var(--cw)
  }

  :focus {
    outline-color: var(--cw) !important;
  }

  a {
  text-decoration:none

  }

  mark.mark {
    color: inherit;
    padding: 0;
    background: none;
    background-image: linear-gradient(120deg, var(--mark) 0%, var(--mark) 100%);
    background-repeat: no-repeat;
    background-size: 0% .3em;
    background-position: 0 80%;
    position: relative;
    background-size: 100% .3em;
  }

  .loading-img {
    object-fit: contain !important;
    transform: scale(0.5);
  }

  .page-transition-enter {
    opacity: 0;
  }

  .page-transition-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }

  .page-transition-exit {
    opacity: 1;
  }

  .page-transition-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }

  .scout__bar-wrapper {
    --scout-white: var(--bg);
    --scout-theme-black: var(--cw);
    --scout-light-grey: var(--border-color);
    --scout-theme-grey: var(--gray);
    --scout-theme-card-hover: var(--gray-alpha);
    --scout-theme-keyboard: 0px 2px 0px 2px #8d8d8d;
    --scout-tutorial-grey: #494949
    --scout-box-shadow: 1px 2px 16px 10px rgba(0, 0, 0, 0.05);
  }
`;

export const Header = styled.header`
  padding: 50px 0;
  transition: all 0.5s ease;

  nav {
    background: transparent !important;

    .nav-link {
      color: var(--nav-link) !important;

      svg {
      }
    }

    .navbar-nav {
      @media (max-width: 992px) {
        display: block !important;
        overflow: auto;
      }
    }

    .logo {
      font-size: 2.4em;
      font-weight: 500;
    }
  }

  #nav {
    transition: all 0.5s ease;

    &.fixed-top {
      position: fixed;
      top: 0;
      background: var(--gray-alpha) !important;
      right: 0;
      left: 0;
      padding: 15px 19px;
      z-index: 1030;
    }
  }

  .navbar-toggler {
    color: rgba(255, 255, 255, 0.5);
    border-color: transparent;

    &-icon {
      filter: invert(var(--theme-amount));
    }
  }

  .nav-item.hover__bottom {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
    @media (max-width: 992px) {
      display: block;
      text-align: center;
      width: fit-content;
      margin: 3rem auto;
    }

    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      left: 51%;
      right: 51%;
      bottom: 1.5px;
      background: var(--article-color);
      height: 1px;
      -webkit-transition-property: left, right;
      transition-property: left, right;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }

    .nav-link:hover {
      font-weight: bold;
    }

    &:hover:before,
    &:focus:before,
    &:active:before {
      left: 0;
      right: 0;
    }
  }

  .nav-item > a {
    padding: 8px 15px !important;
    font-size: calc(var(--font-sm) + 0.9px);
  }

  #collapsibleNavbar .is-active {
    font-weight: 900;
    border-bottom: 1px solid var(--cw);
    color: var(--cw) !important;
    @media (min-width: 992px) {
      display: none;
    }
  }

  .navbar-border-collapse.show {
    background: red;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 99;
    height: 84vh;
  }

  @media (max-width: 992px) {
    padding: 20px 0 0;
    .navbar-brand {
      svg {
        width: 60px;
      }
    }

    .navbar-collapse {
      background: var(--bg);
      position: fixed;
      z-index: 9999;
      width: 100%;
      transition: all 1s ease;
      left: 0;
      bottom: 0;
      animation-name: opacitys;
      animation-duration: 1s;
      height: 100%;

      .nav-svg,
      .close-nav {
        position: absolute;
        right: 60px;
        top: 60px;
        border: none;
        background: transparent;
        width: fit-content;
      }

      ul {
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;

        li {
          margin-bottom: 2rem;

          .nav-link {
            font-size: calc(var(--font-md) + 1.8px);
            font-weight: 800;
            text-transform: uppercase;
            @media (max-width: 992px) {
              &:focus {
                border: 1px solid var(--cw);
              }
            }
          }

          .nav-svg {
            left: 60px !important;
          }
        }
      }
    }

    @keyframes opacity {
      from {
        opacity: 0.5;
      }
      from {
        opacity: 1;
      }
    }
  }
`;

export const SocialMedia = styled.div`
  background: transparent;
  padding: 1rem 0;

  a {
    transition: all 1s ease;

    padding: 0 12px;

    &:first-child {
      padding-left: 0;
    }
  }

  svg {
    height: 15px;
    fill: var(--article-color);
    transition: all 1s ease;

    &:hover {
      stroke: var(--article-color);
      stroke-width: 1px;
      stroke-opacity: 0.8;
    }
  }

  @media (max-width: 992px) {
    position: fixed;
    backdrop-filter: blur(6px) saturate(2.5);
    background: var(--gray-alpha) !important;
    width: 100% !important;
    display: flex;
    padding: 0 !important;
    right: 0;
    z-index: 999;
    flex-direction: row !important;
    height: 60px !important;
    bottom: 0px !important;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const BackLay = styled.div`
  margin: 0;

  h1 {
    font-family: Abril FatFace;
    font-size: 29.42vmin;
    ${(props) =>
      props.title === "About Me" ||
      props.title === "Contact" ||
      props.title === "Home"
        ? css`
            writing-mode: unset;
          `
        : css`
            writing-mode: tb-rl;
          `}

    letter-spacing: -0.3rem;
    white-space: pre;
    color: var(--mark);
    position: fixed;
    left: -4rem;
    transition: all 0.8s ease;
    opacity: 1;
    z-index: -1;
    bottom: 0px;
  }
`;

export const Main = styled.main`
  min-height: 100vh;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  #stars {
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: 1487px 822px ${(props) => props.color},
      702px 619px ${(props) => props.color},
      579px 76px ${(props) => props.color}, 881px 14px ${(props) => props.color},
      1903px 741px ${(props) => props.color},
      1401px 1791px ${(props) => props.color},
      1316px 857px ${(props) => props.color},
      1628px 1376px ${(props) => props.color},
      1641px 781px ${(props) => props.color},
      1421px 25px ${(props) => props.color},
      525px 254px ${(props) => props.color},
      683px 1197px ${(props) => props.color},
      1636px 1573px ${(props) => props.color},
      1855px 1220px ${(props) => props.color},
      108px 1424px ${(props) => props.color},
      906px 1967px ${(props) => props.color},
      205px 1681px ${(props) => props.color},
      1930px 731px ${(props) => props.color},
      1957px 104px ${(props) => props.color},
      1558px 24px ${(props) => props.color},
      211px 468px ${(props) => props.color},
      2px 1001px ${(props) => props.color},
      664px 1095px ${(props) => props.color},
      1023px 1573px ${(props) => props.color},
      272px 122px ${(props) => props.color},
      659px 1641px ${(props) => props.color},
      1518px 1633px ${(props) => props.color},
      1736px 1016px ${(props) => props.color},
      1085px 1911px ${(props) => props.color},
      737px 1784px ${(props) => props.color},
      564px 968px ${(props) => props.color},
      150px 1277px ${(props) => props.color},
      1848px 505px ${(props) => props.color},
      1067px 1414px ${(props) => props.color},
      1619px 1498px ${(props) => props.color},
      266px 757px ${(props) => props.color},
      450px 1052px ${(props) => props.color},
      604px 1178px ${(props) => props.color},
      1069px 1215px ${(props) => props.color},
      1045px 1816px ${(props) => props.color},
      1682px 1111px ${(props) => props.color},
      578px 1875px ${(props) => props.color},
      1197px 20px ${(props) => props.color},
      736px 1923px ${(props) => props.color},
      1698px 592px ${(props) => props.color},
      491px 1835px ${(props) => props.color},
      106px 1113px ${(props) => props.color},
      1944px 1749px ${(props) => props.color},
      677px 525px ${(props) => props.color},
      798px 1663px ${(props) => props.color},
      463px 19px ${(props) => props.color},
      1982px 1091px ${(props) => props.color},
      736px 1597px ${(props) => props.color},
      244px 1625px ${(props) => props.color},
      1699px 1257px ${(props) => props.color},
      624px 114px ${(props) => props.color},
      1290px 48px ${(props) => props.color},
      1007px 1111px ${(props) => props.color},
      1411px 31px ${(props) => props.color},
      1661px 1065px ${(props) => props.color},
      1583px 1593px ${(props) => props.color},
      1165px 1985px ${(props) => props.color},
      351px 222px ${(props) => props.color},
      158px 709px ${(props) => props.color},
      1304px 194px ${(props) => props.color},
      1192px 1923px ${(props) => props.color},
      358px 1642px ${(props) => props.color},
      889px 1701px ${(props) => props.color},
      424px 1427px ${(props) => props.color},
      1928px 573px ${(props) => props.color},
      1263px 1473px ${(props) => props.color},
      498px 33px ${(props) => props.color},
      1043px 286px ${(props) => props.color},
      843px 1917px ${(props) => props.color},
      909px 813px ${(props) => props.color},
      1033px 291px ${(props) => props.color},
      41px 749px ${(props) => props.color},
      1807px 1719px ${(props) => props.color},
      1984px 284px ${(props) => props.color},
      1983px 1696px ${(props) => props.color},
      1409px 179px ${(props) => props.color},
      1350px 929px ${(props) => props.color},
      332px 1747px ${(props) => props.color},
      212px 1977px ${(props) => props.color},
      1668px 1254px ${(props) => props.color},
      1585px 1736px ${(props) => props.color},
      783px 85px ${(props) => props.color},
      1961px 847px ${(props) => props.color},
      1692px 996px ${(props) => props.color},
      1829px 694px ${(props) => props.color},
      965px 891px ${(props) => props.color},
      1793px 102px ${(props) => props.color},
      1347px 235px ${(props) => props.color},
      1566px 1954px ${(props) => props.color},
      1406px 1765px ${(props) => props.color},
      1346px 1832px ${(props) => props.color},
      452px 1205px ${(props) => props.color},
      1667px 1688px ${(props) => props.color},
      1337px 1664px ${(props) => props.color},
      1728px 832px ${(props) => props.color},
      1568px 1213px ${(props) => props.color},
      1980px 357px ${(props) => props.color},
      1096px 624px ${(props) => props.color},
      210px 636px ${(props) => props.color},
      1247px 1830px ${(props) => props.color},
      1789px 1970px ${(props) => props.color},
      582px 978px ${(props) => props.color},
      1473px 1002px ${(props) => props.color},
      1042px 440px ${(props) => props.color},
      1189px 879px ${(props) => props.color},
      24px 931px ${(props) => props.color},
      1656px 1848px ${(props) => props.color},
      401px 1676px ${(props) => props.color},
      192px 1632px ${(props) => props.color},
      970px 1936px ${(props) => props.color},
      231px 1849px ${(props) => props.color},
      1860px 127px ${(props) => props.color},
      469px 1487px ${(props) => props.color},
      436px 1899px ${(props) => props.color},
      680px 1290px ${(props) => props.color},
      809px 128px ${(props) => props.color},
      163px 683px ${(props) => props.color},
      1221px 1732px ${(props) => props.color},
      982px 801px ${(props) => props.color},
      149px 455px ${(props) => props.color},
      39px 1305px ${(props) => props.color},
      248px 1059px ${(props) => props.color},
      1985px 1040px ${(props) => props.color},
      823px 1174px ${(props) => props.color},
      1823px 12px ${(props) => props.color},
      1558px 1446px ${(props) => props.color},
      164px 348px ${(props) => props.color},
      504px 311px ${(props) => props.color},
      95px 1735px ${(props) => props.color},
      1817px 560px ${(props) => props.color},
      1527px 1792px ${(props) => props.color},
      296px 377px ${(props) => props.color},
      1480px 353px ${(props) => props.color},
      1419px 1148px ${(props) => props.color},
      734px 610px ${(props) => props.color},
      1233px 1076px ${(props) => props.color},
      1495px 198px ${(props) => props.color},
      1722px 1821px ${(props) => props.color},
      57px 914px ${(props) => props.color},
      81px 1967px ${(props) => props.color},
      157px 1383px ${(props) => props.color},
      478px 1545px ${(props) => props.color},
      96px 1485px ${(props) => props.color},
      1248px 1516px ${(props) => props.color},
      1989px 1475px ${(props) => props.color},
      730px 61px ${(props) => props.color},
      646px 342px ${(props) => props.color},
      656px 376px ${(props) => props.color},
      809px 1394px ${(props) => props.color},
      483px 1916px ${(props) => props.color},
      695px 1985px ${(props) => props.color},
      954px 279px ${(props) => props.color},
      1704px 234px ${(props) => props.color},
      204px 1621px ${(props) => props.color},
      490px 414px ${(props) => props.color},
      929px 1852px ${(props) => props.color},
      383px 1017px ${(props) => props.color},
      1319px 14px ${(props) => props.color},
      103px 1147px ${(props) => props.color},
      1780px 62px ${(props) => props.color},
      764px 318px ${(props) => props.color},
      950px 1468px ${(props) => props.color},
      767px 8px ${(props) => props.color},
      1038px 763px ${(props) => props.color},
      62px 680px ${(props) => props.color},
      1619px 817px ${(props) => props.color},
      1462px 1819px ${(props) => props.color},
      1340px 1956px ${(props) => props.color},
      1802px 902px ${(props) => props.color},
      1739px 1865px ${(props) => props.color},
      886px 854px ${(props) => props.color},
      1760px 1693px ${(props) => props.color},
      1571px 1175px ${(props) => props.color},
      1149px 1748px ${(props) => props.color},
      1521px 1213px ${(props) => props.color},
      575px 162px ${(props) => props.color},
      1904px 456px ${(props) => props.color},
      1399px 416px ${(props) => props.color},
      1325px 1118px ${(props) => props.color},
      1848px 478px ${(props) => props.color},
      1447px 841px ${(props) => props.color},
      457px 1619px ${(props) => props.color},
      1202px 1049px ${(props) => props.color},
      397px 682px ${(props) => props.color},
      465px 1042px ${(props) => props.color},
      1264px 1033px ${(props) => props.color},
      1304px 1004px ${(props) => props.color},
      649px 1586px ${(props) => props.color},
      97px 1308px ${(props) => props.color},
      21px 619px ${(props) => props.color},
      469px 1742px ${(props) => props.color},
      81px 1745px ${(props) => props.color},
      1735px 1208px ${(props) => props.color},
      805px 1206px ${(props) => props.color},
      717px 492px ${(props) => props.color},
      187px 1317px ${(props) => props.color},
      860px 1290px ${(props) => props.color},
      1964px 1712px ${(props) => props.color},
      1036px 142px ${(props) => props.color},
      1238px 442px ${(props) => props.color},
      1766px 423px ${(props) => props.color},
      925px 353px ${(props) => props.color}, 569px 5px ${(props) => props.color},
      1338px 383px ${(props) => props.color},
      1321px 90px ${(props) => props.color},
      1613px 749px ${(props) => props.color},
      409px 1835px ${(props) => props.color},
      642px 715px ${(props) => props.color},
      1402px 444px ${(props) => props.color},
      1669px 197px ${(props) => props.color},
      291px 1022px ${(props) => props.color},
      632px 1847px ${(props) => props.color},
      678px 810px ${(props) => props.color},
      570px 798px ${(props) => props.color},
      1521px 681px ${(props) => props.color},
      309px 176px ${(props) => props.color},
      1913px 882px ${(props) => props.color},
      1129px 1601px ${(props) => props.color},
      1310px 1490px ${(props) => props.color},
      883px 1925px ${(props) => props.color},
      1354px 140px ${(props) => props.color},
      1474px 628px ${(props) => props.color},
      1997px 230px ${(props) => props.color},
      351px 1212px ${(props) => props.color},
      576px 706px ${(props) => props.color},
      1210px 1325px ${(props) => props.color},
      1927px 315px ${(props) => props.color},
      1505px 1249px ${(props) => props.color},
      699px 1811px ${(props) => props.color},
      1428px 913px ${(props) => props.color},
      691px 1811px ${(props) => props.color},
      977px 1645px ${(props) => props.color},
      330px 260px ${(props) => props.color},
      1632px 1148px ${(props) => props.color},
      878px 1070px ${(props) => props.color},
      390px 1127px ${(props) => props.color},
      1915px 1956px ${(props) => props.color},
      805px 314px ${(props) => props.color},
      260px 623px ${(props) => props.color},
      1471px 1629px ${(props) => props.color},
      1333px 1800px ${(props) => props.color},
      1158px 1712px ${(props) => props.color},
      813px 641px ${(props) => props.color},
      608px 761px ${(props) => props.color},
      529px 1163px ${(props) => props.color},
      1916px 1476px ${(props) => props.color},
      308px 1823px ${(props) => props.color},
      910px 894px ${(props) => props.color},
      839px 431px ${(props) => props.color},
      1638px 1599px ${(props) => props.color},
      128px 1590px ${(props) => props.color},
      1157px 1788px ${(props) => props.color},
      1035px 773px ${(props) => props.color},
      389px 277px ${(props) => props.color},
      553px 1014px ${(props) => props.color},
      1978px 668px ${(props) => props.color},
      615px 1056px ${(props) => props.color},
      944px 1726px ${(props) => props.color},
      974px 324px ${(props) => props.color},
      1448px 349px ${(props) => props.color},
      848px 405px ${(props) => props.color},
      1757px 1457px ${(props) => props.color},
      468px 1754px ${(props) => props.color},
      714px 414px ${(props) => props.color},
      697px 592px ${(props) => props.color},
      1434px 1246px ${(props) => props.color},
      258px 1687px ${(props) => props.color},
      953px 1354px ${(props) => props.color},
      922px 179px ${(props) => props.color},
      1899px 662px ${(props) => props.color},
      1103px 448px ${(props) => props.color},
      1205px 799px ${(props) => props.color},
      1256px 1247px ${(props) => props.color},
      1772px 194px ${(props) => props.color},
      1809px 1285px ${(props) => props.color},
      518px 698px ${(props) => props.color},
      1906px 332px ${(props) => props.color},
      1182px 536px ${(props) => props.color},
      1758px 354px ${(props) => props.color},
      131px 1042px ${(props) => props.color},
      923px 1832px ${(props) => props.color},
      1117px 1198px ${(props) => props.color},
      143px 1532px ${(props) => props.color},
      1401px 395px ${(props) => props.color},
      1359px 1550px ${(props) => props.color},
      615px 206px ${(props) => props.color},
      694px 475px ${(props) => props.color},
      530px 1675px ${(props) => props.color},
      1413px 1544px ${(props) => props.color},
      1330px 1429px ${(props) => props.color},
      1433px 1453px ${(props) => props.color},
      1271px 846px ${(props) => props.color},
      1369px 1790px ${(props) => props.color},
      517px 1392px ${(props) => props.color},
      897px 1434px ${(props) => props.color},
      1906px 1012px ${(props) => props.color},
      1523px 1474px ${(props) => props.color},
      666px 7px ${(props) => props.color},
      598px 1273px ${(props) => props.color},
      1544px 541px ${(props) => props.color},
      248px 268px ${(props) => props.color},
      1992px 848px ${(props) => props.color},
      571px 870px ${(props) => props.color},
      1228px 679px ${(props) => props.color},
      1096px 187px ${(props) => props.color},
      1553px 15px ${(props) => props.color},
      523px 779px ${(props) => props.color},
      140px 231px ${(props) => props.color},
      659px 577px ${(props) => props.color},
      463px 727px ${(props) => props.color},
      986px 623px ${(props) => props.color},
      1822px 1062px ${(props) => props.color},
      596px 1460px ${(props) => props.color},
      462px 115px ${(props) => props.color},
      1318px 516px ${(props) => props.color},
      409px 729px ${(props) => props.color},
      710px 976px ${(props) => props.color},
      1163px 1539px ${(props) => props.color},
      1542px 1362px ${(props) => props.color},
      394px 1840px ${(props) => props.color},
      904px 1541px ${(props) => props.color},
      1549px 538px ${(props) => props.color},
      1594px 1384px ${(props) => props.color},
      1030px 1465px ${(props) => props.color},
      599px 544px ${(props) => props.color},
      1933px 241px ${(props) => props.color},
      1281px 287px ${(props) => props.color},
      729px 1282px ${(props) => props.color},
      819px 364px ${(props) => props.color},
      797px 1590px ${(props) => props.color},
      1023px 1973px ${(props) => props.color},
      1708px 961px ${(props) => props.color},
      293px 1953px ${(props) => props.color},
      1685px 1879px ${(props) => props.color},
      1285px 1995px ${(props) => props.color},
      1380px 219px ${(props) => props.color},
      1715px 1980px ${(props) => props.color},
      218px 108px ${(props) => props.color},
      700px 711px ${(props) => props.color},
      471px 1764px ${(props) => props.color},
      10px 1084px ${(props) => props.color},
      1841px 1778px ${(props) => props.color},
      1765px 1548px ${(props) => props.color},
      712px 1703px ${(props) => props.color},
      1866px 1805px ${(props) => props.color},
      1896px 760px ${(props) => props.color},
      1391px 40px ${(props) => props.color},
      761px 1516px ${(props) => props.color},
      1329px 584px ${(props) => props.color},
      385px 1141px ${(props) => props.color},
      1238px 21px ${(props) => props.color},
      1070px 486px ${(props) => props.color},
      1096px 312px ${(props) => props.color},
      1254px 1674px ${(props) => props.color},
      549px 1349px ${(props) => props.color},
      1618px 986px ${(props) => props.color},
      707px 1741px ${(props) => props.color},
      1718px 1514px ${(props) => props.color},
      481px 597px ${(props) => props.color},
      1690px 1472px ${(props) => props.color},
      1728px 919px ${(props) => props.color},
      173px 1196px ${(props) => props.color},
      1778px 1257px ${(props) => props.color},
      1207px 649px ${(props) => props.color},
      447px 634px ${(props) => props.color},
      1306px 1444px ${(props) => props.color},
      936px 1818px ${(props) => props.color},
      855px 1015px ${(props) => props.color},
      1421px 332px ${(props) => props.color},
      1138px 1889px ${(props) => props.color},
      1974px 694px ${(props) => props.color},
      715px 308px ${(props) => props.color},
      757px 155px ${(props) => props.color},
      18px 107px ${(props) => props.color},
      561px 378px ${(props) => props.color},
      144px 798px ${(props) => props.color},
      1184px 967px ${(props) => props.color},
      1263px 1130px ${(props) => props.color},
      1382px 895px ${(props) => props.color},
      149px 175px ${(props) => props.color},
      1297px 839px ${(props) => props.color},
      943px 454px ${(props) => props.color},
      178px 1165px ${(props) => props.color},
      477px 407px ${(props) => props.color},
      416px 219px ${(props) => props.color},
      1056px 1491px ${(props) => props.color},
      625px 816px ${(props) => props.color},
      100px 1537px ${(props) => props.color},
      1074px 520px ${(props) => props.color},
      1031px 1453px ${(props) => props.color},
      1377px 614px ${(props) => props.color},
      572px 1314px ${(props) => props.color},
      1513px 1235px ${(props) => props.color},
      1920px 1211px ${(props) => props.color},
      330px 107px ${(props) => props.color},
      1260px 772px ${(props) => props.color},
      1198px 84px ${(props) => props.color},
      1409px 139px ${(props) => props.color},
      758px 98px ${(props) => props.color},
      698px 1771px ${(props) => props.color},
      273px 275px ${(props) => props.color},
      163px 200px ${(props) => props.color},
      1665px 732px ${(props) => props.color},
      95px 600px ${(props) => props.color},
      522px 122px ${(props) => props.color},
      76px 804px ${(props) => props.color},
      1669px 1526px ${(props) => props.color},
      1881px 465px ${(props) => props.color},
      1043px 1919px ${(props) => props.color},
      1521px 827px ${(props) => props.color},
      1197px 1997px ${(props) => props.color},
      489px 593px ${(props) => props.color},
      1899px 722px ${(props) => props.color},
      1575px 332px ${(props) => props.color},
      327px 718px ${(props) => props.color},
      1959px 1378px ${(props) => props.color},
      455px 1333px ${(props) => props.color},
      729px 822px ${(props) => props.color},
      748px 126px ${(props) => props.color},
      444px 445px ${(props) => props.color},
      1856px 262px ${(props) => props.color},
      1140px 921px ${(props) => props.color},
      1680px 1227px ${(props) => props.color},
      1144px 1742px ${(props) => props.color},
      1922px 384px ${(props) => props.color},
      1015px 496px ${(props) => props.color},
      1213px 831px ${(props) => props.color},
      1793px 898px ${(props) => props.color},
      35px 159px ${(props) => props.color},
      571px 1505px ${(props) => props.color},
      726px 42px ${(props) => props.color},
      1216px 1214px ${(props) => props.color},
      938px 50px ${(props) => props.color},
      322px 1017px ${(props) => props.color},
      1222px 523px ${(props) => props.color},
      660px 1174px ${(props) => props.color},
      355px 859px ${(props) => props.color},
      1381px 1648px ${(props) => props.color},
      8px 1546px ${(props) => props.color},
      1768px 17px ${(props) => props.color},
      301px 1159px ${(props) => props.color},
      1550px 185px ${(props) => props.color},
      1289px 656px ${(props) => props.color},
      1187px 106px ${(props) => props.color},
      669px 1498px ${(props) => props.color},
      555px 323px ${(props) => props.color},
      454px 288px ${(props) => props.color},
      72px 271px ${(props) => props.color},
      445px 1713px ${(props) => props.color},
      136px 10px ${(props) => props.color},
      1810px 1149px ${(props) => props.color},
      1445px 794px ${(props) => props.color},
      406px 1822px ${(props) => props.color},
      1994px 741px ${(props) => props.color},
      1837px 1564px ${(props) => props.color},
      1264px 80px ${(props) => props.color},
      273px 845px ${(props) => props.color},
      322px 1693px ${(props) => props.color},
      103px 463px ${(props) => props.color},
      689px 1161px ${(props) => props.color},
      353px 717px ${(props) => props.color},
      1275px 1895px ${(props) => props.color},
      1331px 130px ${(props) => props.color},
      1251px 1424px ${(props) => props.color},
      1003px 1183px ${(props) => props.color},
      721px 904px ${(props) => props.color},
      1261px 416px ${(props) => props.color},
      600px 577px ${(props) => props.color},
      384px 910px ${(props) => props.color},
      1248px 1547px ${(props) => props.color},
      955px 734px ${(props) => props.color},
      686px 891px ${(props) => props.color},
      196px 1523px ${(props) => props.color},
      831px 327px ${(props) => props.color},
      845px 1486px ${(props) => props.color},
      1553px 1438px ${(props) => props.color},
      1133px 1152px ${(props) => props.color},
      356px 1087px ${(props) => props.color},
      1503px 807px ${(props) => props.color},
      1098px 1396px ${(props) => props.color},
      94px 1934px ${(props) => props.color},
      1195px 58px ${(props) => props.color},
      748px 771px ${(props) => props.color},
      940px 570px ${(props) => props.color},
      574px 651px ${(props) => props.color},
      835px 533px ${(props) => props.color},
      42px 1210px ${(props) => props.color},
      496px 1791px ${(props) => props.color},
      1610px 296px ${(props) => props.color},
      1446px 1574px ${(props) => props.color},
      261px 1765px ${(props) => props.color},
      818px 368px ${(props) => props.color},
      573px 743px ${(props) => props.color},
      545px 333px ${(props) => props.color},
      1500px 1567px ${(props) => props.color},
      1789px 448px ${(props) => props.color},
      1139px 1559px ${(props) => props.color},
      1607px 1127px ${(props) => props.color},
      1980px 874px ${(props) => props.color},
      731px 1559px ${(props) => props.color},
      898px 158px ${(props) => props.color},
      1641px 1053px ${(props) => props.color},
      53px 377px ${(props) => props.color},
      1879px 1370px ${(props) => props.color},
      1377px 899px ${(props) => props.color},
      1416px 829px ${(props) => props.color},
      863px 1545px ${(props) => props.color},
      1219px 1935px ${(props) => props.color},
      1638px 320px ${(props) => props.color},
      239px 1807px ${(props) => props.color},
      851px 464px ${(props) => props.color},
      1868px 1843px ${(props) => props.color},
      679px 203px ${(props) => props.color},
      1762px 842px ${(props) => props.color},
      59px 1986px ${(props) => props.color},
      1142px 1911px ${(props) => props.color},
      838px 1030px ${(props) => props.color},
      1370px 1269px ${(props) => props.color},
      781px 274px ${(props) => props.color},
      1193px 551px ${(props) => props.color},
      638px 478px ${(props) => props.color},
      456px 1854px ${(props) => props.color},
      424px 690px ${(props) => props.color},
      13px 600px ${(props) => props.color},
      306px 1867px ${(props) => props.color},
      384px 1298px ${(props) => props.color},
      762px 342px ${(props) => props.color},
      1780px 1196px ${(props) => props.color},
      108px 1138px ${(props) => props.color},
      1671px 866px ${(props) => props.color},
      831px 1515px ${(props) => props.color},
      218px 1455px ${(props) => props.color},
      1315px 1494px ${(props) => props.color},
      1365px 1181px ${(props) => props.color},
      168px 986px ${(props) => props.color},
      349px 506px ${(props) => props.color},
      974px 1437px ${(props) => props.color},
      1605px 908px ${(props) => props.color},
      1036px 1208px ${(props) => props.color},
      1082px 1407px ${(props) => props.color},
      916px 827px ${(props) => props.color},
      1526px 566px ${(props) => props.color},
      1159px 1877px ${(props) => props.color},
      210px 1180px ${(props) => props.color},
      979px 1815px ${(props) => props.color},
      130px 1358px ${(props) => props.color},
      1961px 1963px ${(props) => props.color},
      771px 591px ${(props) => props.color},
      1905px 487px ${(props) => props.color},
      1816px 1565px ${(props) => props.color},
      333px 1600px ${(props) => props.color},
      1842px 1774px ${(props) => props.color},
      1573px 135px ${(props) => props.color},
      1385px 1889px ${(props) => props.color},
      1611px 1033px ${(props) => props.color},
      367px 1236px ${(props) => props.color},
      779px 1022px ${(props) => props.color},
      1851px 62px ${(props) => props.color},
      478px 257px ${(props) => props.color},
      1907px 1960px ${(props) => props.color},
      1435px 532px ${(props) => props.color},
      662px 8px ${(props) => props.color},
      1027px 1924px ${(props) => props.color},
      489px 101px ${(props) => props.color},
      76px 1875px ${(props) => props.color},
      657px 1682px ${(props) => props.color},
      1993px 1955px ${(props) => props.color},
      1432px 1845px ${(props) => props.color},
      1530px 1729px ${(props) => props.color},
      1211px 896px ${(props) => props.color},
      1525px 133px ${(props) => props.color},
      1445px 803px ${(props) => props.color},
      530px 62px ${(props) => props.color},
      242px 1513px ${(props) => props.color},
      256px 933px ${(props) => props.color},
      1701px 936px ${(props) => props.color},
      756px 1893px ${(props) => props.color},
      1251px 1298px ${(props) => props.color},
      380px 1399px ${(props) => props.color},
      1455px 302px ${(props) => props.color},
      1729px 1171px ${(props) => props.color},
      585px 49px ${(props) => props.color},
      1961px 1124px ${(props) => props.color},
      1241px 552px ${(props) => props.color},
      1205px 40px ${(props) => props.color},
      1938px 1247px ${(props) => props.color},
      1469px 89px ${(props) => props.color},
      239px 1939px ${(props) => props.color},
      698px 448px ${(props) => props.color},
      1795px 346px ${(props) => props.color},
      151px 487px ${(props) => props.color},
      102px 126px ${(props) => props.color},
      1184px 418px ${(props) => props.color},
      1625px 1418px ${(props) => props.color},
      29px 554px ${(props) => props.color},
      1288px 1274px ${(props) => props.color},
      791px 1308px ${(props) => props.color},
      151px 934px ${(props) => props.color},
      1574px 386px ${(props) => props.color},
      1214px 1703px ${(props) => props.color},
      1569px 1424px ${(props) => props.color},
      951px 1830px ${(props) => props.color},
      1728px 805px ${(props) => props.color},
      312px 1987px ${(props) => props.color},
      1468px 529px ${(props) => props.color},
      1153px 1146px ${(props) => props.color},
      1262px 1021px ${(props) => props.color},
      1648px 1766px ${(props) => props.color},
      306px 70px ${(props) => props.color},
      754px 1165px ${(props) => props.color},
      1930px 482px ${(props) => props.color},
      1814px 1593px ${(props) => props.color},
      1066px 822px ${(props) => props.color},
      1250px 877px ${(props) => props.color},
      465px 1885px ${(props) => props.color},
      1649px 1281px ${(props) => props.color},
      1682px 1601px ${(props) => props.color},
      1367px 1233px ${(props) => props.color},
      91px 1327px ${(props) => props.color},
      1485px 1355px ${(props) => props.color},
      501px 1673px ${(props) => props.color},
      1649px 1259px ${(props) => props.color},
      1986px 948px ${(props) => props.color},
      1266px 1829px ${(props) => props.color},
      135px 1503px ${(props) => props.color},
      647px 296px ${(props) => props.color},
      155px 341px ${(props) => props.color},
      649px 1896px ${(props) => props.color},
      1617px 334px ${(props) => props.color},
      223px 1507px ${(props) => props.color},
      584px 146px ${(props) => props.color},
      200px 316px ${(props) => props.color},
      575px 1831px ${(props) => props.color},
      1374px 1809px ${(props) => props.color},
      1445px 386px ${(props) => props.color},
      475px 1249px ${(props) => props.color},
      1954px 89px ${(props) => props.color},
      1756px 1192px ${(props) => props.color},
      8px 671px ${(props) => props.color},
      1366px 1694px ${(props) => props.color},
      1831px 306px ${(props) => props.color},
      925px 113px ${(props) => props.color},
      160px 1174px ${(props) => props.color},
      534px 1908px ${(props) => props.color},
      553px 273px ${(props) => props.color},
      423px 45px ${(props) => props.color},
      1305px 1098px ${(props) => props.color},
      187px 90px ${(props) => props.color},
      1993px 1396px ${(props) => props.color},
      842px 1270px ${(props) => props.color},
      1137px 554px ${(props) => props.color},
      351px 558px ${(props) => props.color},
      1576px 1070px ${(props) => props.color},
      437px 312px ${(props) => props.color},
      286px 1019px ${(props) => props.color},
      257px 272px ${(props) => props.color},
      1242px 1957px ${(props) => props.color},
      1963px 1693px ${(props) => props.color},
      772px 447px ${(props) => props.color},
      1641px 508px ${(props) => props.color},
      712px 100px ${(props) => props.color},
      1307px 1015px ${(props) => props.color},
      742px 327px ${(props) => props.color},
      281px 1814px ${(props) => props.color},
      1398px 1051px ${(props) => props.color},
      167px 9px ${(props) => props.color},
      328px 1489px ${(props) => props.color},
      1814px 1804px ${(props) => props.color},
      946px 25px ${(props) => props.color},
      549px 1705px ${(props) => props.color},
      217px 1477px ${(props) => props.color},
      1937px 280px ${(props) => props.color},
      182px 241px ${(props) => props.color},
      711px 1365px ${(props) => props.color},
      1898px 1043px ${(props) => props.color},
      1807px 346px ${(props) => props.color},
      1787px 1253px ${(props) => props.color},
      247px 66px ${(props) => props.color},
      1171px 1592px ${(props) => props.color},
      846px 895px ${(props) => props.color},
      1507px 720px ${(props) => props.color},
      787px 574px ${(props) => props.color},
      1593px 1267px ${(props) => props.color},
      843px 1902px ${(props) => props.color},
      15px 1454px ${(props) => props.color},
      539px 1420px ${(props) => props.color},
      1856px 974px ${(props) => props.color},
      340px 663px ${(props) => props.color},
      1579px 1091px ${(props) => props.color},
      809px 111px ${(props) => props.color},
      32px 1128px ${(props) => props.color},
      69px 1852px ${(props) => props.color},
      878px 300px ${(props) => props.color},
      730px 726px ${(props) => props.color},
      1137px 68px ${(props) => props.color};
    animation: animStar 50s linear infinite;
    &:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 1px;
      height: 1px;
      background: transparent;
      box-shadow: 1487px 822px ${(props) => props.color},
        702px 619px ${(props) => props.color},
        579px 76px ${(props) => props.color},
        881px 14px ${(props) => props.color},
        1903px 741px ${(props) => props.color},
        1401px 1791px ${(props) => props.color},
        1316px 857px ${(props) => props.color},
        1628px 1376px ${(props) => props.color},
        1641px 781px ${(props) => props.color},
        1421px 25px ${(props) => props.color},
        525px 254px ${(props) => props.color},
        683px 1197px ${(props) => props.color},
        1636px 1573px ${(props) => props.color},
        1855px 1220px ${(props) => props.color},
        108px 1424px ${(props) => props.color},
        906px 1967px ${(props) => props.color},
        205px 1681px ${(props) => props.color},
        1930px 731px ${(props) => props.color},
        1957px 104px ${(props) => props.color},
        1558px 24px ${(props) => props.color},
        211px 468px ${(props) => props.color},
        2px 1001px ${(props) => props.color},
        664px 1095px ${(props) => props.color},
        1023px 1573px ${(props) => props.color},
        272px 122px ${(props) => props.color},
        659px 1641px ${(props) => props.color},
        1518px 1633px ${(props) => props.color},
        1736px 1016px ${(props) => props.color},
        1085px 1911px ${(props) => props.color},
        737px 1784px ${(props) => props.color},
        564px 968px ${(props) => props.color},
        150px 1277px ${(props) => props.color},
        1848px 505px ${(props) => props.color},
        1067px 1414px ${(props) => props.color},
        1619px 1498px ${(props) => props.color},
        266px 757px ${(props) => props.color},
        450px 1052px ${(props) => props.color},
        604px 1178px ${(props) => props.color},
        1069px 1215px ${(props) => props.color},
        1045px 1816px ${(props) => props.color},
        1682px 1111px ${(props) => props.color},
        578px 1875px ${(props) => props.color},
        1197px 20px ${(props) => props.color},
        736px 1923px ${(props) => props.color},
        1698px 592px ${(props) => props.color},
        491px 1835px ${(props) => props.color},
        106px 1113px ${(props) => props.color},
        1944px 1749px ${(props) => props.color},
        677px 525px ${(props) => props.color},
        798px 1663px ${(props) => props.color},
        463px 19px ${(props) => props.color},
        1982px 1091px ${(props) => props.color},
        736px 1597px ${(props) => props.color},
        244px 1625px ${(props) => props.color},
        1699px 1257px ${(props) => props.color},
        624px 114px ${(props) => props.color},
        1290px 48px ${(props) => props.color},
        1007px 1111px ${(props) => props.color},
        1411px 31px ${(props) => props.color},
        1661px 1065px ${(props) => props.color},
        1583px 1593px ${(props) => props.color},
        1165px 1985px ${(props) => props.color},
        351px 222px ${(props) => props.color},
        158px 709px ${(props) => props.color},
        1304px 194px ${(props) => props.color},
        1192px 1923px ${(props) => props.color},
        358px 1642px ${(props) => props.color},
        889px 1701px ${(props) => props.color},
        424px 1427px ${(props) => props.color},
        1928px 573px ${(props) => props.color},
        1263px 1473px ${(props) => props.color},
        498px 33px ${(props) => props.color},
        1043px 286px ${(props) => props.color},
        843px 1917px ${(props) => props.color},
        909px 813px ${(props) => props.color},
        1033px 291px ${(props) => props.color},
        41px 749px ${(props) => props.color},
        1807px 1719px ${(props) => props.color},
        1984px 284px ${(props) => props.color},
        1983px 1696px ${(props) => props.color},
        1409px 179px ${(props) => props.color},
        1350px 929px ${(props) => props.color},
        332px 1747px ${(props) => props.color},
        212px 1977px ${(props) => props.color},
        1668px 1254px ${(props) => props.color},
        1585px 1736px ${(props) => props.color},
        783px 85px ${(props) => props.color},
        1961px 847px ${(props) => props.color},
        1692px 996px ${(props) => props.color},
        1829px 694px ${(props) => props.color},
        965px 891px ${(props) => props.color},
        1793px 102px ${(props) => props.color},
        1347px 235px ${(props) => props.color},
        1566px 1954px ${(props) => props.color},
        1406px 1765px ${(props) => props.color},
        1346px 1832px ${(props) => props.color},
        452px 1205px ${(props) => props.color},
        1667px 1688px ${(props) => props.color},
        1337px 1664px ${(props) => props.color},
        1728px 832px ${(props) => props.color},
        1568px 1213px ${(props) => props.color},
        1980px 357px ${(props) => props.color},
        1096px 624px ${(props) => props.color},
        210px 636px ${(props) => props.color},
        1247px 1830px ${(props) => props.color},
        1789px 1970px ${(props) => props.color},
        582px 978px ${(props) => props.color},
        1473px 1002px ${(props) => props.color},
        1042px 440px ${(props) => props.color},
        1189px 879px ${(props) => props.color},
        24px 931px ${(props) => props.color},
        1656px 1848px ${(props) => props.color},
        401px 1676px ${(props) => props.color},
        192px 1632px ${(props) => props.color},
        970px 1936px ${(props) => props.color},
        231px 1849px ${(props) => props.color},
        1860px 127px ${(props) => props.color},
        469px 1487px ${(props) => props.color},
        436px 1899px ${(props) => props.color},
        680px 1290px ${(props) => props.color},
        809px 128px ${(props) => props.color},
        163px 683px ${(props) => props.color},
        1221px 1732px ${(props) => props.color},
        982px 801px ${(props) => props.color},
        149px 455px ${(props) => props.color},
        39px 1305px ${(props) => props.color},
        248px 1059px ${(props) => props.color},
        1985px 1040px ${(props) => props.color},
        823px 1174px ${(props) => props.color},
        1823px 12px ${(props) => props.color},
        1558px 1446px ${(props) => props.color},
        164px 348px ${(props) => props.color},
        504px 311px ${(props) => props.color},
        95px 1735px ${(props) => props.color},
        1817px 560px ${(props) => props.color},
        1527px 1792px ${(props) => props.color},
        296px 377px ${(props) => props.color},
        1480px 353px ${(props) => props.color},
        1419px 1148px ${(props) => props.color},
        734px 610px ${(props) => props.color},
        1233px 1076px ${(props) => props.color},
        1495px 198px ${(props) => props.color},
        1722px 1821px ${(props) => props.color},
        57px 914px ${(props) => props.color},
        81px 1967px ${(props) => props.color},
        157px 1383px ${(props) => props.color},
        478px 1545px ${(props) => props.color},
        96px 1485px ${(props) => props.color},
        1248px 1516px ${(props) => props.color},
        1989px 1475px ${(props) => props.color},
        730px 61px ${(props) => props.color},
        646px 342px ${(props) => props.color},
        656px 376px ${(props) => props.color},
        809px 1394px ${(props) => props.color},
        483px 1916px ${(props) => props.color},
        695px 1985px ${(props) => props.color},
        954px 279px ${(props) => props.color},
        1704px 234px ${(props) => props.color},
        204px 1621px ${(props) => props.color},
        490px 414px ${(props) => props.color},
        929px 1852px ${(props) => props.color},
        383px 1017px ${(props) => props.color},
        1319px 14px ${(props) => props.color},
        103px 1147px ${(props) => props.color},
        1780px 62px ${(props) => props.color},
        764px 318px ${(props) => props.color},
        950px 1468px ${(props) => props.color},
        767px 8px ${(props) => props.color},
        1038px 763px ${(props) => props.color},
        62px 680px ${(props) => props.color},
        1619px 817px ${(props) => props.color},
        1462px 1819px ${(props) => props.color},
        1340px 1956px ${(props) => props.color},
        1802px 902px ${(props) => props.color},
        1739px 1865px ${(props) => props.color},
        886px 854px ${(props) => props.color},
        1760px 1693px ${(props) => props.color},
        1571px 1175px ${(props) => props.color},
        1149px 1748px ${(props) => props.color},
        1521px 1213px ${(props) => props.color},
        575px 162px ${(props) => props.color},
        1904px 456px ${(props) => props.color},
        1399px 416px ${(props) => props.color},
        1325px 1118px ${(props) => props.color},
        1848px 478px ${(props) => props.color},
        1447px 841px ${(props) => props.color},
        457px 1619px ${(props) => props.color},
        1202px 1049px ${(props) => props.color},
        397px 682px ${(props) => props.color},
        465px 1042px ${(props) => props.color},
        1264px 1033px ${(props) => props.color},
        1304px 1004px ${(props) => props.color},
        649px 1586px ${(props) => props.color},
        97px 1308px ${(props) => props.color},
        21px 619px ${(props) => props.color},
        469px 1742px ${(props) => props.color},
        81px 1745px ${(props) => props.color},
        1735px 1208px ${(props) => props.color},
        805px 1206px ${(props) => props.color},
        717px 492px ${(props) => props.color},
        187px 1317px ${(props) => props.color},
        860px 1290px ${(props) => props.color},
        1964px 1712px ${(props) => props.color},
        1036px 142px ${(props) => props.color},
        1238px 442px ${(props) => props.color},
        1766px 423px ${(props) => props.color},
        925px 353px ${(props) => props.color},
        569px 5px ${(props) => props.color},
        1338px 383px ${(props) => props.color},
        1321px 90px ${(props) => props.color},
        1613px 749px ${(props) => props.color},
        409px 1835px ${(props) => props.color},
        642px 715px ${(props) => props.color},
        1402px 444px ${(props) => props.color},
        1669px 197px ${(props) => props.color},
        291px 1022px ${(props) => props.color},
        632px 1847px ${(props) => props.color},
        678px 810px ${(props) => props.color},
        570px 798px ${(props) => props.color},
        1521px 681px ${(props) => props.color},
        309px 176px ${(props) => props.color},
        1913px 882px ${(props) => props.color},
        1129px 1601px ${(props) => props.color},
        1310px 1490px ${(props) => props.color},
        883px 1925px ${(props) => props.color},
        1354px 140px ${(props) => props.color},
        1474px 628px ${(props) => props.color},
        1997px 230px ${(props) => props.color},
        351px 1212px ${(props) => props.color},
        576px 706px ${(props) => props.color},
        1210px 1325px ${(props) => props.color},
        1927px 315px ${(props) => props.color},
        1505px 1249px ${(props) => props.color},
        699px 1811px ${(props) => props.color},
        1428px 913px ${(props) => props.color},
        691px 1811px ${(props) => props.color},
        977px 1645px ${(props) => props.color},
        330px 260px ${(props) => props.color},
        1632px 1148px ${(props) => props.color},
        878px 1070px ${(props) => props.color},
        390px 1127px ${(props) => props.color},
        1915px 1956px ${(props) => props.color},
        805px 314px ${(props) => props.color},
        260px 623px ${(props) => props.color},
        1471px 1629px ${(props) => props.color},
        1333px 1800px ${(props) => props.color},
        1158px 1712px ${(props) => props.color},
        813px 641px ${(props) => props.color},
        608px 761px ${(props) => props.color},
        529px 1163px ${(props) => props.color},
        1916px 1476px ${(props) => props.color},
        308px 1823px ${(props) => props.color},
        910px 894px ${(props) => props.color},
        839px 431px ${(props) => props.color},
        1638px 1599px ${(props) => props.color},
        128px 1590px ${(props) => props.color},
        1157px 1788px ${(props) => props.color},
        1035px 773px ${(props) => props.color},
        389px 277px ${(props) => props.color},
        553px 1014px ${(props) => props.color},
        1978px 668px ${(props) => props.color},
        615px 1056px ${(props) => props.color},
        944px 1726px ${(props) => props.color},
        974px 324px ${(props) => props.color},
        1448px 349px ${(props) => props.color},
        848px 405px ${(props) => props.color},
        1757px 1457px ${(props) => props.color},
        468px 1754px ${(props) => props.color},
        714px 414px ${(props) => props.color},
        697px 592px ${(props) => props.color},
        1434px 1246px ${(props) => props.color},
        258px 1687px ${(props) => props.color},
        953px 1354px ${(props) => props.color},
        922px 179px ${(props) => props.color},
        1899px 662px ${(props) => props.color},
        1103px 448px ${(props) => props.color},
        1205px 799px ${(props) => props.color},
        1256px 1247px ${(props) => props.color},
        1772px 194px ${(props) => props.color},
        1809px 1285px ${(props) => props.color},
        518px 698px ${(props) => props.color},
        1906px 332px ${(props) => props.color},
        1182px 536px ${(props) => props.color},
        1758px 354px ${(props) => props.color},
        131px 1042px ${(props) => props.color},
        923px 1832px ${(props) => props.color},
        1117px 1198px ${(props) => props.color},
        143px 1532px ${(props) => props.color},
        1401px 395px ${(props) => props.color},
        1359px 1550px ${(props) => props.color},
        615px 206px ${(props) => props.color},
        694px 475px ${(props) => props.color},
        530px 1675px ${(props) => props.color},
        1413px 1544px ${(props) => props.color},
        1330px 1429px ${(props) => props.color},
        1433px 1453px ${(props) => props.color},
        1271px 846px ${(props) => props.color},
        1369px 1790px ${(props) => props.color},
        517px 1392px ${(props) => props.color},
        897px 1434px ${(props) => props.color},
        1906px 1012px ${(props) => props.color},
        1523px 1474px ${(props) => props.color},
        666px 7px ${(props) => props.color},
        598px 1273px ${(props) => props.color},
        1544px 541px ${(props) => props.color},
        248px 268px ${(props) => props.color},
        1992px 848px ${(props) => props.color},
        571px 870px ${(props) => props.color},
        1228px 679px ${(props) => props.color},
        1096px 187px ${(props) => props.color},
        1553px 15px ${(props) => props.color},
        523px 779px ${(props) => props.color},
        140px 231px ${(props) => props.color},
        659px 577px ${(props) => props.color},
        463px 727px ${(props) => props.color},
        986px 623px ${(props) => props.color},
        1822px 1062px ${(props) => props.color},
        596px 1460px ${(props) => props.color},
        462px 115px ${(props) => props.color},
        1318px 516px ${(props) => props.color},
        409px 729px ${(props) => props.color},
        710px 976px ${(props) => props.color},
        1163px 1539px ${(props) => props.color},
        1542px 1362px ${(props) => props.color},
        394px 1840px ${(props) => props.color},
        904px 1541px ${(props) => props.color},
        1549px 538px ${(props) => props.color},
        1594px 1384px ${(props) => props.color},
        1030px 1465px ${(props) => props.color},
        599px 544px ${(props) => props.color},
        1933px 241px ${(props) => props.color},
        1281px 287px ${(props) => props.color},
        729px 1282px ${(props) => props.color},
        819px 364px ${(props) => props.color},
        797px 1590px ${(props) => props.color},
        1023px 1973px ${(props) => props.color},
        1708px 961px ${(props) => props.color},
        293px 1953px ${(props) => props.color},
        1685px 1879px ${(props) => props.color},
        1285px 1995px ${(props) => props.color},
        1380px 219px ${(props) => props.color},
        1715px 1980px ${(props) => props.color},
        218px 108px ${(props) => props.color},
        700px 711px ${(props) => props.color},
        471px 1764px ${(props) => props.color},
        10px 1084px ${(props) => props.color},
        1841px 1778px ${(props) => props.color},
        1765px 1548px ${(props) => props.color},
        712px 1703px ${(props) => props.color},
        1866px 1805px ${(props) => props.color},
        1896px 760px ${(props) => props.color},
        1391px 40px ${(props) => props.color},
        761px 1516px ${(props) => props.color},
        1329px 584px ${(props) => props.color},
        385px 1141px ${(props) => props.color},
        1238px 21px ${(props) => props.color},
        1070px 486px ${(props) => props.color},
        1096px 312px ${(props) => props.color},
        1254px 1674px ${(props) => props.color},
        549px 1349px ${(props) => props.color},
        1618px 986px ${(props) => props.color},
        707px 1741px ${(props) => props.color},
        1718px 1514px ${(props) => props.color},
        481px 597px ${(props) => props.color},
        1690px 1472px ${(props) => props.color},
        1728px 919px ${(props) => props.color},
        173px 1196px ${(props) => props.color},
        1778px 1257px ${(props) => props.color},
        1207px 649px ${(props) => props.color},
        447px 634px ${(props) => props.color},
        1306px 1444px ${(props) => props.color},
        936px 1818px ${(props) => props.color},
        855px 1015px ${(props) => props.color},
        1421px 332px ${(props) => props.color},
        1138px 1889px ${(props) => props.color},
        1974px 694px ${(props) => props.color},
        715px 308px ${(props) => props.color},
        757px 155px ${(props) => props.color},
        18px 107px ${(props) => props.color},
        561px 378px ${(props) => props.color},
        144px 798px ${(props) => props.color},
        1184px 967px ${(props) => props.color},
        1263px 1130px ${(props) => props.color},
        1382px 895px ${(props) => props.color},
        149px 175px ${(props) => props.color},
        1297px 839px ${(props) => props.color},
        943px 454px ${(props) => props.color},
        178px 1165px ${(props) => props.color},
        477px 407px ${(props) => props.color},
        416px 219px ${(props) => props.color},
        1056px 1491px ${(props) => props.color},
        625px 816px ${(props) => props.color},
        100px 1537px ${(props) => props.color},
        1074px 520px ${(props) => props.color},
        1031px 1453px ${(props) => props.color},
        1377px 614px ${(props) => props.color},
        572px 1314px ${(props) => props.color},
        1513px 1235px ${(props) => props.color},
        1920px 1211px ${(props) => props.color},
        330px 107px ${(props) => props.color},
        1260px 772px ${(props) => props.color},
        1198px 84px ${(props) => props.color},
        1409px 139px ${(props) => props.color},
        758px 98px ${(props) => props.color},
        698px 1771px ${(props) => props.color},
        273px 275px ${(props) => props.color},
        163px 200px ${(props) => props.color},
        1665px 732px ${(props) => props.color},
        95px 600px ${(props) => props.color},
        522px 122px ${(props) => props.color},
        76px 804px ${(props) => props.color},
        1669px 1526px ${(props) => props.color},
        1881px 465px ${(props) => props.color},
        1043px 1919px ${(props) => props.color},
        1521px 827px ${(props) => props.color},
        1197px 1997px ${(props) => props.color},
        489px 593px ${(props) => props.color},
        1899px 722px ${(props) => props.color},
        1575px 332px ${(props) => props.color},
        327px 718px ${(props) => props.color},
        1959px 1378px ${(props) => props.color},
        455px 1333px ${(props) => props.color},
        729px 822px ${(props) => props.color},
        748px 126px ${(props) => props.color},
        444px 445px ${(props) => props.color},
        1856px 262px ${(props) => props.color},
        1140px 921px ${(props) => props.color},
        1680px 1227px ${(props) => props.color},
        1144px 1742px ${(props) => props.color},
        1922px 384px ${(props) => props.color},
        1015px 496px ${(props) => props.color},
        1213px 831px ${(props) => props.color},
        1793px 898px ${(props) => props.color},
        35px 159px ${(props) => props.color},
        571px 1505px ${(props) => props.color},
        726px 42px ${(props) => props.color},
        1216px 1214px ${(props) => props.color},
        938px 50px ${(props) => props.color},
        322px 1017px ${(props) => props.color},
        1222px 523px ${(props) => props.color},
        660px 1174px ${(props) => props.color},
        355px 859px ${(props) => props.color},
        1381px 1648px ${(props) => props.color},
        8px 1546px ${(props) => props.color},
        1768px 17px ${(props) => props.color},
        301px 1159px ${(props) => props.color},
        1550px 185px ${(props) => props.color},
        1289px 656px ${(props) => props.color},
        1187px 106px ${(props) => props.color},
        669px 1498px ${(props) => props.color},
        555px 323px ${(props) => props.color},
        454px 288px ${(props) => props.color},
        72px 271px ${(props) => props.color},
        445px 1713px ${(props) => props.color},
        136px 10px ${(props) => props.color},
        1810px 1149px ${(props) => props.color},
        1445px 794px ${(props) => props.color},
        406px 1822px ${(props) => props.color},
        1994px 741px ${(props) => props.color},
        1837px 1564px ${(props) => props.color},
        1264px 80px ${(props) => props.color},
        273px 845px ${(props) => props.color},
        322px 1693px ${(props) => props.color},
        103px 463px ${(props) => props.color},
        689px 1161px ${(props) => props.color},
        353px 717px ${(props) => props.color},
        1275px 1895px ${(props) => props.color},
        1331px 130px ${(props) => props.color},
        1251px 1424px ${(props) => props.color},
        1003px 1183px ${(props) => props.color},
        721px 904px ${(props) => props.color},
        1261px 416px ${(props) => props.color},
        600px 577px ${(props) => props.color},
        384px 910px ${(props) => props.color},
        1248px 1547px ${(props) => props.color},
        955px 734px ${(props) => props.color},
        686px 891px ${(props) => props.color},
        196px 1523px ${(props) => props.color},
        831px 327px ${(props) => props.color},
        845px 1486px ${(props) => props.color},
        1553px 1438px ${(props) => props.color},
        1133px 1152px ${(props) => props.color},
        356px 1087px ${(props) => props.color},
        1503px 807px ${(props) => props.color},
        1098px 1396px ${(props) => props.color},
        94px 1934px ${(props) => props.color},
        1195px 58px ${(props) => props.color},
        748px 771px ${(props) => props.color},
        940px 570px ${(props) => props.color},
        574px 651px ${(props) => props.color},
        835px 533px ${(props) => props.color},
        42px 1210px ${(props) => props.color},
        496px 1791px ${(props) => props.color},
        1610px 296px ${(props) => props.color},
        1446px 1574px ${(props) => props.color},
        261px 1765px ${(props) => props.color},
        818px 368px ${(props) => props.color},
        573px 743px ${(props) => props.color},
        545px 333px ${(props) => props.color},
        1500px 1567px ${(props) => props.color},
        1789px 448px ${(props) => props.color},
        1139px 1559px ${(props) => props.color},
        1607px 1127px ${(props) => props.color},
        1980px 874px ${(props) => props.color},
        731px 1559px ${(props) => props.color},
        898px 158px ${(props) => props.color},
        1641px 1053px ${(props) => props.color},
        53px 377px ${(props) => props.color},
        1879px 1370px ${(props) => props.color},
        1377px 899px ${(props) => props.color},
        1416px 829px ${(props) => props.color},
        863px 1545px ${(props) => props.color},
        1219px 1935px ${(props) => props.color},
        1638px 320px ${(props) => props.color},
        239px 1807px ${(props) => props.color},
        851px 464px ${(props) => props.color},
        1868px 1843px ${(props) => props.color},
        679px 203px ${(props) => props.color},
        1762px 842px ${(props) => props.color},
        59px 1986px ${(props) => props.color},
        1142px 1911px ${(props) => props.color},
        838px 1030px ${(props) => props.color},
        1370px 1269px ${(props) => props.color},
        781px 274px ${(props) => props.color},
        1193px 551px ${(props) => props.color},
        638px 478px ${(props) => props.color},
        456px 1854px ${(props) => props.color},
        424px 690px ${(props) => props.color},
        13px 600px ${(props) => props.color},
        306px 1867px ${(props) => props.color},
        384px 1298px ${(props) => props.color},
        762px 342px ${(props) => props.color},
        1780px 1196px ${(props) => props.color},
        108px 1138px ${(props) => props.color},
        1671px 866px ${(props) => props.color},
        831px 1515px ${(props) => props.color},
        218px 1455px ${(props) => props.color},
        1315px 1494px ${(props) => props.color},
        1365px 1181px ${(props) => props.color},
        168px 986px ${(props) => props.color},
        349px 506px ${(props) => props.color},
        974px 1437px ${(props) => props.color},
        1605px 908px ${(props) => props.color},
        1036px 1208px ${(props) => props.color},
        1082px 1407px ${(props) => props.color},
        916px 827px ${(props) => props.color},
        1526px 566px ${(props) => props.color},
        1159px 1877px ${(props) => props.color},
        210px 1180px ${(props) => props.color},
        979px 1815px ${(props) => props.color},
        130px 1358px ${(props) => props.color},
        1961px 1963px ${(props) => props.color},
        771px 591px ${(props) => props.color},
        1905px 487px ${(props) => props.color},
        1816px 1565px ${(props) => props.color},
        333px 1600px ${(props) => props.color},
        1842px 1774px ${(props) => props.color},
        1573px 135px ${(props) => props.color},
        1385px 1889px ${(props) => props.color},
        1611px 1033px ${(props) => props.color},
        367px 1236px ${(props) => props.color},
        779px 1022px ${(props) => props.color},
        1851px 62px ${(props) => props.color},
        478px 257px ${(props) => props.color},
        1907px 1960px ${(props) => props.color},
        1435px 532px ${(props) => props.color},
        662px 8px ${(props) => props.color},
        1027px 1924px ${(props) => props.color},
        489px 101px ${(props) => props.color},
        76px 1875px ${(props) => props.color},
        657px 1682px ${(props) => props.color},
        1993px 1955px ${(props) => props.color},
        1432px 1845px ${(props) => props.color},
        1530px 1729px ${(props) => props.color},
        1211px 896px ${(props) => props.color},
        1525px 133px ${(props) => props.color},
        1445px 803px ${(props) => props.color},
        530px 62px ${(props) => props.color},
        242px 1513px ${(props) => props.color},
        256px 933px ${(props) => props.color},
        1701px 936px ${(props) => props.color},
        756px 1893px ${(props) => props.color},
        1251px 1298px ${(props) => props.color},
        380px 1399px ${(props) => props.color},
        1455px 302px ${(props) => props.color},
        1729px 1171px ${(props) => props.color},
        585px 49px ${(props) => props.color},
        1961px 1124px ${(props) => props.color},
        1241px 552px ${(props) => props.color},
        1205px 40px ${(props) => props.color},
        1938px 1247px ${(props) => props.color},
        1469px 89px ${(props) => props.color},
        239px 1939px ${(props) => props.color},
        698px 448px ${(props) => props.color},
        1795px 346px ${(props) => props.color},
        151px 487px ${(props) => props.color},
        102px 126px ${(props) => props.color},
        1184px 418px ${(props) => props.color},
        1625px 1418px ${(props) => props.color},
        29px 554px ${(props) => props.color},
        1288px 1274px ${(props) => props.color},
        791px 1308px ${(props) => props.color},
        151px 934px ${(props) => props.color},
        1574px 386px ${(props) => props.color},
        1214px 1703px ${(props) => props.color},
        1569px 1424px ${(props) => props.color},
        951px 1830px ${(props) => props.color},
        1728px 805px ${(props) => props.color},
        312px 1987px ${(props) => props.color},
        1468px 529px ${(props) => props.color},
        1153px 1146px ${(props) => props.color},
        1262px 1021px ${(props) => props.color},
        1648px 1766px ${(props) => props.color},
        306px 70px ${(props) => props.color},
        754px 1165px ${(props) => props.color},
        1930px 482px ${(props) => props.color},
        1814px 1593px ${(props) => props.color},
        1066px 822px ${(props) => props.color},
        1250px 877px ${(props) => props.color},
        465px 1885px ${(props) => props.color},
        1649px 1281px ${(props) => props.color},
        1682px 1601px ${(props) => props.color},
        1367px 1233px ${(props) => props.color},
        91px 1327px ${(props) => props.color},
        1485px 1355px ${(props) => props.color},
        501px 1673px ${(props) => props.color},
        1649px 1259px ${(props) => props.color},
        1986px 948px ${(props) => props.color},
        1266px 1829px ${(props) => props.color},
        135px 1503px ${(props) => props.color},
        647px 296px ${(props) => props.color},
        155px 341px ${(props) => props.color},
        649px 1896px ${(props) => props.color},
        1617px 334px ${(props) => props.color},
        223px 1507px ${(props) => props.color},
        584px 146px ${(props) => props.color},
        200px 316px ${(props) => props.color},
        575px 1831px ${(props) => props.color},
        1374px 1809px ${(props) => props.color},
        1445px 386px ${(props) => props.color},
        475px 1249px ${(props) => props.color},
        1954px 89px ${(props) => props.color},
        1756px 1192px ${(props) => props.color},
        8px 671px ${(props) => props.color},
        1366px 1694px ${(props) => props.color},
        1831px 306px ${(props) => props.color},
        925px 113px ${(props) => props.color},
        160px 1174px ${(props) => props.color},
        534px 1908px ${(props) => props.color},
        553px 273px ${(props) => props.color},
        423px 45px ${(props) => props.color},
        1305px 1098px ${(props) => props.color},
        187px 90px ${(props) => props.color},
        1993px 1396px ${(props) => props.color},
        842px 1270px ${(props) => props.color},
        1137px 554px ${(props) => props.color},
        351px 558px ${(props) => props.color},
        1576px 1070px ${(props) => props.color},
        437px 312px ${(props) => props.color},
        286px 1019px ${(props) => props.color},
        257px 272px ${(props) => props.color},
        1242px 1957px ${(props) => props.color},
        1963px 1693px ${(props) => props.color},
        772px 447px ${(props) => props.color},
        1641px 508px ${(props) => props.color},
        712px 100px ${(props) => props.color},
        1307px 1015px ${(props) => props.color},
        742px 327px ${(props) => props.color},
        281px 1814px ${(props) => props.color},
        1398px 1051px ${(props) => props.color},
        167px 9px ${(props) => props.color},
        328px 1489px ${(props) => props.color},
        1814px 1804px ${(props) => props.color},
        946px 25px ${(props) => props.color},
        549px 1705px ${(props) => props.color},
        217px 1477px ${(props) => props.color},
        1937px 280px ${(props) => props.color},
        182px 241px ${(props) => props.color},
        711px 1365px ${(props) => props.color},
        1898px 1043px ${(props) => props.color},
        1807px 346px ${(props) => props.color},
        1787px 1253px ${(props) => props.color},
        247px 66px ${(props) => props.color},
        1171px 1592px ${(props) => props.color},
        846px 895px ${(props) => props.color},
        1507px 720px ${(props) => props.color},
        787px 574px ${(props) => props.color},
        1593px 1267px ${(props) => props.color},
        843px 1902px ${(props) => props.color},
        15px 1454px ${(props) => props.color},
        539px 1420px ${(props) => props.color},
        1856px 974px ${(props) => props.color},
        340px 663px ${(props) => props.color},
        1579px 1091px ${(props) => props.color},
        809px 111px ${(props) => props.color},
        32px 1128px ${(props) => props.color},
        69px 1852px ${(props) => props.color},
        878px 300px ${(props) => props.color},
        730px 726px ${(props) => props.color},
        1137px 68px ${(props) => props.color};
    }
  }

  #stars2 {
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: 592px 134px ${(props) => props.color},
      346px 741px ${(props) => props.color},
      1000px 1781px ${(props) => props.color},
      996px 728px ${(props) => props.color},
      1085px 1462px ${(props) => props.color},
      526px 1128px ${(props) => props.color},
      1951px 557px ${(props) => props.color},
      673px 92px ${(props) => props.color},
      415px 776px ${(props) => props.color},
      1570px 643px ${(props) => props.color},
      121px 697px ${(props) => props.color},
      782px 1847px ${(props) => props.color},
      1853px 256px ${(props) => props.color},
      910px 195px ${(props) => props.color},
      362px 1201px ${(props) => props.color},
      52px 1627px ${(props) => props.color},
      387px 899px ${(props) => props.color},
      547px 1995px ${(props) => props.color},
      1298px 440px ${(props) => props.color},
      1474px 1713px ${(props) => props.color},
      1109px 1322px ${(props) => props.color},
      1720px 1237px ${(props) => props.color},
      473px 1196px ${(props) => props.color},
      1682px 580px ${(props) => props.color},
      1476px 655px ${(props) => props.color},
      1254px 731px ${(props) => props.color},
      1069px 1840px ${(props) => props.color},
      291px 1789px ${(props) => props.color},
      825px 1237px ${(props) => props.color},
      1067px 543px ${(props) => props.color},
      962px 990px ${(props) => props.color},
      1606px 1387px ${(props) => props.color},
      884px 1555px ${(props) => props.color},
      1209px 1830px ${(props) => props.color},
      439px 535px ${(props) => props.color},
      360px 1451px ${(props) => props.color},
      1018px 1837px ${(props) => props.color},
      1964px 677px ${(props) => props.color},
      1095px 159px ${(props) => props.color},
      390px 245px ${(props) => props.color},
      1869px 597px ${(props) => props.color},
      1857px 544px ${(props) => props.color},
      745px 1186px ${(props) => props.color},
      336px 1867px ${(props) => props.color},
      250px 1377px ${(props) => props.color},
      1872px 168px ${(props) => props.color},
      878px 1299px ${(props) => props.color},
      1257px 177px ${(props) => props.color},
      984px 303px ${(props) => props.color},
      544px 303px ${(props) => props.color},
      1250px 1052px ${(props) => props.color},
      152px 1322px ${(props) => props.color},
      1466px 289px ${(props) => props.color},
      1104px 1116px ${(props) => props.color},
      1796px 482px ${(props) => props.color},
      1086px 525px ${(props) => props.color},
      1540px 1822px ${(props) => props.color},
      196px 1999px ${(props) => props.color},
      1893px 771px ${(props) => props.color},
      1171px 1728px ${(props) => props.color},
      1996px 710px ${(props) => props.color},
      436px 370px ${(props) => props.color},
      1270px 1570px ${(props) => props.color},
      55px 900px ${(props) => props.color},
      1875px 1291px ${(props) => props.color},
      337px 1251px ${(props) => props.color}, 25px 5px ${(props) => props.color},
      1619px 835px ${(props) => props.color},
      410px 676px ${(props) => props.color},
      956px 531px ${(props) => props.color},
      90px 489px ${(props) => props.color},
      561px 576px ${(props) => props.color},
      907px 45px ${(props) => props.color},
      1657px 810px ${(props) => props.color},
      1029px 1705px ${(props) => props.color},
      1281px 828px ${(props) => props.color},
      466px 961px ${(props) => props.color},
      674px 1105px ${(props) => props.color},
      456px 918px ${(props) => props.color},
      331px 148px ${(props) => props.color},
      1105px 1681px ${(props) => props.color},
      922px 319px ${(props) => props.color},
      1600px 1403px ${(props) => props.color},
      420px 977px ${(props) => props.color},
      166px 1637px ${(props) => props.color},
      1033px 1668px ${(props) => props.color},
      1884px 208px ${(props) => props.color},
      552px 720px ${(props) => props.color},
      1543px 119px ${(props) => props.color},
      587px 103px ${(props) => props.color},
      348px 1766px ${(props) => props.color},
      664px 761px ${(props) => props.color},
      565px 1253px ${(props) => props.color},
      1472px 1332px ${(props) => props.color},
      471px 1569px ${(props) => props.color},
      747px 76px ${(props) => props.color},
      1429px 308px ${(props) => props.color},
      1850px 597px ${(props) => props.color},
      1148px 1085px ${(props) => props.color},
      307px 208px ${(props) => props.color},
      253px 736px ${(props) => props.color},
      148px 122px ${(props) => props.color},
      366px 1163px ${(props) => props.color},
      1589px 1436px ${(props) => props.color},
      1359px 1027px ${(props) => props.color},
      1805px 95px ${(props) => props.color},
      910px 837px ${(props) => props.color},
      1578px 976px ${(props) => props.color},
      954px 710px ${(props) => props.color},
      743px 1552px ${(props) => props.color},
      271px 686px ${(props) => props.color},
      1960px 1336px ${(props) => props.color},
      740px 1431px ${(props) => props.color},
      972px 1184px ${(props) => props.color},
      1690px 1942px ${(props) => props.color},
      1222px 839px ${(props) => props.color},
      1151px 164px ${(props) => props.color},
      1248px 871px ${(props) => props.color},
      893px 1975px ${(props) => props.color},
      1979px 859px ${(props) => props.color},
      139px 642px ${(props) => props.color},
      856px 523px ${(props) => props.color},
      879px 1186px ${(props) => props.color},
      1440px 1036px ${(props) => props.color},
      1624px 1411px ${(props) => props.color},
      1320px 1239px ${(props) => props.color},
      1747px 1662px ${(props) => props.color},
      1155px 765px ${(props) => props.color},
      885px 43px ${(props) => props.color},
      552px 1690px ${(props) => props.color},
      731px 293px ${(props) => props.color},
      1655px 1809px ${(props) => props.color},
      187px 1766px ${(props) => props.color},
      811px 1318px ${(props) => props.color},
      716px 241px ${(props) => props.color},
      633px 668px ${(props) => props.color},
      916px 1359px ${(props) => props.color},
      1054px 620px ${(props) => props.color},
      1038px 1345px ${(props) => props.color},
      1334px 1118px ${(props) => props.color},
      393px 52px ${(props) => props.color},
      1722px 590px ${(props) => props.color},
      1329px 244px ${(props) => props.color},
      1388px 1983px ${(props) => props.color},
      66px 1845px ${(props) => props.color},
      172px 995px ${(props) => props.color},
      1258px 1766px ${(props) => props.color},
      310px 110px ${(props) => props.color},
      1019px 1705px ${(props) => props.color},
      394px 1471px ${(props) => props.color},
      489px 1962px ${(props) => props.color},
      183px 1155px ${(props) => props.color},
      90px 1153px ${(props) => props.color},
      845px 60px ${(props) => props.color},
      403px 1930px ${(props) => props.color},
      820px 256px ${(props) => props.color},
      394px 1716px ${(props) => props.color},
      1744px 690px ${(props) => props.color},
      831px 1562px ${(props) => props.color},
      110px 1000px ${(props) => props.color},
      1604px 585px ${(props) => props.color},
      1954px 1442px ${(props) => props.color},
      397px 1085px ${(props) => props.color},
      242px 1785px ${(props) => props.color},
      1216px 1885px ${(props) => props.color},
      1873px 1700px ${(props) => props.color},
      1181px 8px ${(props) => props.color},
      1978px 701px ${(props) => props.color},
      1968px 391px ${(props) => props.color},
      1621px 947px ${(props) => props.color},
      1142px 1244px ${(props) => props.color},
      558px 584px ${(props) => props.color},
      881px 767px ${(props) => props.color},
      96px 960px ${(props) => props.color},
      1143px 262px ${(props) => props.color},
      690px 1357px ${(props) => props.color},
      218px 1363px ${(props) => props.color},
      1507px 16px ${(props) => props.color},
      1947px 1785px ${(props) => props.color},
      755px 1928px ${(props) => props.color},
      1620px 1126px ${(props) => props.color},
      1194px 1932px ${(props) => props.color},
      728px 1068px ${(props) => props.color},
      542px 1765px ${(props) => props.color},
      1159px 1334px ${(props) => props.color},
      1284px 444px ${(props) => props.color},
      1623px 1161px ${(props) => props.color},
      190px 1011px ${(props) => props.color},
      855px 1379px ${(props) => props.color},
      1244px 30px ${(props) => props.color},
      1144px 1873px ${(props) => props.color},
      1276px 958px ${(props) => props.color},
      1675px 1097px ${(props) => props.color},
      354px 1735px ${(props) => props.color},
      1534px 235px ${(props) => props.color},
      560px 1850px ${(props) => props.color},
      493px 1737px ${(props) => props.color},
      782px 598px ${(props) => props.color},
      1709px 1377px ${(props) => props.color},
      717px 1040px ${(props) => props.color};
    animation: animStar 100s linear infinite;
    &:after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 2px;
      height: 2px;
      background: transparent;
      box-shadow: 592px 134px ${(props) => props.color},
        346px 741px ${(props) => props.color},
        1000px 1781px ${(props) => props.color},
        996px 728px ${(props) => props.color},
        1085px 1462px ${(props) => props.color},
        526px 1128px ${(props) => props.color},
        1951px 557px ${(props) => props.color},
        673px 92px ${(props) => props.color},
        415px 776px ${(props) => props.color},
        1570px 643px ${(props) => props.color},
        121px 697px ${(props) => props.color},
        782px 1847px ${(props) => props.color},
        1853px 256px ${(props) => props.color},
        910px 195px ${(props) => props.color},
        362px 1201px ${(props) => props.color},
        52px 1627px ${(props) => props.color},
        387px 899px ${(props) => props.color},
        547px 1995px ${(props) => props.color},
        1298px 440px ${(props) => props.color},
        1474px 1713px ${(props) => props.color},
        1109px 1322px ${(props) => props.color},
        1720px 1237px ${(props) => props.color},
        473px 1196px ${(props) => props.color},
        1682px 580px ${(props) => props.color},
        1476px 655px ${(props) => props.color},
        1254px 731px ${(props) => props.color},
        1069px 1840px ${(props) => props.color},
        291px 1789px ${(props) => props.color},
        825px 1237px ${(props) => props.color},
        1067px 543px ${(props) => props.color},
        962px 990px ${(props) => props.color},
        1606px 1387px ${(props) => props.color},
        884px 1555px ${(props) => props.color},
        1209px 1830px ${(props) => props.color},
        439px 535px ${(props) => props.color},
        360px 1451px ${(props) => props.color},
        1018px 1837px ${(props) => props.color},
        1964px 677px ${(props) => props.color},
        1095px 159px ${(props) => props.color},
        390px 245px ${(props) => props.color},
        1869px 597px ${(props) => props.color},
        1857px 544px ${(props) => props.color},
        745px 1186px ${(props) => props.color},
        336px 1867px ${(props) => props.color},
        250px 1377px ${(props) => props.color},
        1872px 168px ${(props) => props.color},
        878px 1299px ${(props) => props.color},
        1257px 177px ${(props) => props.color},
        984px 303px ${(props) => props.color},
        544px 303px ${(props) => props.color},
        1250px 1052px ${(props) => props.color},
        152px 1322px ${(props) => props.color},
        1466px 289px ${(props) => props.color},
        1104px 1116px ${(props) => props.color},
        1796px 482px ${(props) => props.color},
        1086px 525px ${(props) => props.color},
        1540px 1822px ${(props) => props.color},
        196px 1999px ${(props) => props.color},
        1893px 771px ${(props) => props.color},
        1171px 1728px ${(props) => props.color},
        1996px 710px ${(props) => props.color},
        436px 370px ${(props) => props.color},
        1270px 1570px ${(props) => props.color},
        55px 900px ${(props) => props.color},
        1875px 1291px ${(props) => props.color},
        337px 1251px ${(props) => props.color},
        25px 5px ${(props) => props.color},
        1619px 835px ${(props) => props.color},
        410px 676px ${(props) => props.color},
        956px 531px ${(props) => props.color},
        90px 489px ${(props) => props.color},
        561px 576px ${(props) => props.color},
        907px 45px ${(props) => props.color},
        1657px 810px ${(props) => props.color},
        1029px 1705px ${(props) => props.color},
        1281px 828px ${(props) => props.color},
        466px 961px ${(props) => props.color},
        674px 1105px ${(props) => props.color},
        456px 918px ${(props) => props.color},
        331px 148px ${(props) => props.color},
        1105px 1681px ${(props) => props.color},
        922px 319px ${(props) => props.color},
        1600px 1403px ${(props) => props.color},
        420px 977px ${(props) => props.color},
        166px 1637px ${(props) => props.color},
        1033px 1668px ${(props) => props.color},
        1884px 208px ${(props) => props.color},
        552px 720px ${(props) => props.color},
        1543px 119px ${(props) => props.color},
        587px 103px ${(props) => props.color},
        348px 1766px ${(props) => props.color},
        664px 761px ${(props) => props.color},
        565px 1253px ${(props) => props.color},
        1472px 1332px ${(props) => props.color},
        471px 1569px ${(props) => props.color},
        747px 76px ${(props) => props.color},
        1429px 308px ${(props) => props.color},
        1850px 597px ${(props) => props.color},
        1148px 1085px ${(props) => props.color},
        307px 208px ${(props) => props.color},
        253px 736px ${(props) => props.color},
        148px 122px ${(props) => props.color},
        366px 1163px ${(props) => props.color},
        1589px 1436px ${(props) => props.color},
        1359px 1027px ${(props) => props.color},
        1805px 95px ${(props) => props.color},
        910px 837px ${(props) => props.color},
        1578px 976px ${(props) => props.color},
        954px 710px ${(props) => props.color},
        743px 1552px ${(props) => props.color},
        271px 686px ${(props) => props.color},
        1960px 1336px ${(props) => props.color},
        740px 1431px ${(props) => props.color},
        972px 1184px ${(props) => props.color},
        1690px 1942px ${(props) => props.color},
        1222px 839px ${(props) => props.color},
        1151px 164px ${(props) => props.color},
        1248px 871px ${(props) => props.color},
        893px 1975px ${(props) => props.color},
        1979px 859px ${(props) => props.color},
        139px 642px ${(props) => props.color},
        856px 523px ${(props) => props.color},
        879px 1186px ${(props) => props.color},
        1440px 1036px ${(props) => props.color},
        1624px 1411px ${(props) => props.color},
        1320px 1239px ${(props) => props.color},
        1747px 1662px ${(props) => props.color},
        1155px 765px ${(props) => props.color},
        885px 43px ${(props) => props.color},
        552px 1690px ${(props) => props.color},
        731px 293px ${(props) => props.color},
        1655px 1809px ${(props) => props.color},
        187px 1766px ${(props) => props.color},
        811px 1318px ${(props) => props.color},
        716px 241px ${(props) => props.color},
        633px 668px ${(props) => props.color},
        916px 1359px ${(props) => props.color},
        1054px 620px ${(props) => props.color},
        1038px 1345px ${(props) => props.color},
        1334px 1118px ${(props) => props.color},
        393px 52px ${(props) => props.color},
        1722px 590px ${(props) => props.color},
        1329px 244px ${(props) => props.color},
        1388px 1983px ${(props) => props.color},
        66px 1845px ${(props) => props.color},
        172px 995px ${(props) => props.color},
        1258px 1766px ${(props) => props.color},
        310px 110px ${(props) => props.color},
        1019px 1705px ${(props) => props.color},
        394px 1471px ${(props) => props.color},
        489px 1962px ${(props) => props.color},
        183px 1155px ${(props) => props.color},
        90px 1153px ${(props) => props.color},
        845px 60px ${(props) => props.color},
        403px 1930px ${(props) => props.color},
        820px 256px ${(props) => props.color},
        394px 1716px ${(props) => props.color},
        1744px 690px ${(props) => props.color},
        831px 1562px ${(props) => props.color},
        110px 1000px ${(props) => props.color},
        1604px 585px ${(props) => props.color},
        1954px 1442px ${(props) => props.color},
        397px 1085px ${(props) => props.color},
        242px 1785px ${(props) => props.color},
        1216px 1885px ${(props) => props.color},
        1873px 1700px ${(props) => props.color},
        1181px 8px ${(props) => props.color},
        1978px 701px ${(props) => props.color},
        1968px 391px ${(props) => props.color},
        1621px 947px ${(props) => props.color},
        1142px 1244px ${(props) => props.color},
        558px 584px ${(props) => props.color},
        881px 767px ${(props) => props.color},
        96px 960px ${(props) => props.color},
        1143px 262px ${(props) => props.color},
        690px 1357px ${(props) => props.color},
        218px 1363px ${(props) => props.color},
        1507px 16px ${(props) => props.color},
        1947px 1785px ${(props) => props.color},
        755px 1928px ${(props) => props.color},
        1620px 1126px ${(props) => props.color},
        1194px 1932px ${(props) => props.color},
        728px 1068px ${(props) => props.color},
        542px 1765px ${(props) => props.color},
        1159px 1334px ${(props) => props.color},
        1284px 444px ${(props) => props.color},
        1623px 1161px ${(props) => props.color},
        190px 1011px ${(props) => props.color},
        855px 1379px ${(props) => props.color},
        1244px 30px ${(props) => props.color},
        1144px 1873px ${(props) => props.color},
        1276px 958px ${(props) => props.color},
        1675px 1097px ${(props) => props.color},
        354px 1735px ${(props) => props.color},
        1534px 235px ${(props) => props.color},
        560px 1850px ${(props) => props.color},
        493px 1737px ${(props) => props.color},
        782px 598px ${(props) => props.color},
        1709px 1377px ${(props) => props.color},
        717px 1040px ${(props) => props.color};
    }
  }

  #stars3 {
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: 222px 946px #fafafa, 408px 926px ${(props) => props.color},
      1608px 1741px ${(props) => props.color},
      1977px 1436px ${(props) => props.color},
      713px 1152px ${(props) => props.color},
      139px 39px ${(props) => props.color},
      497px 1590px ${(props) => props.color},
      1808px 1652px ${(props) => props.color},
      598px 667px ${(props) => props.color},
      1962px 75px ${(props) => props.color},
      331px 1245px ${(props) => props.color},
      1600px 1822px ${(props) => props.color},
      1463px 883px ${(props) => props.color},
      299px 335px ${(props) => props.color},
      1229px 909px ${(props) => props.color},
      448px 581px ${(props) => props.color},
      1346px 571px ${(props) => props.color},
      1247px 458px ${(props) => props.color},
      799px 186px ${(props) => props.color},
      643px 404px ${(props) => props.color},
      1330px 790px ${(props) => props.color},
      299px 699px ${(props) => props.color},
      1593px 1891px ${(props) => props.color},
      934px 1230px ${(props) => props.color},
      1162px 1835px ${(props) => props.color},
      903px 1024px ${(props) => props.color},
      596px 900px ${(props) => props.color},
      1223px 1078px ${(props) => props.color},
      682px 1024px ${(props) => props.color},
      151px 373px ${(props) => props.color},
      54px 1586px ${(props) => props.color},
      657px 1902px ${(props) => props.color},
      812px 273px ${(props) => props.color},
      705px 1142px ${(props) => props.color},
      1902px 1353px ${(props) => props.color},
      1222px 1980px ${(props) => props.color},
      767px 158px ${(props) => props.color},
      22px 663px ${(props) => props.color},
      1055px 727px ${(props) => props.color},
      1728px 750px ${(props) => props.color},
      223px 287px ${(props) => props.color},
      438px 127px ${(props) => props.color},
      224px 1146px ${(props) => props.color},
      1594px 1466px ${(props) => props.color},
      1505px 436px ${(props) => props.color},
      389px 1049px ${(props) => props.color},
      596px 435px ${(props) => props.color},
      1997px 1798px ${(props) => props.color},
      29px 51px ${(props) => props.color}, 40px 514px ${(props) => props.color},
      1779px 769px ${(props) => props.color},
      652px 1211px ${(props) => props.color},
      1599px 347px ${(props) => props.color},
      1854px 1941px ${(props) => props.color},
      485px 1633px ${(props) => props.color},
      697px 1894px ${(props) => props.color},
      1772px 877px ${(props) => props.color},
      555px 1030px ${(props) => props.color},
      976px 1338px ${(props) => props.color},
      541px 1112px ${(props) => props.color},
      817px 899px ${(props) => props.color},
      961px 923px ${(props) => props.color},
      115px 1321px ${(props) => props.color},
      875px 434px ${(props) => props.color},
      1577px 1980px ${(props) => props.color},
      1160px 131px ${(props) => props.color},
      15px 160px ${(props) => props.color}, 979px 56px ${(props) => props.color},
      959px 1756px ${(props) => props.color},
      1358px 435px ${(props) => props.color},
      563px 591px ${(props) => props.color},
      1284px 475px ${(props) => props.color},
      341px 601px ${(props) => props.color},
      74px 471px ${(props) => props.color},
      416px 584px ${(props) => props.color},
      692px 536px ${(props) => props.color},
      1041px 377px ${(props) => props.color},
      1601px 1923px ${(props) => props.color},
      1014px 241px ${(props) => props.color},
      122px 1594px ${(props) => props.color},
      1510px 280px ${(props) => props.color},
      195px 1720px ${(props) => props.color},
      152px 104px ${(props) => props.color},
      1686px 811px ${(props) => props.color},
      1329px 750px ${(props) => props.color},
      1655px 441px ${(props) => props.color},
      1288px 1040px ${(props) => props.color},
      1802px 1368px ${(props) => props.color},
      767px 615px ${(props) => props.color},
      302px 195px ${(props) => props.color},
      1973px 1902px ${(props) => props.color},
      1088px 1583px ${(props) => props.color},
      1840px 1126px ${(props) => props.color},
      500px 111px ${(props) => props.color},
      1263px 667px ${(props) => props.color},
      1748px 121px ${(props) => props.color},
      1608px 364px ${(props) => props.color},
      1064px 1610px ${(props) => props.color},
      1682px 1826px ${(props) => props.color},
      1747px 1800px ${(props) => props.color};
    animation: animStar 150s linear infinite;
    &:after {
      content: "";
      position: absolute;
      top: 2000px;
      width: 3px;
      height: 3px;
      background: transparent;
      box-shadow: 222px 946px ${(props) => props.color},
        408px 926px ${(props) => props.color},
        1608px 1741px ${(props) => props.color},
        1977px 1436px ${(props) => props.color},
        713px 1152px ${(props) => props.color},
        139px 39px ${(props) => props.color},
        497px 1590px ${(props) => props.color},
        1808px 1652px ${(props) => props.color},
        598px 667px ${(props) => props.color},
        1962px 75px ${(props) => props.color},
        331px 1245px ${(props) => props.color},
        1600px 1822px ${(props) => props.color},
        1463px 883px ${(props) => props.color},
        299px 335px ${(props) => props.color},
        1229px 909px ${(props) => props.color},
        448px 581px ${(props) => props.color},
        1346px 571px ${(props) => props.color},
        1247px 458px ${(props) => props.color},
        799px 186px ${(props) => props.color},
        643px 404px ${(props) => props.color},
        1330px 790px ${(props) => props.color},
        299px 699px ${(props) => props.color},
        1593px 1891px ${(props) => props.color},
        934px 1230px ${(props) => props.color},
        1162px 1835px ${(props) => props.color},
        903px 1024px ${(props) => props.color},
        596px 900px ${(props) => props.color},
        1223px 1078px ${(props) => props.color},
        682px 1024px ${(props) => props.color},
        151px 373px ${(props) => props.color},
        54px 1586px ${(props) => props.color},
        657px 1902px ${(props) => props.color},
        812px 273px ${(props) => props.color},
        705px 1142px ${(props) => props.color},
        1902px 1353px ${(props) => props.color},
        1222px 1980px ${(props) => props.color},
        767px 158px ${(props) => props.color},
        22px 663px ${(props) => props.color},
        1055px 727px ${(props) => props.color},
        1728px 750px ${(props) => props.color},
        223px 287px ${(props) => props.color},
        438px 127px ${(props) => props.color},
        224px 1146px ${(props) => props.color},
        1594px 1466px ${(props) => props.color},
        1505px 436px ${(props) => props.color},
        389px 1049px ${(props) => props.color},
        596px 435px ${(props) => props.color},
        1997px 1798px ${(props) => props.color},
        29px 51px ${(props) => props.color},
        40px 514px ${(props) => props.color},
        1779px 769px ${(props) => props.color},
        652px 1211px ${(props) => props.color},
        1599px 347px ${(props) => props.color},
        1854px 1941px ${(props) => props.color},
        485px 1633px ${(props) => props.color},
        697px 1894px ${(props) => props.color},
        1772px 877px ${(props) => props.color},
        555px 1030px ${(props) => props.color},
        976px 1338px ${(props) => props.color},
        541px 1112px ${(props) => props.color},
        817px 899px ${(props) => props.color},
        961px 923px ${(props) => props.color},
        115px 1321px ${(props) => props.color},
        875px 434px ${(props) => props.color},
        1577px 1980px ${(props) => props.color},
        1160px 131px ${(props) => props.color},
        15px 160px ${(props) => props.color},
        979px 56px ${(props) => props.color},
        959px 1756px ${(props) => props.color},
        1358px 435px ${(props) => props.color},
        563px 591px ${(props) => props.color},
        1284px 475px ${(props) => props.color},
        341px 601px ${(props) => props.color},
        74px 471px ${(props) => props.color},
        416px 584px ${(props) => props.color},
        692px 536px ${(props) => props.color},
        1041px 377px ${(props) => props.color},
        1601px 1923px ${(props) => props.color},
        1014px 241px ${(props) => props.color},
        122px 1594px ${(props) => props.color},
        1510px 280px ${(props) => props.color},
        195px 1720px ${(props) => props.color},
        152px 104px ${(props) => props.color},
        1686px 811px ${(props) => props.color},
        1329px 750px ${(props) => props.color},
        1655px 441px ${(props) => props.color},
        1288px 1040px ${(props) => props.color},
        1802px 1368px ${(props) => props.color},
        767px 615px ${(props) => props.color},
        302px 195px ${(props) => props.color},
        1973px 1902px ${(props) => props.color},
        1088px 1583px ${(props) => props.color},
        1840px 1126px ${(props) => props.color},
        500px 111px ${(props) => props.color},
        1263px 667px ${(props) => props.color},
        1748px 121px ${(props) => props.color},
        1608px 364px ${(props) => props.color},
        1064px 1610px ${(props) => props.color},
        1682px 1826px ${(props) => props.color},
        1747px 1800px ${(props) => props.color};
    }
  }

  @keyframes animStar {
    from {
      transform: translateY(0px);
    }

    to {
      transform: translateY(-2000px);
    }
  }
`;
