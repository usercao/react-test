import * as React from 'react'
import styled from 'styled-components'
import { Scrollbar } from '@/components'

const BodyWrapper = styled.main`
  height: calc(100vh - 48px);
  background: gray;
  overflow: hidden;
  .ms-container {
    height: inherit;
  }
  div {
    background: green;
  }
`

function Layout() {
  return (
    <React.Fragment>
      <BodyWrapper>
        <Scrollbar>
          {/* <Outlet /> */}
          <div style={{ height: 2000 }}>212122</div>
        </Scrollbar>
      </BodyWrapper>
    </React.Fragment>
  )
}

export default Layout
