import React, { Component } from "react";
import Head from "next/head";
import Image from "next/image";
import classnames from "classnames";

class Browse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFixed: false,
      movies: [
        "https://occ-0-2117-3851.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWnCD-Oji8vVf16xgK5x7zvqlWtj0DQmhrZP9kCNDXar-M3ZIiIoEfHrEk9k-KIHa6SoqJbDfGQdMuPOHVjFkzXBF730EUCKDjWePp46YxucISehqFMbBsIT-yGwu93vNtqtFO4LeVoSwPvHug1z23usmY5a6g.jpg?r=7ce",
        "https://occ-0-2117-3851.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbip2VCK-9khEePHs2Wt6-UIuNXaiK1SS7ojAJWhwlI1n9PJEt-OnVouY_BJv_zn8hb5BO1p2IRCo7A6rG2Q7zsVTW3DZhDgY7L93YOO4OLBkfCY7TK2JstnaWCfYlZHSQ.webp?r=f82",
        "https://occ-0-2117-3851.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbU_MkifiG-lraFkztm4XfinusgYptOLRwZWeG_Pzh-jP2zGbzr1-0GscLPokO_uUJ6tIFu3DX-tWl0xEUMj3G2NCGkvpXzIcUuewnhOmYFxYomD_TAng0fJGcRJ0kok9ZPxAF9QSqeZSOTRpjQyjXUWHARpdQ.jpg?r=8a1",
        "https://occ-0-2117-3851.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXA7-wVxnqwhkfddVgBIZzcLTepJX-ipFGrh18nxJKivj3E9x4Fb5G6IFGX7H-ShmO33TCQNP6Nj88mAQjaWS5aPvgnxpO3ED1l9rq0LnelGYIj15vS3T-cpQqxC.jpg?r=59d",
        "https://occ-0-2117-3851.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUKp8dpjnahP4h8Px3SIExhBkqmUQ4bMMWeT60ou-YEyHk5P_Dh0E-KXSsg4X191ZPUJPYXcwV2a_d5Th0MQu2dWVrQ.webp?r=c1c",
        "https://occ-0-2117-3851.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS_DL-O3sJoSxyTmt-Od7COuMnjoxm0_4jKkJLneKohJ4mFwQ3NZ0IanlCnOKFEPkaTKsk929DHm7B82e23moBinEVqT_WwMVrUvlGlVTeFF2FpgJVW7Jy93fPcI.jpg?r=b4d",
      ],
    };
  }

  componentDidMount() {
    document.onscroll = (e) => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // console.log(document.documentElement.scrollTop);
      if (scrollTop >= 120) {
        this.setState({ isFixed: true });
      } else {
        this.setState({ isFixed: false });
      }
    };
  }

  render() {
    const { movies, isFixed } = this.state;

    return (
      <div className="bg-[#141414]">
        <Head>
          <title>Início - Netflix</title>
        </Head>
        <header className="relative">
          <div
            className={classnames(
              "py-5 px-14 flex w-full fixed top-0 left-0 items-center transition-colors duration-700 z-10",
              {
                "bg-gradient-to-t from-transparent to-[#01010199]":
                  isFixed === false,
                "bg-[#010101]": isFixed === true,
              }
            )}
          >
            <Image
              src="/assets/logo.svg"
              width={91.5}
              height={25}
              alt="Netflix"
              draggable={false}
            />

            <nav className="mx-12 flex gap-5 items-center">
              <a href="#" className="text-white text-sm font-bold">
                Início
              </a>
              <a href="#" className="text-white text-sm">
                Séries
              </a>
              <a href="#" className="text-white text-sm">
                Filmes
              </a>
              <a href="#" className="text-white text-sm">
                Bombando
              </a>
              <a href="#" className="text-white text-sm">
                Minha lista
              </a>
            </nav>

            <div className="flex gap-5 ml-auto items-center">
              <a href="#">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </a>

              <a href="#">
                <svg
                  className="w-6 h-6"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                </svg>
              </a>

              <a href="#" className="grid grid-cols-2 items-center">
                <Image
                  src="https://occ-0-2117-3851.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUPhM-UyfiyQNO78P7qKa4zmgl_gBdVDOo1NDU47ABQPO57nd4ClG1_NSAvk_nADMKQmci5awneAKIx2AqY2nA4RAR-h.png?r=6c5"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded"
                  alt="Avatar de Bolsonaro"
                />

                <svg
                  className="w-4 h-4 ml-2"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div
            className="w-screen h-screen bg-[#141414] pb-30 bg-top bg-cover"
            style={{
              backgroundImage:
                "url(https://occ-0-2117-3851.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXPBep0fDjV7DWC0ApiZDxZCp_6U1SvvXXTBDw5rQBhh7HEP7-0QnEoGp6lbu_8Vdatr_hnxFphZ5TrT2J3HCpDCTmkX.webp?r=182)",
            }}
          >
            <div className="bg-gradient-special h-full w-screen flex flex-col justify-center items-start px-14">
              <div className="w-2/4">
                <Image
                  src="https://occ-0-2117-3851.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABXCI6Ld1Ih0yst68tXVtRoaYH9sOvRfHyzkmatrNw5cCHLXFOT78It50SpaJiY4K3WZx8pw9UWqytqVuM5MmEMlH8VxDdj7MNV4NMzSaHuEZ8Sa2BJwrlCng_RYU3U0P232snbtGNtQuLow9xnFY9VWDRGON8LCM4k20PqQkPu0X0w.webp?r=937"
                  width={650}
                  height={260}
                  className="flex-grow-0"
                  alt="Serie Logo"
                />
                <div className="font-bold text-[1.6vw] text-white pt-6 pb-2 text-shadow">
                  A coisa está quente: episódios finais na quarta-feira
                </div>
                <div className="text-white text-[1.4vw] text-shadow">
                  Neste reality, um grupo de solteiros da América Latina e da
                  Espanha é desafiado a ficar sem sexo. A recompensa pela
                  abstinência? 100 mil dólares.
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    type="button"
                    className="bg-white rounded-lg px-8 py-3 font-semibold text-xl inline-flex items-center gap-3 transition-colors hover:bg-opacity-80"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-8 h-8"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z" />
                    </svg>
                    Assistir
                  </button>

                  <button
                    type="button"
                    className="bg-black bg-opacity-50 rounded-lg px-8 py-3 font-semibold text-white text-xl inline-flex items-center gap-3 transition-colors hover:bg-opacity-40"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-8 h-8"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        fill="white"
                        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"
                      />
                    </svg>
                    Mais informações
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="-mt-24 relative z-10 px-14 bg-gradient-to-t from-[#141414]">
          <div className="text-xl font-bold text-white text-opacity-80 mb-4">
            Assistir novamente
          </div>
          <div className="flex gap-2">
            {movies.map((item, key) => (
              <a
                key={key}
                href={`/filme/${Math.ceil(Math.random() * 100)}`}
                className="w-1/6 h-36 rounded bg-cover shadow-lg transform transition relative cursor-pointer focus:scale-125 focus:box-shadow focus:z-10 hover:box-shadow hover:z-10 hover:scale-125"
                style={{
                  backgroundImage: `url(${item})`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="px-14 py-10">
          <div className="text-xl font-bold text-white text-opacity-80 mb-4">
            Continuar assistindo como Bolsonaro
          </div>
          <div className="flex gap-2">
            {movies.map((item, key) => (
              <a
                key={key}
                href={`/filme/${Math.ceil(Math.random() * 100)}`}
                className="w-1/6 h-36 rounded bg-cover shadow-lg transform transition relative cursor-pointer focus:scale-125 focus:box-shadow focus:z-10 hover:box-shadow hover:z-10 hover:scale-125"
                style={{
                  backgroundImage: `url(${item})`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="px-14 pb-10">
          <div className="text-xl font-bold text-white text-opacity-80 mb-4">
            Em alta
          </div>
          <div className="flex gap-2">
            {movies.map((item, key) => (
              <a
                key={key}
                href={`/filme/${Math.ceil(Math.random() * 100)}`}
                className="w-1/6 h-36 rounded bg-cover shadow-lg transform transition relative cursor-pointer focus:scale-125 focus:box-shadow focus:z-10 hover:box-shadow hover:z-10 hover:scale-125"
                style={{
                  backgroundImage: `url(${item})`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="px-14 pb-10">
          <div className="text-xl font-bold text-white text-opacity-80 mb-4">
            Só na Netflix
          </div>
          <div className="flex gap-2">
            {movies.map((item, key) => (
              <a
                key={key}
                href={`/filme/${Math.ceil(Math.random() * 100)}`}
                className="w-1/6 h-36 rounded bg-cover shadow-lg transform transition relative cursor-pointer focus:scale-125 focus:box-shadow focus:z-10 hover:box-shadow hover:z-10 hover:scale-125"
                style={{
                  backgroundImage: `url(${item})`,
                }}
              />
            ))}
          </div>
        </div>

        <footer className="w-8/12 mx-auto mt-10 pb-5">
          <div className="flex gap-3 text-[grey]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M15.402 21v-6.966h2.333l.349-2.708h-2.682V9.598c0-.784.218-1.319 1.342-1.319h1.434V5.857a19.19 19.19 0 0 0-2.09-.107c-2.067 0-3.482 1.262-3.482 3.58v1.996h-2.338v2.708h2.338V21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4.598z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"
              />
            </svg>
          </div>

          <div className="grid grid-cols-4 gap-5 text-xs text-[grey] mt-4">
            <ul className="flex flex-col gap-2">
              <li>Idioma e legendas</li>
              <li>Imprensa</li>
              <li>Privacidade</li>
              <li>Entre em contato</li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li>Autodescrição</li>
              <li>Relações com investidores</li>
              <li>Avisos legais</li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li>Centro de ajuda</li>
              <li>Carreiras</li>
              <li>Preferências de cookies</li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li>Cartão pré-pago</li>
              <li>Termos de uso</li>
              <li>Informações corporativas</li>
            </ul>
          </div>

          <button
            type="button"
            className="my-5 p-2 text-[grey] text-xs border border-[grey] hover:border-white hover:text-white"
            tabIndex="-1"
          >
            Código do serviço
          </button>

          <div className="text-[grey] text-xs">
            &copy; 1997-2021 Netflix, Inc.{" "}
            {"{bf61e653-9d7b-45d3-a49a-67e29e6a72f7}"}
          </div>
        </footer>
      </div>
    );
  }
}

export default Browse;
