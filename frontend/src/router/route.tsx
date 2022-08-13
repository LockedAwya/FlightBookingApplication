import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'
import SecretPage from '../pages/SecretPage'
import Profile from '../components/Profile'
import ProfilePage from '../pages/ProfilePage'

const routes = [
  {
    path: '/',
    component: <HomePage />
  },
  {
    path: '/login',
    component: <LoginPage />,
  },
  {
    path: '/register',
    component: <RegisterPage />,
  },

  {
    path: '/me',
    component: <ProfilePage />,
  },

  //for testing frontend purposes
  // {
  //   path: 'secret',
  //   component: <SecretPage />
  // },
  // {
  //   path: 'profileTest',
  //   component: <Profile />
  // }

];

export default routes;