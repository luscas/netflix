import React, { Component } from "react";
import Head from "next/head";
import Link from "next/link";
import classnames from "classnames";
import { motion } from "framer-motion";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
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

  render() {
    const { avatars } = this.state;

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

        <header className="bg-gradient-to-t from-transparent to-[#010101] w-screen pt-6 px-14">
          <img
            src="/assets/logo.svg"
            width={91.5}
            height={25}
            alt="Netflix"
            draggable={false}
          />
        </header>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          className="flex flex-1 flex-col items-center justify-center"
        >
          <div className="text-[3.5vw] text-white">Quem está assistindo?</div>
          <div className="flex gap-8 mt-10">
            {avatars.map((item, index) => (
              <Link href="/browse" key={index}>
                <a className="flex flex-col max-w-[10vw] group">
                  <img
                    className="bg-cover bg-no-repeat w-[10vw] h-[10vw] rounded-lg border-2 border-transparent focus:border-white outline-none focus:outline-white"
                    src={item.avatar}
                    alt="Avatar"
                  />
                  <div
                    className={classnames(
                      "text-[1.3vw] text-[grey] text-center py-2 group-hover:text-white"
                    )}
                  >
                    {item.name}
                  </div>
                  {item.isLocked && (
                    <div className="pointer-events-none mx-auto mt-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="grey"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        ></path>
                      </svg>
                    </div>
                  )}
                </a>
              </Link>
            ))}
          </div>
          <button
            type="button"
            className="bg-none text-[1.2vw] text-[grey] border border-[grey] cursor-pointer py-2 px-6 mt-12 hover:text-white hover:border-white tracking-widest"
            tabIndex="-1"
          >
            GERENCIAR PERFIS
          </button>
        </motion.div>
      </div>
    );
  }
}

export default Home;
