import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CardStyles.css';
import 'font-awesome/css/font-awesome.min.css';
import {realestate} from '../shared/data';



class Cardcomponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            location:'All',
            Time:'All',
            Price:'All',
            Property:'All'
        }
    }
    componentDidUpdate(){
        if(this.props.location!=this.state.location||this.props.Time!=this.state.Time||this.props.Price!=this.state.Price||this.props.Property!=this.state.Property)
        {
            this.setState({
                location: this.props.location,
                Time:this.props.Time,
                Price:this.props.Price,
                Property:this.props.Property,
            });
        }
    }
    render(){
        return(
            <section className='app'>
               <section className='alignment'>
                    {
                        realestate.map((image)=>{
                            return (
                                <section key={image.pic_name}>
                                    <section className="card" id={"image"+image.pic_name} >
                                        <img src={require('../Images/'+image.property+'/'+image.pic_name)} alt={image.pic_name} width="100%"/>
                                        <section className='bottom_section'>
                                            <section className='fist_line'>
                                                <span className='price'>${image.price}/month</span>
                                                <span className='date'>Available From {image.from_date}</span>
                                            </section>
                                            <section className='second_line'>
                                                <span>{image.location}</span>
                                            </section>
                                            <section className='third_line'>
                                                <span className='home'><i class="fa fa-solid fa-home"></i> {image.property}</span>
                                                <span className='bed'><i class="fa fa-light fa-bed"></i> {image.beds} Beds</span>
                                                <span className='bathroom'><i class="fa fa-regular fa-bath"></i> {image.bathroom} Bathroom</span>
                                            </section>
                                        </section>
                                        </section>
                                </section>
                            );
                        })
                    }
                </section>
            </section>
        );
    }
}
export default Cardcomponent;
