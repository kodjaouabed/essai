
import './App.css'
import { GoogleLogin } from '@react-oauth/google';

function App() {
  

  return (
    <>
    <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log('Connexion réussie', credentialResponse);
        }}
        onError={() => {
          console.log('Échec de la connexion');
        }}
      />
    </>
  )
}

export default App
