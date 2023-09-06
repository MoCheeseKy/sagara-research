import React from 'react';

export default function CustomButton({ text, icon, onClick, className }) {
  return (
    <>
      <button
        className={`flex items-center justify-center gap-2 bg-[#a51535] text-white rounded px-5 py-[10px] ${className}`}
        onClick={onClick}
      >
        {icon}
        {text}
      </button>
    </>
  );
}
