import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { FirebaseAuth } from './config'

export const loginEmailPassword = async ({ email, password }) => {
  try {
    const { user } = await signInWithEmailAndPassword(FirebaseAuth, email, password)
    const { uid, displayName, photoURL } = user
    // updateProfile(user, { displayName: '' })
    return {
      ok: true,
      uid,
      displayName,
      photoURL
    }
  } catch (err) {
    return {
      ok: false,
      errorMessage: err.message
    }
  }
}

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut()
}
