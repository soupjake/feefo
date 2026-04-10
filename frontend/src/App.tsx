import { useEffect } from 'react'
import './App.css'
import { useAppDispatch } from './hooks/storeHooks'
import { initFetch } from './store/initThunks'
import { Ratings } from './components/Ratings'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initFetch())
  }, [dispatch])

  return (
    <>
      <span className='logo'>⭐ 😎 ⭐</span>
      <Ratings />
    </>
  )
}

export default App
