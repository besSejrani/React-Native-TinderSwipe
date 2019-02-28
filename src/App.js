import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './Deck';

const DATA = [
  {
    id: 1,
    text: 'Card #1',
    uri:
      'https://the-hollywood-gossip-res.cloudinary.com/iu/s--3rI2m2cq--/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1440177596/danica-dillon-photo.jpg'
  },
  {
    id: 2,
    text: 'Card #2',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg'
  },
  {
    id: 3,
    text: 'Card #3',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg'
  },
  {
    id: 4,
    text: 'Card #4',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg'
  },
  {
    id: 5,
    text: 'Card #5',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg'
  },
  {
    id: 6,
    text: 'Card #6',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg'
  },
  {
    id: 7,
    text: 'Card #7',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg'
  },
  {
    id: 8,
    text: 'Card #8',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg'
  }
];

class App extends React.Component {
  renderCard = item => {
    return (
      <Card
        title={item.text}
        image={{ uri: item.uri }}
        imageStyle={{ height: 300 }}
        key={item.id}
      >
        <Text style={{ margin: 10 }}>I can customize the rn card further</Text>
        <Button backgroundColor="#03a9fa" title="Get a Match !" />
      </Card>
    );
  };

  renderNoMoreCards = () => {
    return (
      <Card title="All Done">
        <Text style={{ margin: 10 }}>There is no more content</Text>
        <Button title="Get more" backgroundColor="#03a9f4" />
      </Card>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

export default App;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
};
