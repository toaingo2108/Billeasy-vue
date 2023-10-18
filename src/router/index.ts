// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "products",
        name: "products",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Products.vue"),
      },
      {
        path: "customers",
        name: "customers",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Customers.vue"),
      },
      {
        path: "new-customer",
        name: "new-customer",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/components/customers/NewCustomer.vue"
          ),
      },
      {
        path: "customer-details",
        name: "customer-details",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/components/customers/CustomerDetails.vue"
          ),
      },
      {
        path: "invoices",
        name: "invoices",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Invoices.vue"),
      },
      {
        path: "404",
        name: "404",
        component: () => import("@/views/NotFound.vue"),
      },
      {
        path: "/500",
        name: "500",
        component: () => import("@/views/ServerError.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
