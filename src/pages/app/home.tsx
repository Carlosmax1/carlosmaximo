import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Icon } from '@/components/icon';
import { InfiniteSlider } from '@/components/slider';

export function Home() {
  return (
    <>
      <menu className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-2xl text-neutral-300">Carlos Máximo</h1>
        </div>
        <Link to="/contact">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse"></div>
            <span className="text-xs font-medium">Disponível</span>
          </div>
        </Link>
      </menu>
      <header className="mt-14 p-3 relative">
        <div className="flex items-center gap-6">
          <img loading="lazy" alt="Carlos Máximo" src="https://github.com/carlosmax1.png" className="w-32 h-32 rounded-full" />
          <div>
            <motion.div
              animate={{ rotate: [0, 2] }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              className="text-2xl mb-1"
            >
              👋
            </motion.div>
            <h2 className="text-md md:text-2xl font-bold bg-gradient-to-br from-white from-30% to-white/50 bg-clip-text text-transparent">Olá, sou o Carlos,</h2>
            <p className="font-light text-neutral-300 text-xs md:text-sm">desenolvedor fullstack, apaixonado por tecnologia e inovação</p>
            <p className="mt-2 text-xs md:text-sm font-light inline-flex text-neutral-200 gap-1 items-center">
              <Icon name="MapPin" size={14} color="#d3d3d3" />
              Minas Gerais, Brasil
            </p>
          </div>
        </div>
        <section className="mt-4" id="techs">
          <InfiniteSlider>
            <img src="/carlosmaximo/techs/react.png" className="aspect-square w-[40px] rounded-[4px]" alt="01's image" />
            <img src="/carlosmaximo/techs/ts.png" className="aspect-square w-[40px] rounded-[4px]" alt="02's image" />
            <img src="/carlosmaximo/techs/android.png" className="aspect-square w-[40px] rounded-[4px]" alt="03's image" />
            <img src="/carlosmaximo/techs/js.png" className="aspect-square w-[40px] rounded-[4px]" alt="04's image" />
            <svg viewBox="0 0 24 24" className="aspect-square w-[40px] rounded-[4px] text-neutral-400">
              <path
                d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
                fill="currentColor"
              ></path>
            </svg>
          </InfiniteSlider>
        </section>
      </header>
      <main>
        <section className="mt-10" id="experience">
          <div className="flex justify-between items-start mb-1">
            <div className="mb-2 flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-md md:text-2xl font-bold bg-gradient-to-br from-white from-30% to-white/50 bg-clip-text text-transparent">Desenvolvedor Mobile</h3>
                <div>
                  <Link to="https://realtec.com.br" target="_blank" className="flex items-center gap-1">
                    <Icon name="MapPin" size={14} color="#d3d3d3" />
                    <span className="text-xs font-medium text-neutral-300 hover:underline hover:underline-offset-4">Realtec</span>
                  </Link>
                </div>
              </div>
              <p className="text-xs font-light uppercase tracking-wider text-black-400">2024 - Atualmente</p>
              <p className="text-xs font-light mt-2 text-neutral-400">Desenvolvimento de aplicações mobile Android e IOS com React Native para o setor do agronegócio</p>
            </div>
          </div>
          <div className="group flex items-center gap-3">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-4 text-neutral-400">
              <title>TypeScript</title>
              <path
                fill="currentColor"
                d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
              ></path>
            </svg>
            <svg viewBox="0 0 24 24" className="size-4 text-neutral-400">
              <title>React.js</title>
              <path
                d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                fill="currentColor"
              ></path>
            </svg>
            <img src="/carlosmaximo/techs/android.png" className="aspect-square size-4 rounded-[4px]" alt="03's image" />
          </div>
        </section>
      </main>
    </>
  );
}
