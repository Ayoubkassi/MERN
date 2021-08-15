import Jumbotron from '../components/jumbotron/jumbotron.component';
import jumboData from '../fixtures/jumbo';
import React from 'react';

function JumbotronContainer() {
  return (
    <div className="App">

      <Jumbotron.Container>
        {
          jumboData.map((item)=> (
            <Jumbotron key={item.id} direction={item.direction}>
              <Jumbotron.Pane>
                <Jumbotron.Title>{item.title}</Jumbotron.Title>
                <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
              </Jumbotron.Pane>
              <Jumbotron.Pane>
                <Jumbotron.Image src={item.image} alt={item.alt} />
              </Jumbotron.Pane>
            </Jumbotron>
          ))
        }
      </Jumbotron.Container>

    </div>
  );
}

export default JumbotronContainer;
