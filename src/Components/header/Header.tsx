import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../config/FirebaseConfig'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const handleLogout = () => {
   auth.signOut()
    .then(() => {
      console.log('Successfully log out')
      navigate('/')
    })
    .catch(err => {
      console.log('error on logout: ', err)
    });
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Byte Storm</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Company Name</a>
            </li>
          </ul>
          {user ? (
            <div className="d-flex align-items-center">
              <span className="me-2">{user.email}</span>
              <button className="btn btn-secondary btn-md"
                onClick={handleLogout}>
                LOGOUT
              </button>
            </div>
          ) :(
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">
              LOGIN
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}