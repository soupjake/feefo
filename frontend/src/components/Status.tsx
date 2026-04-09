import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { setStatus } from "../store/user/userSlice";
import { selectUserStatus } from "../store/user/userSelectors";
import { socket } from "../services/socket";
import type { UserStatus } from "../types/UserStatus";
import { Button } from "antd";

export const Status = () => {
    const dispatch = useAppDispatch()
    const status = useAppSelector(selectUserStatus)

    const handleStatus = useCallback((status: UserStatus) => {
      dispatch(setStatus(status));
    }, [dispatch])

    useEffect(() => {
        socket.on("ride_update", handleStatus)

        return () => {
            socket.off("ride_update")
        };
    }, [handleStatus, dispatch]);

    const onClick = useCallback(() => {
      dispatch(setStatus("riding"))
    }, [dispatch])

  return (
    <>
      <p>{status}</p>
      {status === "driver accepted" ? (
        <Button type="primary" onClick={onClick}>Accept Ride</Button>
      ) : null}
    </>
  );
}
