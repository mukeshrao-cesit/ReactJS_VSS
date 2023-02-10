import { signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import { auth } from "./firebase";

export const signUp = async () => {
  const provider = new GithubAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account",
  });
  const res = await signInWithPopup(auth, provider)
    .then((result) => {
      return result.user.providerData[0];
    })
    .catch((error) => {
      return error;
    });
  return res;
};

export const SignOut = async () => {
  const res = await signOut(auth)
    .then((res) => {
      return true;
    })
    .catch((err) => {
      return false;
    });
  return res;
};
