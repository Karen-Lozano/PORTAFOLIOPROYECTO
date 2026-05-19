import fondo from './assets/img/ImagenFondo.webp'
import rucu from './assets/img/Rucu Pichincha.webp'
import pasochoa from './assets/img/Pasochoa.webp'
import pululahua from './assets/img/Pululahua.webp'
import guagua from './assets/img/Guagua Pichincha.webp'
import ilalo from './assets/img/Ilalo.webp'
import nono from './assets/img/Guagrapamba de Nono.webp'

function App() {
  return (
    <div>

      {/* NAV */}
      <header className="nav">
        <div className="wrap nav-row">

          <a className="logo" href="#">
            Aquí Nomás
          </a>

          <nav className="nav-links">
            <a href="#">Inicio</a>
            <a href="#rutas">Rutas</a>
            <a href="#consejos">Consejos</a>
            <a href="#contacto">Contacto</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="hero">

        <div className="hero-bg">
          <img
            src={fondo}
            alt="Fondo"
          />
        </div>

        <div className="hero-inner">

          <span className="label" id="label-title">
            Senderismo · Quito · Ecuador
          </span>

          <h1 className="hero-title">
            Aquí Nomás
          </h1>

          <p className="hero-sub">
            Descubre las mejores rutas de montaña alrededor de la capital del Ecuador.
          </p>

          <a className="btn" href="#rutas">
            Ver rutas
          </a>

        </div>
      </section>

      {/* STATS */}
      <div className="stats-outer">

        <div className="stats">

          <div className="stat">
            <div className="stat-numero">15+</div>
            <div className="stat-etiqueta">
              Rutas disponibles
            </div>
          </div>

          <div className="stat">
            <div className="stat-numero">2,800–4,800</div>
            <div className="stat-etiqueta">
              Altitud msnm
            </div>
          </div>

          <div className="stat">
            <div className="stat-numero">Todos</div>
            <div className="stat-etiqueta">
              Niveles de experiencia
            </div>
          </div>

        </div>
      </div>

      {/* RUTAS */}
      <section className="rutas" id="rutas">

        <div className="wrap">

          <h2 className="seccion-titulo">
            Rutas
          </h2>

          <div className="barra"></div>

          <div className="grid">

            {/* CARD 1 */}
            <div className="card">

              <div className="card-img">
                <img
                  src={rucu}
                  alt="Rucu Pichincha"
                />
              </div>

              <div className="card-body">

                <div className="card-nombre">
                  Teleférico + Rucu Pichincha
                </div>

                <p className="card-desc">
                  Cumbre icónica accesible desde el teleférico,
                  con senderos de páramo y vistas espectaculares.
                </p>

                <div className="meta">
                  <span className="dato">⏱ 4–6 h</span>
                  <span className="dato">▲ 4,784 msnm</span>
                  <span className="dato">↔ 8–10 km</span>
                </div>

              </div>

              <a className="card-btn">
                Ver detalles
              </a>

            </div>

            {/* CARD 2 */}
            <div className="card">

              <div className="card-img">
                <img
                  src={pasochoa}
                  alt="Pasochoa"
                />
              </div>

              <div className="card-body">

                <div className="card-nombre">
                  Volcán Pasochoa
                </div>

                <p className="card-desc">
                  Reserva natural con bosques andinos y pajonales.
                </p>

                <div className="meta">
                  <span className="dato">⏱ 7–8 h</span>
                  <span className="dato">▲ 4,200 msnm</span>
                  <span className="dato">↔ 12–14 km</span>
                </div>

              </div>

              <a className="card-btn">
                Ver detalles
              </a>

            </div>

            {/* CARD 3 */}
            <div className="card">

              <div className="card-img">
                <img
                  src={pululahua}
                  alt="Pululahua"
                />
              </div>

              <div className="card-body">

                <div className="card-nombre">
                  Cráter Pululahua
                </div>

                <p className="card-desc">
                  Cráter volcánico habitado con rutas suaves y paisajes únicos.
                </p>

                <div className="meta">
                  <span className="dato">⏱ 2–3 h</span>
                  <span className="dato">▲ 3,350 msnm</span>
                  <span className="dato">↔ 8–9 km</span>
                </div>

              </div>

              <a className="card-btn">
                Ver detalles
              </a>

            </div>

            {/* CARD 4 */}
            <div className="card">

              <div className="card-img">
                <img
                  src={guagua}
                  alt="Guagua Pichincha"
                />
              </div>

              <div className="card-body">

                <div className="card-nombre">
                  Guagua Pichincha
                </div>

                <p className="card-desc">
                  Volcán activo con ruta exigente y vistas increíbles.
                </p>

                <div className="meta">
                  <span className="dato">⏱ 7–9 h</span>
                  <span className="dato">▲ 4,784 msnm</span>
                  <span className="dato">↔ 16–18 km</span>
                </div>

              </div>

              <a className="card-btn">
                Ver detalles
              </a>

            </div>

            {/* CARD 5 */}
            <div className="card">

              <div className="card-img">
                <img
                  src={ilalo}
                  alt="Ilalo"
                />
              </div>

              <div className="card-body">

                <div className="card-nombre">
                  Volcán Ilaló
                </div>

                <p className="card-desc">
                  Volcán extinto con senderos accesibles y vistas panorámicas.
                </p>

                <div className="meta">
                  <span className="dato">⏱ 4–5 h</span>
                  <span className="dato">▲ 3,180 msnm</span>
                  <span className="dato">↔ 10–11 km</span>
                </div>

              </div>

              <a className="card-btn">
                Ver detalles
              </a>

            </div>

            {/* CARD 6 */}
            <div className="card">

              <div className="card-img">
                <img
                  src={nono}
                  alt="Nono"
                />
              </div>

              <div className="card-body">

                <div className="card-nombre">
                  Cascadas de Nono
                </div>

                <p className="card-desc">
                  Ruta tranquila entre bosques nublados y cascadas.
                </p>

                <div className="meta">
                  <span className="dato">⏱ 1.5–2 h</span>
                  <span className="dato">▲ 2,700 msnm</span>
                  <span className="dato">↔ 3 km</span>
                </div>

              </div>

              <a className="card-btn">
                Ver detalles
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="contacto" id="contacto">

        <div className="wrap">

          <h2 className="contacto-titulo">
            ¿Quieres organizar una salida grupal?
          </h2>

          <p className="contacto-sub">
            Escríbenos y coordinamos una ruta.
          </p>

          <div className="formulario">

            <div className="campo">

              <label htmlFor="nombre">
                Nombre
              </label>

              <input
                type="text"
                id="nombre"
                placeholder="Tu nombre completo"
              />

            </div>

            <div className="campo">

              <label htmlFor="email">
                Correo electrónico
              </label>

              <input
                type="email"
                id="email"
                placeholder="email@ejemplo.com"
              />

            </div>

            <div className="campo">

              <label htmlFor="mensaje">
                Mensaje
              </label>

              <textarea
                id="mensaje"
                placeholder="Cuéntanos sobre tu grupo"
              ></textarea>

            </div>

            <button className="btn btn-ancho">
              Enviar
            </button>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pie">

        <div className="pie-logo">
          Aquí Nomás
        </div>

        <p className="pie-texto">
          Rutas de Senderismo en Quito · ESFOT – EPN · 2026
        </p>

      </footer>

    </div>
  )
}

export default App
