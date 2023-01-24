import React from 'react'
import OurPlusBlock from '../components/MainSections/OurPlusSection';
import WelcomeSection from '../components/MainSections/WelcomeSection';
import MoneyCourseSections from '../components/MainSections/MoneyCourseSections';
import MapSection from '../components/MainSections/MapSection';
import FormBlock from '../components/MainSections/FormBlock';
import NewsBlock from '../components/MainSections/NewsBlock';



const MainPage: React.FC = () => {


  return (
    <main>
      <WelcomeSection />
      <OurPlusBlock/>
      <MoneyCourseSections />
      <MapSection />
      <NewsBlock />
      <FormBlock />
    </main>
  )
}

export default MainPage;