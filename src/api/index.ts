import { createAlova } from 'alova'
import adapterFetch from 'alova/fetch'
import reactHook from 'alova/react'

export const API = createAlova({
  statesHook: reactHook,
  requestAdapter: adapterFetch(),
  // beforeRequest() {
  //   nProgress.start()
  // },
  // responded() {
  //   nProgress.done()
  // }
})

export default API
