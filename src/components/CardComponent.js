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
            Property:'All',
            data:realestate
        }
        this.process=this.process.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
    }
    process(date){
        var parts = date.split("/");
        var date = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        return date.getTime();
     }
     handleUpdate(){
        const date=new Date();
        let add=0;
        let new_date=date;
        if(this.state.Time!='All')
        add=parseInt(this.state.Time);
        
        new_date.setDate(new_date.getDate()+add);
        new_date=new_date.getDate()+'/'+(new_date.getMonth()+1)+'/'+new_date.getFullYear();
        let new_list=[]
        for(let properties in realestate)
        {
            let property=realestate[properties]
            
            let mi=parseInt(this.state.Price.substring(0,this.state.Price.indexOf('-'))),ma=parseInt(this.state.Price.substring(this.state.Price.indexOf('-')+1,this.state.Price.length));
            
            if(this.state.location!='All'&&property.location!=this.state.location)
            continue;
            
            if(this.state.Time!='All'&&this.process(property.from_date) > this.process(new_date))
            continue;
            
            if(this.state.Price!='All')
            {
                if(parseInt(property.price)<mi||parseInt(property.price)>ma)
                continue;
            }
            
            if(this.state.Property!='All'&&property.property!=this.state.Property)
            continue;
            
            new_list.push(property);
        }
        
        this.setState({
            data:new_list
        });
     }
    componentDidUpdate(){
        if(this.props.location!=this.state.location||this.props.Time!=this.state.Time||this.props.Price!=this.state.Price||this.props.Property!=this.state.Property)
        {
            this.setState({
                location: this.props.location,
                Time:this.props.Time,
                Price:this.props.Price,
                Property:this.props.Property,
            },this.handleUpdate);
        }
    }
    render(){
        return(
            <section className='app'>
               <section className='alignment'>
                    {
                        this.state.data.map((image)=>{
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
