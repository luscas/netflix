import React, { Component } from "react";
import Head from "next/head";
import classnames from "classnames";
import { motion } from "framer-motion";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: 0,
      avatars: [
        {
          avatar:
            "https://occ-0-2117-3851.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUPhM-UyfiyQNO78P7qKa4zmgl_gBdVDOo1NDU47ABQPO57nd4ClG1_NSAvk_nADMKQmci5awneAKIx2AqY2nA4RAR-h.png?r=6c5",
          name: "Bolsonaro",
          isLocked: true,
        },
        {
          avatar:
            "https://occ-0-2117-3851.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeEAcPZi6PjGs2nulcaolSHUKFnU6df77uaEQcDnULWbpaSa4ciX_ULtwiibSQ26pZ060ZgBEbiGfZIuzJXXaTpoZZKD.png?r=2de",
          name: "CONVIDADOS",
        },
        {
          avatar:
            "https://occ-0-2117-3851.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABaJz4OWASLW16n2b5nrQ1Kl-_o99C52EduX5tYKaRTL9-1yV0FFe6X0eRAGmS4rlBt-NwTxNV2KN41N_mR4LrCaT5tuG.png?r=ce4",
          name: "Isabelzinha Pika Das Galáxias",
        },
        {
          avatar:
            "https://occ-0-2117-3851.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABcGNQWc7L2Jfalunkat8icngCfR-dBCS8KUpqf7qQV6Hib9aoG9a0ffTlDC1ZdOT6_xkwl8-SPNZ2UUnZQbSPaszQ9Fv.png?r=6a1",
          name: "Mae Linda",
        },
        {
          avatar:
            "https://occ-0-2117-3851.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABU516JGUhSJQIdWjLHtMHWygYLXC2ZD72UNmD9OnOVhLtTa5qJdIvM6KalssUgX19415_1z7L4f-pdGyfyxwc9ncLLrX.png?r=850",
          name: "Vivi",
        },
      ],
    };
  }

  componentDidMount() {
    document.onkeydown = (e) => {
      e = e || window.event;

      if (
        e.code == "ArrowRight" &&
        this.state.isSelected <= this.state.avatars.length - 1
      ) {
        if (this.state.isSelected === this.state.avatars.length - 1) {
          this.setState({
            isSelected: 0,
          });
          return false;
        }

        this.setState({
          isSelected: this.state.isSelected + 1,
        });
      }

      if (e.code == "ArrowLeft") {
        if (this.state.isSelected == 0) {
          this.setState({
            isSelected: this.state.avatars.length - 1,
          });
          return false;
        }

        this.setState({
          isSelected: this.state.isSelected - 1,
        });
      }

      if (e.code == "Enter") {
        if (this.state.avatars[this.state.isSelected].isLocked) {
          prompt(
            `Insira a senha do perfil ${
              this.state.avatars[this.state.isSelected].name
            }`
          );
          return false;
        }

        alert(
          `Selecionou o perfil: ${
            this.state.avatars[this.state.isSelected].name
          }`
        );
      }
    };
  }

  render() {
    const { avatars, isSelected } = this.state;

    const variants = {
      hidden: { scale: 1.2, opacity: 0 },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      },
    };

    return (
      <div className="bg-[#141414] flex flex-col w-screen h-screen overflow-hidden">
        <Head>
          <title>Quem está assistindo? - Netflix</title>
        </Head>

        <header className="relative">
          <div className="pt-5 px-14 flex w-full bg-gradient-to-t from-transparent to-[#010101] fixed top-0 left-0 items-center">
            <img
              src="/assets/logo.svg"
              width={91.5}
              alt="Netflix"
              draggable={false}
            />

            <nav className="mx-12 flex gap-5 items-center">
              <a href="/" className="text-white text-sm font-bold">
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
                  class="w-6 h-6"
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </a>

              <a href="#">
                <svg
                  class="w-6 h-6"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                </svg>
              </a>

              <a href="#" className="grid grid-cols-2 items-center">
                <img
                  src="https://occ-0-2117-3851.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUPhM-UyfiyQNO78P7qKa4zmgl_gBdVDOo1NDU47ABQPO57nd4ClG1_NSAvk_nADMKQmci5awneAKIx2AqY2nA4RAR-h.png?r=6c5"
                  className="w-8 h-8 rounded"
                  alt="Avatar de Bolsonaro"
                />

                <svg
                  class="w-4 h-4 ml-2"
                  fill="white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <img
            src="https://occ-0-2117-3851.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUOm-6XJRaDmfHDRRtuk-oxHQ2DrbehUQIZh8VnvufZzWhSP9Q04z7emj4J_w8mbEgHti4VbD1NF1In2swxnWrY8TOHH.webp?r=50e"
            className="w-screen"
          />
        </header>
      </div>
    );
  }
}

export default Home;
