import { Provider } from "@/components/ui/provider"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ColorModeProvider } from "./components/ui/color-mode"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider themes={['dark']}>
        <ColorModeProvider>
          <App />
        </ColorModeProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)