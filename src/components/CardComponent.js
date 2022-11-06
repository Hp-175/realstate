import React,{Component} from 'react';
import { Modal,ModalBody,ModalHeader} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../styles/CardStyles.css';
import 'font-awesome/css/font-awesome.min.css';


class Cardcomponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Image:"random",
            result:[],
            page:1,
            isModalOpen:false,
            ImageData:{}
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.resetPage=this.resetPage.bind(this);
        this.incPage=this.incPage.bind(this);
        this.incPhotos=this.incPhotos.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.changesValues=this.changesValues.bind(this);
        this.downloadImage=this.downloadImage.bind(this);
    }
    componentDidMount() {
        window.addEventListener('load', this.handleSubmit);
        window.addEventListener("scroll", this.onScroll, false);
     }
     componentDidUpdate() {
        if (this.props.Image!=this.state.Image) {
            this.setState({
                Image: this.props.Image
            },this.handleSubmit);
        }
      }
     downloadImage = (urls) => {    
        axios({
            url:urls,
            method:'GET',
            responseType:'blob'
        })
        .then((response)=>{
            const url=window.URL.createObjectURL(new Blob([response.data]));
            const link =document.createElement('a');
            link.href=url;
            link.setAttribute('download', 'image.jpg');
           
            document.body.appendChild(link);
            link.click();
        })
      };
      
      componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll, false);
      }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    
      onScroll = (event) => {
        let node = event.target;
        const bottom = node.scrollHeight - node.scrollTop === node.clientHeight;
        let body = document.body,
        html = document.documentElement;

        let height = Math.max( body.scrollHeight, body.offsetHeight,html.clientHeight, html.scrollHeight, html.offsetHeight );
        if (height-1300<=window.pageYOffset) {
          this.incPhotos();
          
        }
      };
    handleChange=(Event)=>{
        this.setState({
            Image: Event.target.value
        });
    };
    resetPage=()=>{
        this.setState({
            page:1
        });
    };
    incPage=()=>{
        var inc=this.state.page+1;
       
        this.setState({
            page:Number(inc)
        });
    };
    handleSubmit=()=>{
        this.resetPage();
        const url = this.props.baseUrl+"1&per_page=10&query="+JSON.stringify(this.state.Image) + "&client_id=" +this.props.clientId;
        
        axios.get(url).then((response) => {
            this.setState({
                result:response.data.results
            });
        });
    };
    incPhotos=()=>{
        this.incPage();
        const url = this.props.baseUrl+this.state.page+"&per_page=10&query="+JSON.stringify(this.state.Image) + "&client_id=" +this.props.clientId;
       
        axios.get(url).then((response) => {
            let curData=this.state.result.concat(response.data.results);
            let mapIt={};
           
           let changeIt=[];
            for(let i in curData)
            {
                if(curData[i].id in mapIt)
                continue;
                changeIt.push(curData[i]);
                mapIt[curData[i].id]=1;

            }
            
            
            this.setState({
                result:changeIt
            });
        });
    };
   

    changesValues=(image)=>{
        let ob={};
        ob.id=image.id;
        ob.updated=image.updated_at;
        ob.description=image.description;
        ob.alt_description=image.alt_description;
        ob.download=image.urls.full;
        ob.likes=image.likes;
        ob.firstname=image.user.first_name;
        ob.lastname=image.user.last_name;
        
        ob.url=image.urls.regular;
        this.setState({
            ImageData:ob
        });
        this.toggleModal();
    }
    render(){
        return(
            <section className='app'>
               
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader className='Modalhead'>
                        <span>{this.state.ImageData.firstname+' '+this.state.ImageData.lastname}</span>
                    </ModalHeader>
                    <ModalBody className='modalbody'>
                        <img src={this.state.ImageData.url} alt={this.state.ImageData.alt_description} width='100%'/>
                        <i className='fa fa-heart fa-lg'></i><span id="likes">{this.state.ImageData.likes}</span>
                        <span id='downloadButton' onClick={()=> this.downloadImage(this.state.ImageData.download)} ><i className='fa fa-download fa-lg'></i></span>
                        <section>
                            <strong>&nbsp;&nbsp;Description: </strong>{this.state.ImageData.description!=null?<span>{this.state.ImageData.description}</span>:<span>No Description Available</span>}
                        </section>
                        <section>
                            <strong>&nbsp;&nbsp;Last Updated: </strong>{this.state.ImageData.updated}
                        </section>
                    </ModalBody>
                </Modal>
                <section className='alignment'>
                    {
                        
                        this.state.result.map((image)=>{
                            return (
                                <section key={image.id}>
                                    <section className="card" id={"image"+image.id} onClick={() => this.changesValues(image)}>
                                        <img src={image.urls.regular} alt={image.alt_description} width="100%"/>
                                        <div className="capt"><span className="bottom-center">{this.state.Image}</span></div>
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
