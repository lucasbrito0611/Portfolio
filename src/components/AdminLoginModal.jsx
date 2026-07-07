import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import api from "../lib/api";

function AdminLoginModal() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Bloqueia o scroll da página enquanto o modal de login estiver na tela
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const { data } = await api.post("/auth/login", { email, password });
      login(data.accessToken);
      navigate("/admin");
    } catch (err) {
      if (err.response) {
        const message = err.response.data?.message ?? "Credenciais inválidas.";
        setError(Array.isArray(message) ? message.join(", ") : message);
      } else {
        setError("Não foi possível conectar ao servidor. Tente novamente.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark-blue">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="w-full max-w-[360px] mx-4"
      >
        {/* Card */}
        <div className="bg-dark-green rounded-[10px] border border-mid-blue/10 overflow-hidden">
          {/* Barra de acento no topo */}
          <div className="h-[3px] bg-gradient-to-r from-mid-green to-bright-green" />

          <div className="p-8 pb-9">
            {/* Logo + título */}
            <div className="flex flex-col items-center mb-7">
              <img src="/logo.ico" alt="Logo" className="w-13 h-13 mb-4" />
              <h1 className="font-fira-code text-light-blue text-lg font-semibold tracking-tight">
                Fazer login
              </h1>
            </div>

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Campo E-mail */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="admin-email"
                  className="font-fira-code text-mid-blue text-xs font-medium"
                >
                  E-mail <span className="text-mid-green">*</span>
                </label>
                <input
                  id="admin-email"
                  type="email"
                  required
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="font-fira-code w-full bg-dark-blue border border-mid-blue/15 rounded-md px-3 py-[0.55rem] text-light-blue text-sm outline-none focus:border-bright-green/45 transition-colors"
                />
              </div>

              {/* Campo Senha */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="admin-password"
                  className="font-fira-code text-mid-blue text-xs font-medium"
                >
                  Senha <span className="text-mid-green">*</span>
                </label>
                <div className="relative">
                  <input
                    id="admin-password"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="font-fira-code w-full bg-dark-blue border border-mid-blue/15 rounded-md px-3 pr-9 py-[0.55rem] text-light-blue text-sm outline-none focus:border-bright-green/45 transition-colors"
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-mid-blue hover:text-bright-green transition-colors cursor-pointer"
                  >
                    {showPassword ? (
                      <FiEyeOff size={14} />
                    ) : (
                      <FiEye size={14} />
                    )}
                  </button>
                </div>
              </div>

              {/* Mensagem de erro */}
              {error && (
                <p className="font-fira-code text-red-400 text-xs bg-red-400/8 border border-red-400/20 rounded-md px-3 py-2">
                  {error}
                </p>
              )}

              {/* Botão de login */}
              <button
                type="submit"
                disabled={isLoading}
                className="font-fira-code mt-1 w-full py-2.5 rounded-md bg-mid-green hover:bg-bright-green text-dark-blue text-sm font-semibold transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? "Autenticando..." : "Entrar"}
              </button>

              {/* Link para voltar ao site */}
              <Link
                to="/"
                className="font-fira-code text-center text-xs text-mid-blue hover:text-bright-green transition-colors mt-2"
              >
                Voltar para o site
              </Link>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AdminLoginModal;
