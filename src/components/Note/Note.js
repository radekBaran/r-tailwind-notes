import React from "react";

export default function Note({ id, title, body }) {
  return (
    <div key={id} className="p-5 mt-5 shadow-xl bg-slate-100 rounded-xl">
      <p className="text-xl font-bold">{title}</p>
      <div className="mt-5 font-extralight-">{body}</div>
      <div className="mt-5">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-xl">
          Edytuj
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded-xl ml-2">
          Usuń
        </button>
      </div>
    </div>
  );
}
