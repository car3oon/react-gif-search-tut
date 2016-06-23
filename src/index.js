import React from 'react';
import ReactDom from 'react-dom';
import GifList from '../components/GifList';
import SearchBar from '../components/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [
        {
          id: 1,
          url: 'http://fakeimg.pl/300/'
        },
        {
          id: 2,
          url: 'http://fakeimg.pl/300/'
        },
        {
          id: 3,
          url: 'http://fakeimg.pl/300/'
        }
      ]
    }
  }

  handleTermChange(term) {
    console.log(term);
  }

  render () {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange}/>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
