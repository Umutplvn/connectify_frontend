import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { Toaster, ToastBar } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      <Toaster
        containerStyle={{
          position: "fixed",
          top: "83%",
        }}
      >
        {(t) => (
          <ToastBar
            toast={t}
            style={{
              transition: "0.4s",
              ...t.style,
              animation: t.visible
                ? "custom-enter 1s ease"
                : "custom-exit 1s ease",
            }}
          />
        )}
      </Toaster>
    </BrowserRouter>
  );
}

export default App;
