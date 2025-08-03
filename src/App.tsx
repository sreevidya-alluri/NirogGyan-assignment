import React from "react";
import Router from "./routes/Router";
import { AppointmentProvider } from "./context/AppointmentContext";

const App: React.FC = () => {
  return (
    <AppointmentProvider>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
          <div className="container  main-wrapper d-flex justify-content-center">
              <div className="w-100 d-flex justify-content-center">
            <a className="navbar-brand fw-bold" href="/">
             NirogGyan 
            </a>
            </div>
          </div>
        </nav>
        <Router />
        <footer className="text-center py-4 mt-5">
          <small>&copy; {new Date().getFullYear()} HealthBook. All rights reserved.</small>
        </footer>
      </div>
    </AppointmentProvider>
  );
};

export default App;
