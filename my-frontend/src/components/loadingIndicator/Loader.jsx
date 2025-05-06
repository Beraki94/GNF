'use client';
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader-overlay">
      <div className="spinner">
        {/* Use only if Option 3 */}
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
