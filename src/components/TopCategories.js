import React from 'react'
import {Dropdown} from 'react-bootstrap';
import { base_url,image_url } from './config';
import CatImage from '../assets/images/menu-top.png';
export default class TopCategories extends React.Component {
    constructor() {
        super();
        this.state = {categories: [] ,activeLink: null};
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(checked) {
        // this.setState({ checked,categories: {} }); 
    }
    handleClick(e) {
        this.setState({ activeLink : e.id });
    }
    componentDidMount() {
        fetch(base_url + 'api/v1/category', {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'GET',
          }).then(response => response.json()).then(response => { 
              this.setState({ categories : response.data });
          })
          .catch(err => console.log(err))
      }
    render(){
        function get_image_url(url){
            if(typeof url =='object')
                return CatImage;
            else
                return image_url + url;
        }
        // const { activeLink } = this.state;
        return (
                <div className="sidebar-top BB">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="p-catageory">
                                    <ul className="ul-sidebar catgory-list d-flex text-center">
                                        {this.state.categories.map((category, i) => {
                                            return<li className="ul-sidebar-item catgory-list Dorpdown d-block" onMouseEnter={this.handleClick.bind(this, category)} onMouseLeave={this.handleClick.bind(this, {id : 0})}>
                                                <div className="cat-img text-center">
                                                 <img src={get_image_url(category.image)} alt="cat-img" className="img__size img-fluid" />
                                                </div>
                                                {category.title}
                                                <span className="li-icon d-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16px">
                                                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" fill="currentColor" stroke="currentColor">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <ul className={this.state.activeLink == category.id ? 'collapse show' : 'collapse'} onMouseEnter={this.handleClick.bind(this, category)}>
                                                    {category.sub_categories.map((sub_category, i) => {
                                                        return<li className="sub-cat text-capitalize">{sub_category.title.toUpperCase()}
                                                        </li>
                                                    })}
                                                
                                                </ul>
                                            </li>  
                                        })}
                                    </ul>                                                                          
                                </div>
                            </div>     
                        </div>
                    </div>
                </div>
            )
        }
    }