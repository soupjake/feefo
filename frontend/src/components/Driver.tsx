import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks'
import { 
    selectDriversSelected,
    selectDriversError,
    selectDriversLoading,
} from '../store/driver/driverSelectors'
import { fetchDriverById } from '../store/driver/driverThunks'
import { useParams } from 'react-router-dom'

export const Driver = () => {
    const dispatch = useAppDispatch()
    const driver = useAppSelector(selectDriversSelected)
    const loading = useAppSelector(selectDriversLoading)
    const error = useAppSelector(selectDriversError)
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            dispatch(fetchDriverById(id))
        }
    }, [id, dispatch])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    if (!driver) {
        return <div>Driver not found</div>
    }
    
    return (
        <p>{driver.name}</p>
    )
}
