import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/HeaderStyles.css';
import 'font-awesome/css/font-awesome.min.css';
import { Dropdown, DropdownToggle,
        DropdownMenu, DropdownItem } from 'reactstrap';
import Cardcomponent from './CardComponent';

class Headercomponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dropdownLocation:false,
            dropdownTime:false,
            dropdownPrice:false,
            dropdownProperty:false,
            
            location:'Location',
            Time:'When',
            Price:'Price',
            property:'Property Type',
            
            locationval:'All',
            Timeval:'All',
            Priceval:'All',
            propertyval:'All',
            
            finallocationval:'All',
            finalTimeval:'All',
            finalPriceval:'All',
            finalpropertyval:'All'
        };
        this.locationselected=this.locationselected.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.toggle=this.toggle.bind(this);
        this.toggletime=this.toggletime.bind(this);
        this.toggleprice=this.toggleprice.bind(this);
        this.toggleproperty=this.toggleproperty.bind(this);
    }

    handleSubmit=()=>{
        this.setState({
            finallocationval: this.state.locationval,
            finalTimeval:this.state.Timeval,
            finalPriceval:this.state.Priceval,
            finalpropertyval:this.state.propertyval,
        })
    };
    toggle() {
        this.setState(prevState => ({
            dropdownLocation: !prevState.dropdownLocation,
            dropdownTime: false,
            dropdownPrice: false,
            dropdownProperty: false
        }));
      }
      toggletime() {
        this.setState(prevState => ({
            dropdownTime: !prevState.dropdownTime,
            dropdownLocation: false,
            dropdownPrice: false,
            dropdownProperty: false
        }));
      }
      toggleprice() {
        this.setState(prevState => ({
            dropdownPrice: !prevState.dropdownPrice,
            dropdownLocation: false,
            dropdownTime: false,
            dropdownProperty: false
        }));
      }
      toggleproperty() {
        this.setState(prevState => ({
            dropdownProperty: !prevState.dropdownProperty,
            dropdownLocation: false,
            dropdownTime: false,
            dropdownPrice: false
        }));
      }


      locationselected = (sender) => {
        this.setState({
            location: sender.currentTarget.getAttribute("data"),
            locationval: sender.currentTarget.getAttribute("dropDownValue")
        })
    }

    timeselected = (sender) => {
        this.setState({
            Time: sender.currentTarget.getAttribute("data"),
            Timeval: sender.currentTarget.getAttribute("dropDownValue")
        })
    }

    priceselected = (sender) => {
        this.setState({
            Price: sender.currentTarget.getAttribute("data"),
            Priceval: sender.currentTarget.getAttribute("dropDownValue")
        })
    }

    typeselected = (sender) => {
        this.setState({
            property: sender.currentTarget.getAttribute("data"),
            propertyval: sender.currentTarget.getAttribute("dropDownValue")
        })
    }

    render(){
        return(
            <section className='app'>
                <section id="headSection">
                    <section className='heading'>
                        Find Your Favourite Property
                    </section>
                    <section className='inputSection'>
                        <Dropdown isOpen={this.state.dropdownLocation} onClick={this.toggle}>
                            <DropdownToggle caret>{this.state.location}</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem className='dropItems' dropDownValue="All" data="All Cities" onClick={this.locationselected}>All Cities</DropdownItem>
                                <DropdownItem className='dropItems' dropDownValue="Bangalore" data="Bangalore" onClick={this.locationselected}>Bangalore</DropdownItem>
                                <DropdownItem className='dropItems' dropDownValue="Mumbai" data="Mumbai" onClick={this.locationselected}>Mumbai</DropdownItem>
                                <DropdownItem className='dropItems' dropDownValue="Hyderabad" data="Hyderabad" onClick={this.locationselected}>Hyderabad</DropdownItem>
                                <DropdownItem className='dropItems' dropDownValue="Kolkata" data="Kolkata" onClick={this.locationselected}>Kolkata</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={this.state.dropdownTime} onClick={this.toggletime}>
                            <DropdownToggle caret>{this.state.Time}</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem className='dropItems' dropDownValue="All" data="Any Time" onClick={this.timeselected}>Any Time</DropdownItem>
                                <DropdownItem className='dropItems' dropDownValue="15" data="After 15 days" onClick={this.timeselected}>After 15 days</DropdownItem>
                                <DropdownItem className='dropItems' dropDownValue="30" data="After 1 month" onClick={this.timeselected}>After 1 month</DropdownItem>
                                <DropdownItem className='dropItems' dropDownValue="60" data="After 2 months" onClick={this.timeselected}>After 2 months</DropdownItem>
                                <DropdownItem className='dropItems' dropDownValue="90" data="After 3 months" onClick={this.timeselected}>After 3 months</DropdownItem>
                                <DropdownItem className='dropItems' dropDownValue="180" data="After 6 months" onClick={this.timeselected}>After 6 months</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={this.state.dropdownPrice} onClick={this.toggleprice}>
                            <DropdownToggle caret>{this.state.Price}</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem className='dropItems' dropDownValue="All" data="All Price" onClick={this.priceselected}>All Price</DropdownItem>
                                <DropdownItem className='dropItems' dropDownValue="0-100" data="Upto $100" onClick={this.priceselected}>Upto $100</DropdownItem>
                                <DropdownItem className='dropItems' dropDownValue="100-200" data="$100  - $200" onClick={this.priceselected}>$100  - $200</DropdownItem>
                                <DropdownItem className='dropItems' dropDownValue="200-300" data="$200  - $300" onClick={this.priceselected}>$200  - $300</DropdownItem>
                                <DropdownItem className='dropItems' dropDownValue="300-1000" data="$300  - $1000" onClick={this.priceselected}>$300  - $1000</DropdownItem>
                                <DropdownItem className='dropItems' dropDownValue="1000-2000" data="$1000 - $2000" onClick={this.priceselected}>$1000 - $2000</DropdownItem>
                                <DropdownItem className='dropItems' dropDownValue="2000-20000" data="more than $2000" onClick={this.priceselected}>more than $2000</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={this.state.dropdownProperty} onClick={this.toggleproperty}>
                            <DropdownToggle caret>{this.state.property}</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem className='dropItems' dropDownValue="All" data="All Types" onClick={this.typeselected}>All Types</DropdownItem>
                                <DropdownItem className='dropItems' dropDownValue="Duplex" data="Duplex" onClick={this.typeselected}>Duplex</DropdownItem>
                                <DropdownItem className='dropItems' dropDownValue="2-BHK" data="2-BHK" onClick={this.typeselected}>2-BHK</DropdownItem>
                                <DropdownItem className='dropItems' dropDownValue="3-BHK" data="3-BHK" onClick={this.typeselected}>3-BHK</DropdownItem>
                                <DropdownItem className='dropItems' dropDownValue="4-BHK" data="4-BHK" onClick={this.typeselected}>4-BHK</DropdownItem>
                                <DropdownItem className='dropItems' dropDownValue="Villa" data="Villa" onClick={this.typeselected}>Villa</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <button onClick={this.handleSubmit} id="Searchbtn" type='submit'>Filter</button>
                    </section>
                </section>
                <Cardcomponent location={this.state.finallocationval} Time={this.state.finalTimeval}  Price={this.state.finalPriceval} Property={this.state.finalpropertyval}/>
            </section>
        );
    }
}
export default Headercomponent;