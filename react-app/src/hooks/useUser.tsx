import { useEffect, useState } from 'react'
import { User } from '../interfaces/request_response'
import { loadUserActions } from '../actions/load-user'

export default function useUsers() {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        loadUserActions().then((users) => setUsers(users))
    }, [])

    return { users }
}