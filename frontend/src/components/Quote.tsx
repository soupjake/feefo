import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks'
import {  selectDriversSelected } from '../store/driver/driverSelectors'
import { fetchQuoteById } from '../store/user/userThunks'
import { setSelected } from '../store/driver/driverSlice'
import { QuoteDetails } from './QuoteDetails'
import Modal from 'antd/es/modal/Modal'
import { socket } from '../services/socket'

export const Quote = () => {
    const dispatch = useAppDispatch()
    const selected = useAppSelector(selectDriversSelected)

    useEffect(() => {
        if (selected?.id) {
            dispatch(fetchQuoteById(selected.id))
        }
    }, [selected, dispatch])

    const onCancel = useCallback(() => {
        dispatch(setSelected(undefined))
    }, [dispatch])

    const onOk = useCallback(() => {
        socket.emit("requestRide", selected?.id);
        dispatch(setSelected(undefined))
    }, [selected, dispatch])

    return (
        <Modal
            title="Quote details"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={!!selected}
            onOk={onOk}
            onCancel={onCancel}
        >
            <QuoteDetails />
        </Modal>
    )
}
