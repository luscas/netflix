import React, { Component } from "react";
import Head from "next/head";
import classnames from "classnames";

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

    return (
      <div className="bg-[#141414] flex flex-col w-screen h-screen overflow-hidden">
        <Head>
          <title>Quem está assistindo? - Netflix</title>
        </Head>

        <div className="bg-gradient-to-t from-transparent to-[#010101] w-screen pt-5 px-14">
          <img src="/assets/logo.svg" width={91.5} alt="Netflix" />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="text-[3.5vw] text-white">Quem está assistindo?</div>
          <div className="flex gap-8 mt-10">
            {avatars.map((item, index) => (
              <div className="flex flex-col max-w-[10vw] group" key={index}>
                <img
                  className={classnames(
                    "bg-cover bg-no-repeat w-[10vw] h-[10vw] rounded-lg border-2",
                    {
                      "border-white": isSelected === index,
                      "border-transparent": (isSelected === index) == false,
                    }
                  )}
                  src={item.avatar}
                />
                <div
                  className={classnames(
                    "text-[1.3vw] text-[grey] text-center py-2 group-hover:text-white"
                  )}
                >
                  {item.name}
                </div>
                {item.isLocked && (
                  <div className="pointer-events-none mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill={"grey"}
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M6 8V7a6 6 0 1 1 12 0v1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2zm13 2H5v10h14V10zm-8 5.732a2 2 0 1 1 2 0V18h-2v-2.268zM8 8h8V7a4 4 0 1 0-8 0v1z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            className="bg-none text-[1.2vw] text-[grey] border border-[grey] cursor-pointer py-2 px-6 mt-12 hover:text-white hover:border-white tracking-widest"
          >
            GERENCIAR PERFIS
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
