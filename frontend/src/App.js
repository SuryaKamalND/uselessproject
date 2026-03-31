import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const triggerError = async () => {
    try {
      await axios.post("http://localhost:5000/api/test-error", {});
    } catch (error) {
      const message =
        error.response?.data?.message || "Something went wrong";
      toast.error(message);
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>Error Handling Demo</h1>
      <button onClick={triggerError}>Trigger Error</button>

      <ToastContainer />
    </div>
  );
}

export default App;