import { initData, useSignal } from '@telegram-apps/sdk-solid'
import { createSignal, onMount } from 'solid-js'

import { trpc } from '@/api/trpc'

const App = () => {
  const initDataState = useSignal(initData.state)
  const [greetsFromServer, setGreetsFromServer] = createSignal<
    string | undefined
  >(undefined)

  onMount(() => {
    trpc.helloController.greetings.query().then(res => {
      setGreetsFromServer(res)
    })
  })

  return (
    <div class="h-full flex flex-col items-center justify-center">
      <div class="text-2xl font-medium">TMA Template</div>
      <div>{initDataState()?.user.username}</div>
      <div>{greetsFromServer()}</div>
    </div>
  )
}

export default App
