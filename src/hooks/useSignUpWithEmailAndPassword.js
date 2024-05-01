import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from '../firebase/firebase'
import { doc, setDoc } from 'firebase/firestore'
import useShowToast from "./useShowToast";

const useSignUpWithEmailAndPassword = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth)

    const showToast = useShowToast()

    const signup = async(inputs)=>{
        if(!inputs.email || !inputs.password || !inputs.nomedeUsuario || !inputs.nomeCompleto){
            showToast("Erro", "Por favor preencha todos os campos", "error")
            return
        }

        try{
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
            if(!newUser && error){
                showToast("Erro", error.message, "error")
                return
            }
            if(newUser){
                const userDoc ={
                    uid:newUser.user.uid,
                    email:inputs.email,
                    username:inputs.nomedeUsuario,
                    fullname:inputs.nomeCompleto,
                    bio:"",
                    profilePicURL:"",
                    followers:[],
                    following:[],
                    posts:[],
                    createdAt:Date.now()
                }
                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc)
                localStorage.setItem("user-info", JSON.stringify(userDoc))
            }
        }catch(error){
            showToast("Erro", error.message, "error")
        }
    }
    return {
        loading, 
        error,
        signup
  }
}

export default useSignUpWithEmailAndPassword