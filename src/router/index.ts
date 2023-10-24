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
          import(/* webpackChunkName: "products" */ "@/views/Products.vue"),
      },
      {
        path: "customers",
        name: "customers",
        component: () =>
          import(/* webpackChunkName: "customers" */ "@/views/Customers.vue"),
      },
      {
        path: "new-customer",
        name: "new-customer",
        component: () =>
          import(
            /* webpackChunkName: "new-customer" */ "@/components/customers/NewCustomer.vue"
          ),
      },
      {
        path: "customer-details",
        name: "customer-details",
        component: () =>
          import(
            /* webpackChunkName: "customer-details" */ "@/components/customers/CustomerDetails.vue"
          ),
      },
      {
        path: "invoices",
        name: "invoices",
        component: () =>
          import(/* webpackChunkName: "invoices" */ "@/views/Invoices.vue"),
      },
      {
        path: "new-invoice",
        name: "new-invoice",
        component: () =>
          import(
            /* webpackChunkName: "new-invoice" */ "@/components/invoices/NewInvoice.vue"
          ),
      },
      {
        path: "invoice-details",
        name: "invoice-details",
        component: () =>
          import(
            /* webpackChunkName: "invoice-details" */ "@/components/invoices/InvoiceDetails.vue"
          ),
      },
      {
        path: "subscriptions",
        name: "subscriptions",
        component: () =>
          import(
            /* webpackChunkName: "subscriptions" */ "@/views/Subscriptions.vue"
          ),
      },
      {
        path: "new-subscription",
        name: "new-subscription",
        component: () =>
          import(
            /* webpackChunkName: "new-subscription" */ "@/components/subscriptions/NewSubscription.vue"
          ),
      },
      {
        path: "subscription-details",
        name: "subscription-details",
        component: () =>
          import(
            /* webpackChunkName: "subscription-details" */ "@/components/subscriptions/SubscriptionDetails.vue"
          ),
      },
      {
        path: "todos",
        name: "todos",
        component: () =>
          import(/* webpackChunkName: "todos" */ "@/views/Todos.vue"),
      },
      {
        path: "todos-customize",
        name: "todos-customize",
        component: () =>
          import(
            /* webpackChunkName: "todos-customize" */ "@/components/todos/TodosCustomize.vue"
          ),
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
