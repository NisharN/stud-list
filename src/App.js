import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StudentProvider } from "./context/Context";
import StudentDetails from "./components/StudentDetails";
import FavouriteStudent from "./components/FavouriteStudent";

function App() {  
  return (
    <StudentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentDetails />} />         
          <Route path="/fav" element={<FavouriteStudent />} />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;
