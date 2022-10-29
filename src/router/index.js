import { createWebHistory, createRouter } from "vue-router"
import HomePage from "@/components/HomePage.vue"
import LoginPage from "@/components/LoginPage.vue"
import RegisterPage from "@/components/RegisterPage.vue"
import FindADocPage from "@/components/FindADocPage.vue"
import ProfilePatient from "@/components/ProfilePatient.vue"
import paymentPage from "@/components/paymentPage.vue"
import about from "@/components/about.vue"
const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
      },
  {
    path: "/LoginPage",
    name: "LoginPage",
    component: LoginPage,
  },

  {
    path: '/FindADocPage',
    name: "FindADocPage",
    component: FindADocPage,
  },

  {
    path: '/ProfilePatient',
    name: "ProfilePatient",
    component: ProfilePatient,
  },
  {
    path: "/RegisterPage",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/paymentPage",
    name: "paymentPage",
    component: paymentPage,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router