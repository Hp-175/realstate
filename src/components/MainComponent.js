import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Headercomponent from './HeaderComponent';

class Main extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <section className='app'>
                <Headercomponent />
            </section>
        );
    }
}

export default Main;