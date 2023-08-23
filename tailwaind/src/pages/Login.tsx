// import React from 'react'

export default function Login() {
  return (
    <>
      <div className="card flex items-center justify-center h-screen bg-slate-400">

        <form
          action=""
          className="flex flex-col items-center gap-4 justify-center border bg-zinc-300 h-3/6 w-2/5 rounded-full"
        >
        <h2 className="text-center text-3xl">Login</h2>
          <label className="p-0 m-0" htmlFor="user">User name:</label>
          <input
            id="user"
            className="border  text-center rounded-2xl w-2/4"
            type="text"
            placeholder="@userName"
          />

          <label className="p-0 m-0" htmlFor="user">password:</label>
          <input
            className="border text-center rounded-2xl w-2/4"
            type="password"
            placeholder="@userName"
          />
        </form>
      </div>
    </>
  );
}
