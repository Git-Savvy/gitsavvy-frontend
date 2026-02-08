import React, { useState } from "react";
import { useUserLogin } from "../hooks/useUser";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // useMutation hook from React Query
  const { mutate, isPending } = useUserLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trigger the mutation
    mutate({ username, password });
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          disabled={isPending} // disable while loading
          className="bg-primary text-white p-2 rounded hover:bg-primary-dark disabled:opacity-50"
        >
          {isPending ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};
