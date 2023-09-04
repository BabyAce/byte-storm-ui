import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../config/FirebaseConfig'
import { useNavigate } from 'react-router-dom'

export const Company = () => {
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()

  console.log('auth: ', auth)

  useEffect(() => {
    console.log('companyuser: ', user)
    console.log('loading: ', loading)
  
    if (!user && !loading) navigate('/')
  }, [user, loading])

  return (
    <h1>Company</h1>
  )
}