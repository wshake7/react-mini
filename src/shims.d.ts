

declare module '*.tsx' {
  import { ComponentType } from 'react'

  const React: ComponentType<any>
  export default React
}
