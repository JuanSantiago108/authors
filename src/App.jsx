import {Routes, Route} from "react-router-dom"
import './App.css';
import DashBoard from "./view/DashBoard";
import CreatePage from "./view/CreatePage"
import UpdatePage from "./view/UpdatePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/new' element={<CreatePage />} />
        <Route path='/edit/:id' element={<UpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;
