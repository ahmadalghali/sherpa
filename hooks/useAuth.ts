import { deleteCookie, setCookie , removeCookies, hasCookie } from "cookies-next"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";

type AuthRequest = { email: string; password: string };
type AuthResponse = { accessToken: string; refreshToken: string };

export default function useAuth() {
  const router = useRouter()
  const dispatch = useDispatch()

  const login = async ({ email, password }: AuthRequest) => {
    // hardcoding user for now
    const dummyUser = { email: 'ahmad' }
    dispatch(setUser(dummyUser))
    setCookie('user', { user: dummyUser, expires: new Date(0) })
    router.push("/dashboard");

  //   const { data: response } = await api.post<AuthResponse>("/authentication/login/", {
  //     username: email,
  //     password: password,
  //   });

  //   if (response.accessToken) {
  //   } else {
  //     alert("Login unsuccessful");
  //   }
  }

  const logout = () => {
    deleteCookie("user");
    dispatch(setUser(null))
    router.replace('/login')
  }

  const isLoggedIn = hasCookie('user')

  
  return { login, logout, isLoggedIn }
}