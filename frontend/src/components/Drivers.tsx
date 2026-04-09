import { useAppSelector } from '../hooks/storeHooks'
import { 
    selectDrivers,
    selectDriversError,
    selectDriversLoading,
} from '../store/driver/driverSelectors'
import List from 'antd/es/list'
import { DriverItem } from './DriverItem'

export const Drivers = () => {
    const drivers = useAppSelector(selectDrivers)
    const loading = useAppSelector(selectDriversLoading)
    const error = useAppSelector(selectDriversError)

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }
    
    return (
        <List
            itemLayout="vertical"
            dataSource={drivers}
            renderItem={DriverItem}
        />
    )
}
