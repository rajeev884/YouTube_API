import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={search:''};
    }
    onInputChange(term){
        this.props.onSearchTerm(term);
    }
    render(){
        return(
            <Card>
                <CardHeader
                title="YouTube"
                subtitle="API based Application"
                avatar="images/youtube.jpg"
                />
                <CardText className="row searchbar">
                    <TextField 
                    underlineFocusStyle={{borderColor:"#c03333"}}
                    floatingLabelStyle={{color:"#c03333"}}
                    inputStyle={{marginTop:"10px"}}
                    style={{width:"50%"}}
                    floatingLabelText="Search Videos"
                    value={this.state.search}
                    onChange={(event)=>this.setState({search:event.target.value})}                    
                    />
                    <RaisedButton 
                    onClick={()=>this.onInputChange(this.state.search)}
                    label="Search" 
                    labelColor="#fff"
                    backgroundColor="#c03333" />
                </CardText>
             </Card>  
        );
    }
}
export default SearchBar;