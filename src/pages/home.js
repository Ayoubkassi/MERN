import React from 'react'
import JumbotronContainer from '../containers/jumbotron';
import FooterContainer from '../containers/footer';
import FaqsContainer from '../containers/faqs';

const HomePage = () => {
  return (
    <>
    <JumbotronContainer />
    <FaqsContainer />
    <FooterContainer />
    </>
  )
}

export default HomePage;
