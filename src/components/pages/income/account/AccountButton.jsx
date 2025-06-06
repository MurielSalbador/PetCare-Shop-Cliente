import { useEffect, useState, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AccountButton.css";

const AccountButton = () => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) setUser(savedUser);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleClick = () => {
    if (user) {
      setOpen(!open);
    } else {
      navigate("/login");
    }
  };

  const handleViewOrders = () => {
    navigate("/myOrders");
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setOpen(false);
    navigate("/");
    toast.info("Hasta pronto 🐱💔", {
       position:"top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <div className="account-container" ref={menuRef}>
      <button className="account-button" onClick={handleClick}>
        {user ? <FaUserCircle size={28} /> : "Mi cuenta"}
      </button>

      {open && user && (
        <div className="account-dropdown">
          <p>{user.email}</p>

          {(user?.role === "admin" || user?.role === "superAdmin") && (
            <button
              onClick={() => {
                navigate("/allOrders");
                setOpen(false);
              }}
            >
              Pedidos de todos
            </button>
          )}

          <button onClick={handleViewOrders}>Ver mis compras</button>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      )}

       <ToastContainer/>
    </div>
  );
};

export default AccountButton;
