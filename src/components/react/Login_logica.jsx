
const login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-700">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-10 border border-gray-300">
    <h1 className="text-3xl font-extrabold text-center mb-10">inicio de sesión</h1>
    <form>
      <div className="mb-8">
        <label htmlFor="email" className="block mb-3 text-sm font-semibold text-gray-800">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Ingresa tu correo"
          className="w-full px-5 py-3 border border-gray-300 rounded-lg outline-none text-base transition duration-200 ease-in-out focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-8">
        <label htmlFor="password" className="block mb-3 text-sm font-semibold text-gray-800">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Ingresa tu contraseña"
          className="w-full px-5 py-3 border border-gray-300 rounded-lg outline-none text-base transition duration-200 ease-in-out focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
      >
        Iniciar sesión
      </button>
    </form>
  </div>
</div>

  )
}

export default login
