import { useEffect } from 'react'
import './App.css'
import { useAppDispatch } from './hooks/storeHooks'
import { initFetch } from './store/initThunks'
import { Drivers } from './components/Drivers'
import { Quote } from './components/Quote'
import { Status } from './components/Status'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initFetch())
  }, [dispatch])

  return (
    <>
      <span className='logo'>🚗 😎 🚗</span>
      <Status />
      <Drivers />
      <Quote />
    </>
  )
}

export default App
