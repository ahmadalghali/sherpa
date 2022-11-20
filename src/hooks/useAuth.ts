import { deleteCookie, setCookie, removeCookies, hasCookie } from "cookies-next"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setUser } from "../store/slices/userSlice";

type LoginRequest = { username: string; password: string };
type RegisterRequest = { email: string; username: string; password: string };
type AuthResponse = { accessToken: string; refreshToken: string };

export default function useAuth() {
  const router = useRouter()
  const dispatch = useDispatch()

  const dummyLogin = () => {
    console.log('test')
    const dummyUser = { user: 'user' }

    setCookie('user', { user: dummyUser, expires: new Date(0) })
    router.push("/dashboard");
  }

  const login = async ({ username, password }: LoginRequest) => {

    // const { data: response } = await api.post<AuthResponse>("/authentication/login/", {
    //   username: username,
    //   password: password,
    // });
  }


  const register = async ({ email, username, password }: RegisterRequest) => {
    // hardcoding user for now

    toast.warn("Waiting for server to be fixed", { autoClose: 2000 })


    // const { data } = await api.post<AuthResponse>("/users/", {
    //   username: username,
    //   email: email,
    //   password: password,
    // });
    // console.log('data', data)

    return

    // if (response.accessToken) {
    //   // dispatch(setUser(dummyUser))
    //   setCookie('user', { user: response, expires: new Date(0) })
    //   router.push("/dashboard");
    //   console.log('JSON.stringify(response)', JSON.stringify(response))
    // } else {
    //   alert("Email or password incorrect");
    // }
  }

  const logout = () => {
    deleteCookie("user");
    dispatch(setUser(null))
    router.replace('/login')
  }

  const dummyLogout = () => {
    deleteCookie("user");
    dispatch(setUser(null))
    router.replace('/')
  }

  const isLoggedIn = hasCookie('user')


  return { login, logout, register, dummyLogin, dummyLogout, isLoggedIn }
}