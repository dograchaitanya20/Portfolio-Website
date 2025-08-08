import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import CustomCursor from "@/components/CustomCursor";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomCursor />
      <main>
        <Home />
        <Toaster />
      </main>
    </QueryClientProvider>
  );
}

export default App;
