import React from 'react';

export default function CustomButton({ text, icon, onClick, className }) {
    return (
        <>
            <button
                className={`flex items-center gap-2 bg-[#e31937] text-white rounded px-5 py-[10px] ${className}`}
                onClick={onClick}
            >
                {icon}
                {text}
            </button>
        </>
    );
}