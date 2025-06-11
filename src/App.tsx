import AppCard from "./components/Cards/AppCard";
import Header from "./components/Headings/Header";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster position="top-center" expand richColors />
      <Header />
      <AppCard />
    </>
  );
}

export default App;
