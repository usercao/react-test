import * as React from 'react'
import { MacScrollbar, MacScrollbarProps } from 'mac-scrollbar'
import styled from 'styled-components'

import 'mac-scrollbar/dist/mac-scrollbar.css'

const Wrapper = styled(MacScrollbar)<ScrollbarProps>`
  height: inherit;
`

export interface ScrollbarProps extends MacScrollbarProps {}

const Scrollbar: React.FC<ScrollbarProps> = (props: ScrollbarProps) => {
  const { as, children, ...rest } = props

  return (
    <Wrapper
      forwardedAs={as as keyof JSX.IntrinsicElements}
      trackStyle={(horizontal) => ({ [horizontal ? 'height' : 'width']: 0 })}
      thumbStyle={(horizontal) => ({ [horizontal ? 'height' : 'width']: 3 })}
      {...rest}
    >
      {children}
    </Wrapper>
  )
}

export default Scrollbar
