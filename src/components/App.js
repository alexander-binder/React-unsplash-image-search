import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await  unsplash.get('/search/photos',{
            params: { query: term},
            
        });
        this.setState({images: response.data.results});
    
    }

    render(){
        return( 
            <div className='ui container' style={ { marginTop: '10px' } }>
                <SearchBar onSubmitAppCallBack={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
                Found: {this.state.images.length} images
            </div>
       ); 
    
    }
     

}


export default App;