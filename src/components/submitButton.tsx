import React from "react";
import {useFormStatus} from "react-dom";
import {FaPaperPlane} from "react-icons/fa";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      style={{
        background: pending ? "var(--steel-gray)" : "var(--workshop-green)",
        color: "var(--warm-white)",
        border: "none",
        padding: "12px 30px",
        textTransform: "uppercase",
        letterSpacing: "1px",
        fontSize: "12px",
        fontWeight: "600",
        transition: "all 0.3s ease",
        position: "relative",
        cursor: pending ? "not-allowed" : "pointer",
      }}
      className="group flex items-center gap-3 font-sans w-fit hover:transform hover:-translate-y-1 hover:shadow-lg"
      onMouseEnter={(e) => {
        if (!pending) {
          e.currentTarget.style.background = "var(--olive-dark)";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
        }
      }}
      onMouseLeave={(e) => {
        if (!pending) {
          e.currentTarget.style.background = "var(--workshop-green)";
          e.currentTarget.style.boxShadow = "none";
        }
      }}
    >
      {pending ? (
        <>
          <div
            className="animate-spin h-4 w-4 rounded-full border-2 border-t-transparent"
            style={{ borderColor: "var(--warm-white)" }}
          />
          Dispatching...
        </>
      ) : (
        <>
          Deploy Message
          <FaPaperPlane
            className="text-xs transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
            style={{ opacity: 0.8 }}
          />
        </>
      )}

      {/* Corner accent */}
      <div
        className="absolute top-0 left-0 w-3 h-3 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          border: "1px solid var(--warm-white)",
          borderRight: "none",
          borderBottom: "none",
        }}
      />
    </button>
  );
};

export default SubmitButton;
