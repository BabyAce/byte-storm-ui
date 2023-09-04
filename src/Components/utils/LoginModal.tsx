import { useState, useRef } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/FirebaseConfig'
import { useNavigate } from 'react-router-dom'

export const LoginModal = () => {
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const navigate = useNavigate()

  const [loginLoading, setLoginLoading] = useState(false)
  const [loginError, setLoginError] = useState('')
  
  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setLoginLoading(true)

    const email = emailRef.current !== null ? emailRef.current.value : ''
    const password = passwordRef.current !== null ? passwordRef.current.value : ''

    signInWithEmailAndPassword(auth, email, password)
      .then(data => {
        // Signed in
        console.log('then user: ', data.user)
        setLoginLoading(false)
        setLoginError('')
        navigate('/company')
      })
      .catch(error => {
        console.log('error on login in: ', error)
        setLoginLoading(false)
        setLoginError(error.message)
      })
  }

  return (
    <div className="modal fade" id="loginModal" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="loginModalLabel">LOGIN</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            { loginLoading ?
              ( <h1>Loading...</h1> ) :
              (
                <form id="login-form" className="form-group mb-3" onSubmit={handleLogin}>
                  <div className="form-floating mb-3">
                    <input
                      ref={emailRef}
                      className="form-control"
                      aria-describedby="inputGroup-sizing-default"
                      id="email"
                      type="email"
                      required
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      ref={passwordRef}
                      className="form-control"
                      aria-describedby="inputGroup-sizing-default"
                      id="password"
                      type="password"
                      required
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <button type="submit" className="btn btn-success">LOGIN</button>
                </form>
              )
            }
            { loginError !== '' && (<div className="error-message text-danger"><p>{loginError}</p></div>) }
            </div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </div>
  )
}