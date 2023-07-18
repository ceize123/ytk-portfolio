import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiMui,
  SiMongodb,
  SiSass,
  SiPostgresql,
  SiTailwindcss,
  SiChartdotjs,
  SiFlask,
  SiI18Next,
  SiFirebase,
  SiAmazonaws,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandVue } from 'react-icons/tb';
import IconDiv from './Tool-icon';

export default function WeaponSec() {
  return (
    <section id='tool-sec' className='mx-8 py-24'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-center lg:text-5xl text-4xl'>
          <span className='stroke-white text-primary'>My</span> Weapons
        </h1>
        <div className='sm:mt-12 mt-5 md:w-3/4 w-full mx-auto md:p-3 p-2 border border-green rounded grid lg:grid-cols-3 grid-cols-2'>
          <IconDiv component={<SiJavascript />} text='JavaScript' />
          <IconDiv component={<SiTypescript />} text='TypeScript' />
          <IconDiv component={<SiReact />} text='React.js' />
          <IconDiv component={<TbBrandNextjs />} text='Next.js' />
          <IconDiv component={<TbBrandVue />} text='Vue.js' />
          <IconDiv component={<SiSass />} text='Sass' />
          <IconDiv component={<SiTailwindcss />} text='TailwindCSS' />
          <IconDiv component={<SiMui />} text='MUI' />
          <IconDiv component={<SiChartdotjs />} text='Chart.js' />
          <IconDiv component={<SiNodedotjs />} text='Node.js' />
          <IconDiv component={<FaJava />} text='Java' />
          <IconDiv component={<SiPython />} text='Python' />
          <IconDiv component={<SiFlask />} text='Flask' />
          <IconDiv component={<SiPostgresql />} text='PostgreSQL' />
          <IconDiv component={<SiMongodb />} text='MongoDB' />
          <IconDiv component={<SiFirebase />} text='Firebase' />
          <IconDiv component={<SiAmazonaws />} text='Amazon AWS' />
          <IconDiv component={<SiI18Next />} text='I18next' />
        </div>
      </div>
    </section>
  );
}
