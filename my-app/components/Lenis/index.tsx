"use client"
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

function Lenis({children}: {children: React.ReactNode;}) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root options={{
      lerp:0.05
    }}>
      {children}
    </ReactLenis>
  )
}

export default Lenis;