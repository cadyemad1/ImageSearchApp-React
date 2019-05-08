import React from 'react';


class SearchBar extends React.Component{
    state={item:''}
    
    onInputSubmit=(e)=>{
        e.preventDefault();
       this.props.onSubmit(this.state.item);
    }
    render()
    {
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onInputSubmit}>
                    <div className="field">
                    <label>Image Search</label>
                    <input type="text" value={this.state.item} onChange={(e)=>{this.setState({item:e.target.value})}} />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;