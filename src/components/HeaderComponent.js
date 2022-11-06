import React,{Component} from 'react';
import { Modal,ModalBody,ModalHeader} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../styles/HeaderStyles.css';
import 'font-awesome/css/font-awesome.min.css';
import Cardcomponent from './CardsComponent';


class Headercomponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Image:"random",
            finalImage:"random",
            status:"reset"
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange=(Event)=>{
        this.setState({
            Image: Event.target.value,
            status:"noChange"
        });
    };
    handleSubmit=()=>{
        let imgName=this.state.Image;
        this.setState({
            finalImage: imgName,
            status:"reset"
        });
        
    };

    render(){
        return(
            <section className='app'>
                <section id="headSection">
                    <section className='heading'>
                        Search You Favourite Image
                    </section>
                    <section className='inputSection'>
                        <input onChange={this.handleChange} id="searchBar" type='text' name='image' placeholder='Search for images'/>
                        <button onClick={this.handleSubmit} id="Searchbtn" type='submit'>Search</button>
                    </section>
                </section>
                <Cardcomponent Image={this.state.finalImage} status={this.state.status}  clientId={this.props.clientId} baseUrl={this.props.baseUrl}/>
            </section>
        );
    }
}
export default Headercomponent;