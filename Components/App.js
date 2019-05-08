import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';


class App extends React.Component{
    state = {images: [] };

  // onSubmitBar = async (term) => {
  //       const response = await  unsplash.get('https:///api.unsplash.com/search/photos',
  //       {
  //           params:{ query: term},
            
  //       } );
  //       this.setState({images: response.data.results });
       
  //   }
    
   render(){
      return (
        
      <div className="ui container" style={{marginTop:'30px'}}>
        <SearchBar onSubmit={async (term) => {
        const response = await  unsplash.get('https:///api.unsplash.com/search/photos',
        {
            params:{ query: term},
            
        } );
        this.setState({images: response.data.results });
       
    }}/>
         <ImageList image={this.state.images}/>
      </div>

      );
   }
}


export default App;