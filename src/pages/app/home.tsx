import { Link } from 'react-router-dom';

import { Accordion, Roles } from '@/components/accordion';
import { Icon } from '@/components/icon';

export function Home() {
  const myRoles: Roles[] = [
    {
      title: 'Estagiário',
      description: 'Monitoramento de sistemas e virtualização de servidores',
      endAt: 2023,
      startAt: 2022,
      enterprise: 'Prodemge',
      enterpriseUrl: 'https://www.prodemge.mg.gov.br/',
      techs: ['Zabbix', 'Linux', 'VMWare', 'PowerBI'],
    },
    {
      title: 'Desenvolvedor',
      description: 'Desenvolvimento de aplicações web e mobile',
      endAt: 2021,
      startAt: 2023,
      enterprise: 'Empresa Júnior InfoAlto',
      enterpriseUrl: 'https://infoalto.com.br/',
      techs: ['React', 'React Native', 'Node.js', 'WordPress', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Técnico em Informática',
      description: 'Manutenção de computadores e redes | Freelancer',
      endAt: 2020,
      startAt: 2018,
      enterprise: 'Freelancer',
      techs: ['Windows', 'Linux', 'Redes', 'Hardware'],
    },
  ];

  return (
    <>
      <menu className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-2xl text-neutral-300">Carlos Máximo</h1>
        </div>
        <Link to="/contact">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse"></div>
            <span className="text-xs font-medium">Disponível para trabalho</span>
          </div>
        </Link>
      </menu>
      <header className="mt-10 flex items-center gap-6">
        <img loading="lazy" alt="Carlos Máximo" src="https://github.com/carlosmax1.png" className="w-32 h-32 rounded-full" />
        <div>
          <span className="text-2xl mb-2.5">👋</span>
          <h2 className="text-md md:text-2xl font-bold bg-gradient-to-br from-white from-30% to-white/50 bg-clip-text text-transparent">Olá, sou o Carlos,</h2>
          <p className="font-light text-neutral-300 text-xs md:text-sm">desenolvedor fullstack, apaixonado por tecnologia e inovação</p>
          <p className="mt-2 text-xs md:text-sm font-light inline-flex text-neutral-200 gap-1 items-center">
            <Icon name="MapPin" size={14} color="#d3d3d3" />
            Minas Gerais, Brasil
          </p>
        </div>
      </header>
      <main>
        <section className="mt-10" id="experience">
          <h3 className="text-xs mb-3 font-light uppercase tracking-wider text-black-400">Atualmente</h3>
          <div className="flex justify-between items-start mb-1">
            <div className="mb-2">
              <h3 className="text-md md:text-2xl font-bold bg-gradient-to-br from-white from-30% to-white/50 bg-clip-text text-transparent">Desenvolvedor Mobile</h3>
              <p className="text-xs font-light uppercase tracking-wider text-black-400">2024 - Atualmente</p>
              <p className="text-xs font-light mt-2 text-neutral-400">Desenvolvimento de aplicações mobile Android e IOS com React Native para o setor do agronegócio</p>
            </div>
          </div>
          <div>
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-4 text-neutral-400">
              <title>TypeScript</title>
              <path
                fill="currentColor"
                d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
              ></path>
            </svg>
          </div>
          <Accordion roles={myRoles.sort((a, b) => (a.endAt - b.endAt ? 1 : -1))} />
        </section>
      </main>
      <footer></footer>
    </>
  );
}
