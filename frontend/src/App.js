import Rotas from "./pages/routes";
import { ToastContainer } from "react-toastify"
import Contexts from "./Context";
import 'react-toastify/dist/ReactToastify.css'
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <Contexts>
      <div>
        <ToastContainer
          autoClose={5000}
          position="top-right"
          theme="dark"
          draggable
          closeOnClick
        />
        <Rotas />
      </div>
    </Contexts>
  );
}

export default App;
