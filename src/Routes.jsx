import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const PaypalIntegration = React.lazy(() => import("pages/PaypalIntegration"));
const LandingPage = React.lazy(() => import("pages/LandingPage"));
const ZIPCodeSearch = React.lazy(() => import("pages/ZIPCodeSearch"));
const Location = React.lazy(() => import("pages/Location"));
const Geofence = React.lazy(() => import("pages/Geofence"));
const ShippingChargeCalculator = React.lazy(
  () => import("pages/ShippingChargeCalculator"),
);
const ShippingAddressValidation = React.lazy(
  () => import("pages/ShippingAddressValidation"),
);
const Summarycard = React.lazy(() => import("pages/Summarycard"));
const RequestManagement = React.lazy(() => import("pages/RequestManagement"));
const Payments = React.lazy(() => import("pages/Payments"));
const ExpressDelivery = React.lazy(() => import("pages/ExpressDelivery"));
const MapSettings = React.lazy(() => import("pages/MapSettings"));
const CreditDebitCardPayments = React.lazy(
  () => import("pages/CreditDebitCardPayments"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/creditdebitcardpayments"
            element={<CreditDebitCardPayments />}
          />
          <Route path="/mapsettings" element={<MapSettings />} />
          <Route path="/expressdelivery" element={<ExpressDelivery />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/requestmanagement" element={<RequestManagement />} />
          <Route path="/summarycard" element={<Summarycard />} />
          <Route
            path="/shippingaddressvalidation"
            element={<ShippingAddressValidation />}
          />
          <Route
            path="/shippingchargecalculator"
            element={<ShippingChargeCalculator />}
          />
          <Route path="/geofence" element={<Geofence />} />
          <Route path="/location" element={<Location />} />
          <Route path="/zipcodesearch" element={<ZIPCodeSearch />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/paypalintegration" element={<PaypalIntegration />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
