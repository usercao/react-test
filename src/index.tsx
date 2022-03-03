import * as React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// fix slider https://github.com/ant-design/ant-design/issues/26136
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // <React.StrictMode>
  //   <RecoilRoot>
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   </RecoilRoot>
  // </React.StrictMode>,
  document.getElementById('root')
)
