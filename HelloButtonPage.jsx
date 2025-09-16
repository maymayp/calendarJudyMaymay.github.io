import React from "react";


export default function HelloButtonPage() {
return (
<main className="min-h-screen flex items-center justify-center bg-gray-50">
<div className="text-center p-6 rounded-2xl shadow-md">
<h1 className="text-4xl font-semibold mb-6">hello</h1>
<button
onClick={() => alert("button clicked")}
className="px-6 py-2 text-sm rounded-xl border border-gray-300 hover:shadow-lg focus:outline-none"
>
Click me
</button>
</div>
</main>
);
}
