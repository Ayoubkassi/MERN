import React from 'react';
import  useContent from '../hooks/use-content';
import selectionFilter from '../utils/selection-map';
import BrowseContainer from '../containers/browse';

const BrowsePage = () => {
  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = selectionFilter({  series, films });
  return (
    //browse our series and films
    //slides and then pass it into the browser
    <BrowseContainer slides={slides} />

  )
}

export default BrowsePage;
