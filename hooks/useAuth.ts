import { deleteCookie, setCookie , removeCookies, hasCookie } from "cookies-next"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux";
import { api } from "../api";
import { setUser } from "../store/slices/userSlice";

type AuthRequest = { email: string; password: string };
type AuthResponse = { accessToken: string; refreshToken: string };

export default function useAuth() {
  const router = useRouter()
  const dispatch = useDispatch()

  const login = async ({ email, password }: AuthRequest) => {
    // hardcoding user for now
    // const dummyUser = { email: 'ahmad' }
    // dispatch(setUser(dummyUser))
    // setCookie('user', { user: dummyUser, expires: new Date(0) })
    // router.push("/dashboard");

    // const { data: response } = await api.post<AuthResponse>("/authentication/login/", {
    //   username: email,
    //   password: password,
    // });

    const response = await fetch('https://sherpa-test-server.fly.dev/authentication/login/', {
      method: 'POST',
      body: JSON.stringify({
      username: email,
      password: password,
    }),
      headers: {
        'Content-type': 'application/json',
      },
    })

    console.log('response', response)

    // const { data: response } = await api.post<AuthResponse>("/authentication/login/", {
    //   username: email,
    //   password: password,
    // });

    // if (response.accessToken) {
    //   alert(JSON.stringify(response))
    // } else {
    //   alert("Login unsuccessful");
    // }
  }

  const logout = () => {
    deleteCookie("user");
    dispatch(setUser(null))
    router.replace('/login')
  }

  const isLoggedIn = hasCookie('user')

  
  return { login, logout, isLoggedIn }
}