import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*,*::before,*::after{
  margin: 0;
  padding: 0;
}
h1,h2,h3,h4,h5,h6{
margin: 0;
padding: 0;
}
button,a{
  -webkit-tap-highlight-color: transparent;
}
body{
  font-family: 'Sirin Stencil';
  background-color: black;
  overflow-x: hidden;
}
section {
  border: 1px solid transparent;
}
a{
  color: inherit;
  text-decoration: none;
}
::-webkit-scrollbar {
    width: 12px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #181818;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #ffdf00;
    border-radius: 6px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`
export default GlobalStyles
