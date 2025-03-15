import API from '@/api'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div>Hello "/"!</div>
      <button onClick={() => { API.Get(import.meta.env.VITE_BASE_URL_MOCK+'/mock/user/list').then((res) => { console.log(res.data) }) }}>button</button>
    </>
  )
}
