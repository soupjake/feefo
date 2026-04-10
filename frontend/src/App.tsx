import { useEffect } from 'react'
import './App.css'
import { useAppDispatch } from './hooks/storeHooks'
import { initFetch } from './store/initThunks'
import { RatingScores } from './components/RatingScores'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initFetch())
  }, [dispatch])

  return (
    <>
      <span className='logo'>⭐ 😎 ⭐</span>
      <RatingScores />
    </>
  )
}

export default App
