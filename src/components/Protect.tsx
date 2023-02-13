import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Protect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/New`);
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Protect;
