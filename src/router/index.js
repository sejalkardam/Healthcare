import { createWebHistory, createRouter } from "vue-router"
import HomePage from "@/components/HomePage.vue"
import LoginPage from "@/components/LoginPage.vue"
import RegisterPage from "@/components/RegisterPage.vue"
import findingDoc from "@/components/findingDoc.vue"
import ProfilePatient from "@/components/ProfilePatient.vue"
import paymentPage from "@/components/paymentPage.vue"
import about from "@/components/about.vue"
import findingHosp from "@/components/findingHosp.vue"
import findingPharmacy from "@/components/findingPharmacy.vue"
import findingInsurance from "@/components/findingInsurance.vue"

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
    path: '/findingDoc',
    name: "findingDoc",
    component: findingDoc,
  },
  {
    path: '/findingHosp',
    name: "findingHosp",
    component: findingHosp,
  },
  {
    path: '/findingInsurance',
    name: "findingInsurance",
    component: findingInsurance,
  },
  {
    path: '/findingPharmacy',
    name: "findingPharmacy",
    component: findingPharmacy,
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