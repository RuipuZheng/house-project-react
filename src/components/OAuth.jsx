import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { serverTimestamp, setDoc, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
function OAuth() {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      //check for the user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          Timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("couldn't connect to Google");
    }
  }
  return (
    <button
      onClick={onGoogleClick}
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 text-sm font-medium rounded hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out"
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
}
export default OAuth;
