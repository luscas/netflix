import Head from "next/head";
import {
  Layout,
  Container,
  Header,
  WhosWatch,
  Avatars,
  ButtonManageProfile,
} from "./styles";

import { Account } from "../../components/account";

export default function Home() {
  const avatars = [
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
  ];
  return (
    <Layout>
      <Head>
        <title>Netflix</title>
      </Head>

      <Header>
        <img src="/assets/logo.svg" width={91.5} alt="Netflix" />
      </Header>

      <Container>
        <WhosWatch>Quem está assistindo?</WhosWatch>
        <Avatars>
          {avatars.map((item, index) => (
            <Account
              avatar={item.avatar}
              name={item.name}
              isLocked={item?.isLocked}
              key={index}
            />
          ))}
        </Avatars>
        <ButtonManageProfile>GERENCIAR PERFIS</ButtonManageProfile>
      </Container>
    </Layout>
  );
}
