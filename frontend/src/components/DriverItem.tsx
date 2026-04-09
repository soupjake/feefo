import List from 'antd/es/list'
import { useAppDispatch } from '../hooks/storeHooks'
import { useCallback } from 'react'
import { setSelected } from '../store/driver/driverSlice'
import type { Driver } from '../types/driver'

export const DriverItem = (driver: Driver) => {
    const dispatch = useAppDispatch()

    const onClick = useCallback(() => {
        dispatch(setSelected(driver))
    }, [driver, dispatch])
    
    return (
        <List.Item onClick={onClick}>
            <List.Item.Meta
                title={driver.name}
                description={<p>{`Id: ${driver.id} Status: ${driver.status}`}</p>}
            />
        </List.Item>
    )
}
