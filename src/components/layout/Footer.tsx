import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-space-blue-dark border-t border-nebula-blue/30 mt-auto pt-8">
      <div className="container-guide pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre o curso */}
          <div>
            <h3 className="text-guide-yellow font-bold text-sm mb-3">
              AI Fluency
            </h3>
            <p className="text-star-white/60 text-sm leading-relaxed">
              Curso prático de fluência em Inteligência Artificial usando o
              Framework 4D: Delegation, Description, Discernment e Diligence.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-guide-yellow font-bold text-sm mb-3">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/framework"
                  className="text-star-white/60 hover:text-guide-yellow text-sm transition-colors"
                >
                  O Framework 4D
                </Link>
              </li>
              <li>
                <Link
                  href="/modulos"
                  className="text-star-white/60 hover:text-guide-yellow text-sm transition-colors"
                >
                  Módulos do Curso
                </Link>
              </li>
              <li>
                <Link
                  href="/vocabulario"
                  className="text-star-white/60 hover:text-guide-yellow text-sm transition-colors"
                >
                  Vocabulário
                </Link>
              </li>
            </ul>
          </div>

          {/* Créditos */}
          <div>
            <h3 className="text-guide-yellow font-bold text-sm mb-3">
              Créditos
            </h3>
            <p className="text-star-white/60 text-sm leading-relaxed">
              Desenvolvido por{" "}
              <span className="text-star-white/80">Dr. Iuri Almeida</span>
            </p>
            <p className="text-star-white/40 text-xs mt-2">
              Inspirado em &quot;O Guia do Mochileiro das Galáxias&quot;
              <br />
              de Douglas Adams
            </p>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-nebula-blue/30 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-star-white/40 text-xs">
            &copy; {currentYear} AI Fluency. Todos os direitos reservados.
          </p>
          <p className="text-star-white/40 text-xs flex items-center gap-2">
            <span className="relative w-10 h-10">
              <Image
                src="/images/icons/dolphin.png"
                alt=""
                fill
                sizes="40px"
                className="object-contain"
              />
            </span>
            <span>&quot;So long, and thanks for all the fish!&quot;</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
