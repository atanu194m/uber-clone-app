
import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const CaptainLogout = () => {
    const token = localStorage.getItem('token') || localStorage.getItem('captain-token')
    const navigate = useNavigate()

    useEffect(() => {
        const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:4000'
        axios.get(`${baseUrl}/captains/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(err => console.log('Logout error:', err))
        .finally(() => {
            localStorage.removeItem('token')
            localStorage.removeItem('captain-token')
            navigate('/captain-login')
        })
    }, [ navigate, token ])

    return (
        <div className='p-6 text-center text-lg'>Logging out...</div>
    )
}

export default CaptainLogout