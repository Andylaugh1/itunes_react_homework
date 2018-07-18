import React from 'react';
import SongList from '../components/SongList.js';
import SongDetail from '../components/SongDetail.js';

class SongContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  componentDidMount () {
    console.log('componentDidMount');
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({songs: data.feed.entry}))
    console.log(data.feed.entry);
    .catch( err => console.error(err));
  }

  render() {
    return (
      <div>
        <h1>Song Container</h1>
        <SongDetail songs={this.state.songs}/>
      </div>
    )
    console.log(this.state.songs)
  }
}

export default SongContainer;
