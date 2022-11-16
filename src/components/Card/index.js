import React from "react";

export function Card({ name, cor, style }) {
    return (
        <div>
            <button style={style}>{cor || name}</button>
        </div>
    );
}