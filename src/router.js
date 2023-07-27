import Vue from "vue";
import Router from "vue-router";
import SettingsSubscriptionCancel from "./components/SettingsSubscriptionCancel";
import PasswordUpdateConfirmation from "./components/PasswordUpdateConfirmation";
import SignUp from "./components/SignUp";
import CreateNewPassword from "./components/CreateNewPassword";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import SettingsReminderFlowsNew from "./components/SettingsReminderFlowsNew";
import SettingsReminderFlowsEdit from "./components/SettingsReminderFlowsEdit";
import SettingsCustomFields from "./components/SettingsCustomFields";
import SettingsRegisterVATRatesNew from "./components/SettingsRegisterVATRatesNew";
import SettingsRegisterUnitsNew from "./components/SettingsRegisterUnitsNew";
import SettingsRegisterPriceLists from "./components/SettingsRegisterPriceLists";
import SettingsRegisterPriceListsNew from "./components/SettingsRegisterPriceListsNew";
import SettingsRegisterPaymentTermsNew from "./components/SettingsRegisterPaymentTermsNew";
import SettingsRegisterCurrenciesNewCurren from "./components/SettingsRegisterCurrenciesNewCurren";
import SettingsSubscriptionIntegrations from "./components/SettingsSubscriptionIntegrations";
import SettingsSubscriptionIntegrationsInf from "./components/SettingsSubscriptionIntegrationsInf";
import SettingsSubscriptionIntegrationsInf2 from "./components/SettingsSubscriptionIntegrationsInf2";
import SettingsAccountSettings from "./components/SettingsAccountSettings";
import SettingsSubscriptionPackage from "./components/SettingsSubscriptionPackage";
import SettingsSubscriptionPayments from "./components/SettingsSubscriptionPayments";
import SettingsTemplatesSubscription from "./components/SettingsTemplatesSubscription";
import SettingsPaymentMethods from "./components/SettingsPaymentMethods";
import SettingsTemplatesSubscription2 from "./components/SettingsTemplatesSubscription2";
import SettingsTemplatesSubscriptionNew from "./components/SettingsTemplatesSubscriptionNew";
import SettingsTemplatesInvoice from "./components/SettingsTemplatesInvoice";
import SettingsRegisterCurrencies from "./components/SettingsRegisterCurrencies";
import SettingsRegisterPaymentTerms from "./components/SettingsRegisterPaymentTerms";
import SettingsRegisterUnits from "./components/SettingsRegisterUnits";
import SettingsRegisterUnitsImport from "./components/SettingsRegisterUnitsImport";
import SettingsRegisterUnitsImport2 from "./components/SettingsRegisterUnitsImport2";
import SettingsRegisterVATRates from "./components/SettingsRegisterVATRates";
import SettingsReminderFlows from "./components/SettingsReminderFlows";
import IndexPage from "./components/IndexPage";
import FeatureDetails from "./components/FeatureDetails";
import AboutUs from "./components/AboutUs";
import DocSmartContactPage from "./components/DocSmartContactPage";
import BlogOverview from "./components/BlogOverview";
import BlogDetailPage from "./components/BlogDetailPage";
import LandingPage from "./components/LandingPage";
import SettingsCompanyInformation from "./components/SettingsCompanyInformation";
import Users from "./components/Users";
import UsersRoleAndPermissions from "./components/UsersRoleAndPermissions";
import UsersInvite from "./components/UsersInvite";
import UsersEdit from "./components/UsersEdit";
import EventLog from "./components/EventLog";
import Reports from "./components/Reports";
import ReportsSubscriptions from "./components/ReportsSubscriptions";
import ReportsCustomers from "./components/ReportsCustomers";
import ReportsProducts from "./components/ReportsProducts";
import SettingsInvoice from "./components/SettingsInvoice";
import SettingsSubscription from "./components/SettingsSubscription";
import SettingsIntegration from "./components/SettingsIntegration";
import SettingsIntegration2 from "./components/SettingsIntegration2";
import SettingsIntegrationEdit from "./components/SettingsIntegrationEdit";
import SettingsIntegrationEdit2 from "./components/SettingsIntegrationEdit2";
import ToDo from "./components/ToDo";
import ToDoDetails from "./components/ToDoDetails";
import ToDoDetails2 from "./components/ToDoDetails2";
import ToDo2 from "./components/ToDo2";
import ToDoNewCategory from "./components/ToDoNewCategory";
import ToDoNewToDoStatus from "./components/ToDoNewToDoStatus";
import SubscriptionsDetailNotes from "./components/SubscriptionsDetailNotes";
import SubscriptionsDetailToDo from "./components/SubscriptionsDetailToDo";
import SubscriptionsDetailNotes2 from "./components/SubscriptionsDetailNotes2";
import Subscriptions from "./components/Subscriptions";
import SubscriptionsImport from "./components/SubscriptionsImport";
import SubscriptionsScheduledEventsSubscri from "./components/SubscriptionsScheduledEventsSubscri";
import SubscriptionsScheduledEventsSubscri2 from "./components/SubscriptionsScheduledEventsSubscri2";
import SubscriptionsNewCategory from "./components/SubscriptionsNewCategory";
import SubscriptionsCategories from "./components/SubscriptionsCategories";
import SubscriptionsNew from "./components/SubscriptionsNew";
import Invoices from "./components/Invoices";
import InvoicesImported from "./components/InvoicesImported";
import InvoicesImportedRules from "./components/InvoicesImportedRules";
import InvoicesImportedRulesNewRule from "./components/InvoicesImportedRulesNewRule";
import InvoicesHistory from "./components/InvoicesHistory";
import InvoicesScheduledEventsNew from "./components/InvoicesScheduledEventsNew";
import InvoicesScheduledEvents from "./components/InvoicesScheduledEvents";
import InvoicesScheduleSendout from "./components/InvoicesScheduleSendout";
import InvoicesScheduleSendout2 from "./components/InvoicesScheduleSendout2";
import InvoicesPayment from "./components/InvoicesPayment";
import InvoicesNew from "./components/InvoicesNew";
import InvoicesDetailInvoice from "./components/InvoicesDetailInvoice";
import InvoicesDetailNotes from "./components/InvoicesDetailNotes";
import InvoicesDetailToDos from "./components/InvoicesDetailToDos";
import InvoicesDetailNotes2 from "./components/InvoicesDetailNotes2";
import CustomersNewCustomerCompanyGeneral from "./components/CustomersNewCustomerCompanyGeneral";
import CustomersNewCustomerPrivatePersonGe from "./components/CustomersNewCustomerPrivatePersonGe";
import CustomersNewCustomerCompanyAddress from "./components/CustomersNewCustomerCompanyAddress";
import CustomersNewCustomerPrivatePersonAd from "./components/CustomersNewCustomerPrivatePersonAd";
import CustomersNewCustomerCompanyContact from "./components/CustomersNewCustomerCompanyContact";
import CustomersNewCustomerPrivatePersonCo from "./components/CustomersNewCustomerPrivatePersonCo";
import CustomersNewCustomerCompanyInvoice from "./components/CustomersNewCustomerCompanyInvoice";
import CustomersNewCustomerPrivatePersonIn from "./components/CustomersNewCustomerPrivatePersonIn";
import CustomersCategories from "./components/CustomersCategories";
import Customers from "./components/Customers";
import CustomersNewCustomerCategory from "./components/CustomersNewCustomerCategory";
import CustomersExport from "./components/CustomersExport";
import CustomersImport from "./components/CustomersImport";
import CustomersImport2 from "./components/CustomersImport2";
import CustomersDetailsInvoices from "./components/CustomersDetailsInvoices";
import CustomersDetailsNotes from "./components/CustomersDetailsNotes";
import CustomersDetailsTimeReport from "./components/CustomersDetailsTimeReport";
import CustomersDetailsTimeReportNew from "./components/CustomersDetailsTimeReportNew";
import CustomersDetailsTimeReportDetails from "./components/CustomersDetailsTimeReportDetails";
import CustomersDetailsToDos from "./components/CustomersDetailsToDos";
import CustomersDetailsToDosDetails from "./components/CustomersDetailsToDosDetails";
import CustomersDetailsNotesNewNote from "./components/CustomersDetailsNotesNewNote";
import CustomersDetailsNewCustomField from "./components/CustomersDetailsNewCustomField";
import Home from "./components/Home";
import HomeResources from "./components/HomeResources";
import HomeNotification from "./components/HomeNotification";
import X404 from "./components/X404";
import X500 from "./components/X500";
import ProductsCategories from "./components/ProductsCategories";
import ProductsNew from "./components/ProductsNew";
import ProductsNewPrice from "./components/ProductsNewPrice";
import ProductsNewCategory from "./components/ProductsNewCategory";
import ProductsExport from "./components/ProductsExport";
import ProductsImportAccounting from "./components/ProductsImportAccounting";
import ProductsImportFile from "./components/ProductsImportFile";
import Products from "./components/Products";
import {
  settingsSubscriptionCancelData,
  signUpData,
  createNewPasswordData,
  forgotPasswordData,
  loginData,
  settingsReminderFlowsNewData,
  settingsReminderFlowsEditData,
  settingsCustomFieldsData,
  settingsRegisterVATRatesNewData,
  settingsRegisterUnitsNewData,
  settingsRegisterPriceListsData,
  settingsRegisterPriceListsNewData,
  settingsRegisterPaymentTermsNewData,
  settingsRegisterCurrenciesNewCurrenData,
  settingsSubscriptionIntegrationsData,
  settingsSubscriptionIntegrationsInfData,
  settingsSubscriptionIntegrationsInf2Data,
  settingsAccountSettingsData,
  settingsSubscriptionPackageData,
  settingsSubscriptionPaymentsData,
  settingsTemplatesSubscriptionData,
  settingsPaymentMethodsData,
  settingsTemplatesSubscription2Data,
  settingsTemplatesSubscriptionNewData,
  settingsTemplatesInvoiceData,
  settingsRegisterCurrenciesData,
  settingsRegisterPaymentTermsData,
  settingsRegisterUnitsData,
  settingsRegisterUnitsImportData,
  settingsRegisterUnitsImport2Data,
  settingsRegisterVATRatesData,
  settingsReminderFlowsData,
  indexPageData,
  featureDetailsData,
  aboutUsData,
  docSmartContactPageData,
  blogOverviewData,
  blogDetailPageData,
  landingPageData,
  settingsCompanyInformationData,
  usersData,
  usersRoleAndPermissionsData,
  usersInviteData,
  usersEditData,
  eventLogData,
  reportsData,
  reportsSubscriptionsData,
  reportsCustomersData,
  reportsProductsData,
  settingsInvoiceData,
  settingsSubscriptionData,
  settingsIntegrationData,
  settingsIntegration2Data,
  settingsIntegrationEditData,
  settingsIntegrationEdit2Data,
  toDoData,
  toDoDetailsData,
  toDoDetails2Data,
  toDo2Data,
  toDoNewCategoryData,
  toDoNewToDoStatusData,
  subscriptionsDetailNotesData,
  subscriptionsDetailToDoData,
  subscriptionsDetailNotes2Data,
  subscriptionsData,
  subscriptionsImportData,
  subscriptionsScheduledEventsSubscriData,
  subscriptionsScheduledEventsSubscri2Data,
  subscriptionsNewCategoryData,
  subscriptionsCategoriesData,
  subscriptionsNewData,
  invoicesData,
  invoicesImportedData,
  invoicesImportedRulesData,
  invoicesImportedRulesNewRuleData,
  invoicesHistoryData,
  invoicesScheduledEventsNewData,
  invoicesScheduledEventsData,
  invoicesScheduleSendoutData,
  invoicesScheduleSendout2Data,
  invoicesPaymentData,
  invoicesNewData,
  invoicesDetailInvoiceData,
  invoicesDetailNotesData,
  invoicesDetailToDosData,
  invoicesDetailNotes2Data,
  customersNewCustomerCompanyGeneralData,
  customersNewCustomerPrivatePersonGeData,
  customersNewCustomerCompanyAddressData,
  customersNewCustomerPrivatePersonAdData,
  customersNewCustomerCompanyContactData,
  customersNewCustomerPrivatePersonCoData,
  customersNewCustomerCompanyInvoiceData,
  customersNewCustomerPrivatePersonInData,
  customersCategoriesData,
  customersData,
  customersNewCustomerCategoryData,
  customersExportData,
  customersImportData,
  customersImport2Data,
  customersDetailsInvoicesData,
  customersDetailsNotesData,
  customersDetailsTimeReportData,
  customersDetailsTimeReportNewData,
  customersDetailsTimeReportDetailsData,
  customersDetailsToDosData,
  customersDetailsToDosDetailsData,
  customersDetailsNotesNewNoteData,
  customersDetailsNewCustomFieldData,
  homeData,
  homeResourcesData,
  homeNotificationData,
  x404Data,
  x500Data,
  productsCategoriesData,
  productsNewData,
  productsNewPriceData,
  productsNewCategoryData,
  productsExportData,
  productsImportAccountingData,
  productsImportFileData,
  productsData,
} from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/settings-u47-subscription-u47-cancel",
      component: SettingsSubscriptionCancel,
      props: { ...settingsSubscriptionCancelData },
    },
    {
      path: "/password-update-u45-confirmation",
      component: PasswordUpdateConfirmation,
      props: {
        apply:
          "https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c2a1aa8872ba38d57d4e23/img/apply-1@2x.png",
        spanText1: "Password updated successfully",
        spanText2: "Login",
      },
    },
    {
      path: "/sign-up",
      component: SignUp,
      props: { ...signUpData },
    },
    {
      path: "/create-new-password",
      component: CreateNewPassword,
      props: { ...createNewPasswordData },
    },
    {
      path: "/forgot-password",
      component: ForgotPassword,
      props: { ...forgotPasswordData },
    },
    {
      path: "/login",
      component: Login,
      props: { ...loginData },
    },
    {
      path: "/settings-u47-reminder-flows-u47-new",
      component: SettingsReminderFlowsNew,
      props: { ...settingsReminderFlowsNewData },
    },
    {
      path: "/settings-u47-reminder-flows-u47-edit",
      component: SettingsReminderFlowsEdit,
      props: { ...settingsReminderFlowsEditData },
    },
    {
      path: "/settings-u47-custom-fields",
      component: SettingsCustomFields,
      props: { ...settingsCustomFieldsData },
    },
    {
      path: "/settings-u47-register-u47-vat-rates-u47-new",
      component: SettingsRegisterVATRatesNew,
      props: { ...settingsRegisterVATRatesNewData },
    },
    {
      path: "/settings-u47-register-u47-units-u47-new",
      component: SettingsRegisterUnitsNew,
      props: { ...settingsRegisterUnitsNewData },
    },
    {
      path: "/settings-u47-register-u47-price-lists",
      component: SettingsRegisterPriceLists,
      props: { ...settingsRegisterPriceListsData },
    },
    {
      path: "/settings-u47-register-u47-price-lists-u47-new",
      component: SettingsRegisterPriceListsNew,
      props: { ...settingsRegisterPriceListsNewData },
    },
    {
      path: "/settings-u47-register-u47-payment-terms-u47-new",
      component: SettingsRegisterPaymentTermsNew,
      props: { ...settingsRegisterPaymentTermsNewData },
    },
    {
      path: "/settings-u47-register-u47-currencies-u47-new-currency",
      component: SettingsRegisterCurrenciesNewCurren,
      props: { ...settingsRegisterCurrenciesNewCurrenData },
    },
    {
      path: "/settings-u47-subscription-u47-integrations",
      component: SettingsSubscriptionIntegrations,
      props: { ...settingsSubscriptionIntegrationsData },
    },
    {
      path: "/settings-u47-subscription-u47-integrations-u47-info",
      component: SettingsSubscriptionIntegrationsInf,
      props: { ...settingsSubscriptionIntegrationsInfData },
    },
    {
      path: "/settings-u47-subscription-u47-integrations-u47-info2",
      component: SettingsSubscriptionIntegrationsInf2,
      props: { ...settingsSubscriptionIntegrationsInf2Data },
    },
    {
      path: "/settings-u47-account-settings",
      component: SettingsAccountSettings,
      props: { ...settingsAccountSettingsData },
    },
    {
      path: "/settings-u47-subscription-u47-package",
      component: SettingsSubscriptionPackage,
      props: { ...settingsSubscriptionPackageData },
    },
    {
      path: "/settings-u47-subscription-u47-payments",
      component: SettingsSubscriptionPayments,
      props: { ...settingsSubscriptionPaymentsData },
    },
    {
      path: "/settings-u47-templates-u47-subscription",
      component: SettingsTemplatesSubscription,
      props: { ...settingsTemplatesSubscriptionData },
    },
    {
      path: "/settings-u47-payment-methods",
      component: SettingsPaymentMethods,
      props: { ...settingsPaymentMethodsData },
    },
    {
      path: "/settings-u47-templates-u47-subscription2",
      component: SettingsTemplatesSubscription2,
      props: { ...settingsTemplatesSubscription2Data },
    },
    {
      path: "/settings-u47-templates-u47-subscription-u47-new",
      component: SettingsTemplatesSubscriptionNew,
      props: { ...settingsTemplatesSubscriptionNewData },
    },
    {
      path: "/settings-u47-templates-u47-invoice",
      component: SettingsTemplatesInvoice,
      props: { ...settingsTemplatesInvoiceData },
    },
    {
      path: "/settings-u47-register-u47-currencies",
      component: SettingsRegisterCurrencies,
      props: { ...settingsRegisterCurrenciesData },
    },
    {
      path: "/settings-u47-register-u47-payment-terms",
      component: SettingsRegisterPaymentTerms,
      props: { ...settingsRegisterPaymentTermsData },
    },
    {
      path: "/settings-u47-register-u47-units",
      component: SettingsRegisterUnits,
      props: { ...settingsRegisterUnitsData },
    },
    {
      path: "/settings-u47-register-u47-units-u47-import",
      component: SettingsRegisterUnitsImport,
      props: { ...settingsRegisterUnitsImportData },
    },
    {
      path: "/settings-u47-register-u47-units-u47-import2",
      component: SettingsRegisterUnitsImport2,
      props: { ...settingsRegisterUnitsImport2Data },
    },
    {
      path: "/settings-u47-register-u47-vat-rates",
      component: SettingsRegisterVATRates,
      props: { ...settingsRegisterVATRatesData },
    },
    {
      path: "/settings-u47-reminder-flows",
      component: SettingsReminderFlows,
      props: { ...settingsReminderFlowsData },
    },
    {
      path: "/index-page",
      component: IndexPage,
      props: { ...indexPageData },
    },
    {
      path: "/feature-details",
      component: FeatureDetails,
      props: { ...featureDetailsData },
    },
    {
      path: "/docsmart-contact-page",
      component: DocSmartContactPage,
      props: { ...docSmartContactPageData },
    },
    {
      path: "/blog-overview",
      component: BlogOverview,
      props: { ...blogOverviewData },
    },
    {
      path: "/blog-detail-page",
      component: BlogDetailPage,
      props: { ...blogDetailPageData },
    },
    {
      path: "/landing-page",
      component: LandingPage,
      props: { ...landingPageData },
    },
    {
      path: "/settings-u47-company-information",
      component: SettingsCompanyInformation,
      props: { ...settingsCompanyInformationData },
    },
    {
      path: "/users",
      component: Users,
      props: { ...usersData },
    },
    {
      path: "/users-u47-role-and-permissions",
      component: UsersRoleAndPermissions,
      props: { ...usersRoleAndPermissionsData },
    },
    {
      path: "/users-u47-invite",
      component: UsersInvite,
      props: { ...usersInviteData },
    },
    {
      path: "/users-u47-edit",
      component: UsersEdit,
      props: { ...usersEditData },
    },
    {
      path: "/event-log",
      component: EventLog,
      props: { ...eventLogData },
    },
    {
      path: "/reports",
      component: Reports,
      props: { ...reportsData },
    },
    {
      path: "/reports-u47-subscriptions",
      component: ReportsSubscriptions,
      props: { ...reportsSubscriptionsData },
    },
    {
      path: "/reports-u47-customers",
      component: ReportsCustomers,
      props: { ...reportsCustomersData },
    },
    {
      path: "/reports-u47-products",
      component: ReportsProducts,
      props: { ...reportsProductsData },
    },
    {
      path: "/settings-u47-invoice",
      component: SettingsInvoice,
      props: { ...settingsInvoiceData },
    },
    {
      path: "/settings-u47-subscription",
      component: SettingsSubscription,
      props: { ...settingsSubscriptionData },
    },
    {
      path: "/settings-u47-integration",
      component: SettingsIntegration,
      props: { ...settingsIntegrationData },
    },
    {
      path: "/settings-u47-integration2",
      component: SettingsIntegration2,
      props: { ...settingsIntegration2Data },
    },
    {
      path: "/settings-u47-integration-u47-edit",
      component: SettingsIntegrationEdit,
      props: { ...settingsIntegrationEditData },
    },
    {
      path: "/settings-u47-integration-u47-edit2",
      component: SettingsIntegrationEdit2,
      props: { ...settingsIntegrationEdit2Data },
    },
    {
      path: "/tou45do",
      component: ToDo,
      props: { ...toDoData },
    },
    {
      path: "/tou45do-u47-details",
      component: ToDoDetails,
      props: { ...toDoDetailsData },
    },
    {
      path: "/tou45do-u47-details2",
      component: ToDoDetails2,
      props: { ...toDoDetails2Data },
    },
    {
      path: "/tou45do2",
      component: ToDo2,
      props: { ...toDo2Data },
    },
    {
      path: "/tou45do-u47-new-category",
      component: ToDoNewCategory,
      props: { ...toDoNewCategoryData },
    },
    {
      path: "/tou45do-u47-new-tou45do-status",
      component: ToDoNewToDoStatus,
      props: { ...toDoNewToDoStatusData },
    },
    {
      path: "/subscriptions-u47-detail-u47-notes",
      component: SubscriptionsDetailNotes,
      props: { ...subscriptionsDetailNotesData },
    },
    {
      path: "/subscriptions-u47-detail-u47-tou45do",
      component: SubscriptionsDetailToDo,
      props: { ...subscriptionsDetailToDoData },
    },
    {
      path: "/subscriptions-u47-detail-u47-notes2",
      component: SubscriptionsDetailNotes2,
      props: { ...subscriptionsDetailNotes2Data },
    },
    {
      path: "/subscriptions",
      component: Subscriptions,
      props: { ...subscriptionsData },
    },
    {
      path: "/subscriptions-u47-import",
      component: SubscriptionsImport,
      props: { ...subscriptionsImportData },
    },
    {
      path: "/subscriptions-u47-scheduled-events-u47-subscriptions",
      component: SubscriptionsScheduledEventsSubscri,
      props: { ...subscriptionsScheduledEventsSubscriData },
    },
    {
      path: "/subscriptions-u47-scheduled-events-u47-subscription-rows",
      component: SubscriptionsScheduledEventsSubscri2,
      props: { ...subscriptionsScheduledEventsSubscri2Data },
    },
    {
      path: "/subscriptions-u47-new-category",
      component: SubscriptionsNewCategory,
      props: { ...subscriptionsNewCategoryData },
    },
    {
      path: "/subscriptions-u47-categories",
      component: SubscriptionsCategories,
      props: { ...subscriptionsCategoriesData },
    },
    {
      path: "/subscriptions-u47-new",
      component: SubscriptionsNew,
      props: { ...subscriptionsNewData },
    },
    {
      path: "/invoices",
      component: Invoices,
      props: { ...invoicesData },
    },
    {
      path: "/invoices-u47-imported",
      component: InvoicesImported,
      props: { ...invoicesImportedData },
    },
    {
      path: "/invoices-u47-imported-u47-rules",
      component: InvoicesImportedRules,
      props: { ...invoicesImportedRulesData },
    },
    {
      path: "/invoices-u47-imported-u47-rules-u47-new-rule",
      component: InvoicesImportedRulesNewRule,
      props: { ...invoicesImportedRulesNewRuleData },
    },
    {
      path: "/invoices-u47-history",
      component: InvoicesHistory,
      props: { ...invoicesHistoryData },
    },
    {
      path: "/invoices-u47-scheduled-events-u45-new",
      component: InvoicesScheduledEventsNew,
      props: { ...invoicesScheduledEventsNewData },
    },
    {
      path: "/invoices-u47-scheduled-events",
      component: InvoicesScheduledEvents,
      props: { ...invoicesScheduledEventsData },
    },
    {
      path: "/invoices-u47-schedule-sendout",
      component: InvoicesScheduleSendout,
      props: { ...invoicesScheduleSendoutData },
    },
    {
      path: "/invoices-u47-schedule-sendout2",
      component: InvoicesScheduleSendout2,
      props: { ...invoicesScheduleSendout2Data },
    },
    {
      path: "/invoices-u47-payment",
      component: InvoicesPayment,
      props: { ...invoicesPaymentData },
    },
    {
      path: "/invoices-u47-new",
      component: InvoicesNew,
      props: { ...invoicesNewData },
    },
    {
      path: "/invoices-u47-detail-u47-invoice",
      component: InvoicesDetailInvoice,
      props: { ...invoicesDetailInvoiceData },
    },
    {
      path: "/invoices-u47-detail-u47-notes",
      component: InvoicesDetailNotes,
      props: { ...invoicesDetailNotesData },
    },
    {
      path: "/invoices-u47-detail-u47-tou45dou39s",
      component: InvoicesDetailToDos,
      props: { ...invoicesDetailToDosData },
    },
    {
      path: "/invoices-u47-detail-u47-notes2",
      component: InvoicesDetailNotes2,
      props: { ...invoicesDetailNotes2Data },
    },
    {
      path: "/customers-u47-new-customer-u47-company-u45-general",
      component: CustomersNewCustomerCompanyGeneral,
      props: { ...customersNewCustomerCompanyGeneralData },
    },
    {
      path: "/customers-u47-new-customer-u47-private-person-u45-general",
      component: CustomersNewCustomerPrivatePersonGe,
      props: { ...customersNewCustomerPrivatePersonGeData },
    },
    {
      path: "/customers-u47-new-customer-u47-company-u45-address",
      component: CustomersNewCustomerCompanyAddress,
      props: { ...customersNewCustomerCompanyAddressData },
    },
    {
      path: "/customers-u47-new-customer-u47-private-person-u45-address",
      component: CustomersNewCustomerPrivatePersonAd,
      props: { ...customersNewCustomerPrivatePersonAdData },
    },
    {
      path: "/customers-u47-new-customer-u47-company-u45-contact",
      component: CustomersNewCustomerCompanyContact,
      props: { ...customersNewCustomerCompanyContactData },
    },
    {
      path: "/customers-u47-new-customer-u47-private-person-u45-contact",
      component: CustomersNewCustomerPrivatePersonCo,
      props: { ...customersNewCustomerPrivatePersonCoData },
    },
    {
      path: "/customers-u47-new-customer-u47-company-u45-invoice",
      component: CustomersNewCustomerCompanyInvoice,
      props: { ...customersNewCustomerCompanyInvoiceData },
    },
    {
      path: "/customers-u47-new-customer-u47-private-person-u45-invoice",
      component: CustomersNewCustomerPrivatePersonIn,
      props: { ...customersNewCustomerPrivatePersonInData },
    },
    {
      path: "/customers-u47-categories",
      component: CustomersCategories,
      props: { ...customersCategoriesData },
    },
    {
      path: "/customers",
      component: Customers,
      props: { ...customersData },
    },
    {
      path: "/customers-u47-new-customer-category",
      component: CustomersNewCustomerCategory,
      props: { ...customersNewCustomerCategoryData },
    },
    {
      path: "/customers-u47-export",
      component: CustomersExport,
      props: { ...customersExportData },
    },
    {
      path: "/customers-u47-import",
      component: CustomersImport,
      props: { ...customersImportData },
    },
    {
      path: "/customers-u47-import2",
      component: CustomersImport2,
      props: { ...customersImport2Data },
    },
    {
      path: "/customers-u47-details-u47-invoices",
      component: CustomersDetailsInvoices,
      props: { ...customersDetailsInvoicesData },
    },
    {
      path: "/customers-u47-details-u47-notes",
      component: CustomersDetailsNotes,
      props: { ...customersDetailsNotesData },
    },
    {
      path: "/customers-u47-details-u47-time-report",
      component: CustomersDetailsTimeReport,
      props: { ...customersDetailsTimeReportData },
    },
    {
      path: "/customers-u47-details-u47-time-report-u45-new",
      component: CustomersDetailsTimeReportNew,
      props: { ...customersDetailsTimeReportNewData },
    },
    {
      path: "/customers-u47-details-u47-time-report-u47-details",
      component: CustomersDetailsTimeReportDetails,
      props: { ...customersDetailsTimeReportDetailsData },
    },
    {
      path: "/customers-u47-details-u47-tou45dou39s",
      component: CustomersDetailsToDos,
      props: { ...customersDetailsToDosData },
    },
    {
      path: "/customers-u47-details-u47-tou45dou39s-u47-details",
      component: CustomersDetailsToDosDetails,
      props: { ...customersDetailsToDosDetailsData },
    },
    {
      path: "/customers-u47-details-u47-notes-u47-new-note",
      component: CustomersDetailsNotesNewNote,
      props: { ...customersDetailsNotesNewNoteData },
    },
    {
      path: "/customers-u47-details-u47-new-custom-field",
      component: CustomersDetailsNewCustomField,
      props: { ...customersDetailsNewCustomFieldData },
    },
    {
      path: "/home",
      component: Home,
      props: { ...homeData },
    },
    {
      path: "/home-u47-resources",
      component: HomeResources,
      props: { ...homeResourcesData },
    },
    {
      path: "/home-u47-notification",
      component: HomeNotification,
      props: { ...homeNotificationData },
    },
    {
      path: "/x404",
      component: X404,
      props: { ...x404Data },
    },
    {
      path: "/x500",
      component: X500,
      props: { ...x500Data },
    },
    {
      path: "/products-u47-categories",
      component: ProductsCategories,
      props: { ...productsCategoriesData },
    },
    {
      path: "/products-u47-new",
      component: ProductsNew,
      props: { ...productsNewData },
    },
    {
      path: "/products-u47-new-price",
      component: ProductsNewPrice,
      props: { ...productsNewPriceData },
    },
    {
      path: "/products-u47-new-category",
      component: ProductsNewCategory,
      props: { ...productsNewCategoryData },
    },
    {
      path: "/products-u47-export",
      component: ProductsExport,
      props: { ...productsExportData },
    },
    {
      path: "/products-u47-import-u45-accounting",
      component: ProductsImportAccounting,
      props: { ...productsImportAccountingData },
    },
    {
      path: "/products-u47-import-u45-file",
      component: ProductsImportFile,
      props: { ...productsImportFileData },
    },
    {
      path: "/products",
      component: Products,
      props: { ...productsData },
    },
    {
      path: "*",
      component: AboutUs,
      props: { ...aboutUsData },
    },
  ],
});
