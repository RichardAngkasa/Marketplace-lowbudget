import React from "react";
import { useNavigate } from "react-router";

function AdminLayout({ children }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-4">
        <div className="h-12 w-full bg-slate-500">
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            BACK
          </button>
          AdminPage
        </div>
        <div> {children}</div>
      </div>
    </>
  );
}

export default AdminLayout;
