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
        path: "edit-invoice",
        name: "edit-invoice",
        component: () =>
          import(
            /* webpackChunkName: "edit-invoice" */ "@/components/invoices/EditInvoice.vue"
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
        path: "imported-invoices",
        name: "imported-invoices",
        component: () =>
          import(
            /* webpackChunkName: "imported-invoices" */ "@/components/invoices/ImportedInvoices.vue"
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
        path: "settings",
        name: "settings",
        component: () =>
          import(/* webpackChunkName: "settings" */ "@/views/Settings.vue"),
      },
      {
        path: "fortnox-settings",
        name: "fortnox-settings",
        component: () =>
          import(
            /* webpackChunkName: "fortnox-settings" */ "@/components/settings/FortnoxSettings.vue"
          ),
      },
      {
        path: "users",
        name: "users",
        component: () =>
          import(/* webpackChunkName: "users" */ "@/views/Users.vue"),
      },
      {
        path: "event-log",
        name: "event-log",
        component: () =>
          import(/* webpackChunkName: "event-log" */ "@/views/EventLog.vue"),
      },
      {
        path: "reports",
        name: "reports",
        component: () =>
          import(/* webpackChunkName: "reports" */ "@/views/Reports.vue"),
      },
      {
        path: "company-settings",
        name: "company-setting",
        component: () =>
          import(
            /* webpackChunkName: "company-settings" */ "@/views/CompanySettings.vue"
          ),
        children: [
          {
            path: "information",
            name: "company-information",
            component: () =>
              import(
                /* webpackChunkName: "company-settings-information" */ "@/components/company_settings/CompanyInformation.vue"
              ),
          },
          {
            path: "account",
            name: "company-account",
            component: () =>
              import(
                /* webpackChunkName: "company-settings-account" */ "@/components/company_settings/AccountSettings.vue"
              ),
          },
          {
            path: "subscriptions",
            name: "company-subscriptions",
            component: () =>
              import(
                /* webpackChunkName: "company-settings-subscriptions" */ "@/components/company_settings/CompanySubscriptions.vue"
              ),
          },
          {
            path: "register",
            name: "company-register",
            component: () =>
              import(
                /* webpackChunkName: "company-settings-register" */ "@/components/company_settings/CompanyRegisterSettings.vue"
              ),
          },
          {
            path: "custom-fields",
            name: "company-custom-fields",
            component: () =>
              import(
                /* webpackChunkName: "company-settings-custom-fields" */ "@/components/company_settings/CustomInvoiceFields.vue"
              ),
          },
          {
            path: "reminder-flows",
            name: "company-reminder-flows",
            component: () =>
              import(
                /* webpackChunkName: "company-settings-reminder-flows" */ "@/components/company_settings/CustomReminderFlows.vue"
              ),
          },
          {
            path: "templates",
            name: "company-templates",
            component: () =>
              import(
                /* webpackChunkName: "company-settings-templates" */ "@/components/company_settings/CompanyTemplates.vue"
              ),
            children: [
              {
                path: "subscription",
                name: "company-templates-subscription",
                component: () =>
                  import(
                    /* webpackChunkName: "company-templates-subscription" */ "@/components/company_settings/CompanySubscriptionsTemplates.vue"
                  ),
              },
              {
                path: "new-subscription",
                name: "company-templates-subscription-new",
                component: () =>
                  import(
                    /* webpackChunkName: "company-templates-subscription-new" */ "@/components/company_settings/CompanyNewSubscriptionsTemplates.vue"
                  ),
              },
              {
                path: "invoice",
                name: "company-templates-invoice",
                component: () =>
                  import(
                    /* webpackChunkName: "company-templates-invoice" */ "@/components/company_settings/CompanyInvoiceTemplates.vue"
                  ),
              },
              {
                path: "new-invoice",
                name: "company-templates-invoice-new",
                component: () =>
                  import(
                    /* webpackChunkName: "company-templates-invoice-new" */ "@/components/company_settings/CompanyNewInvoiceTemplates.vue"
                  ),
              },
            ],
          },
          {
            path: "payment-methods",
            name: "company-payment-methods",
            component: () =>
              import(
                /* webpackChunkName: "company-settings-payment-methods" */ "@/components/company_settings/CompanyPaymentMethods.vue"
              ),
          },
        ],
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
    path: "/landing",
    component: () => import("@/layouts/default/Landing.vue"),
    children: [
      {
        path: "",
        name: "landing-index",
        component: () =>
          import(
            /* webpackChunkName: "landing-index" */ "@/views/landing/Index.vue"
          ),
      },
      {
        path: "features",
        name: "landing-features",
        component: () =>
          import(
            /* webpackChunkName: "landing-features" */ "@/views/landing/Features.vue"
          ),
      },
      {
        path: "about",
        name: "landing-about",
        component: () =>
          import(
            /* webpackChunkName: "landing-about" */ "@/views/landing/AboutUs.vue"
          ),
      },
      {
        path: "contact",
        name: "landing-contact",
        component: () =>
          import(
            /* webpackChunkName: "landing-contact" */ "@/views/landing/Contact.vue"
          ),
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
