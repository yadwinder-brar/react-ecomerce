import React from 'react'
import { Link} from 'react-router-dom'
import img from '../assets/images/singlepro1.jpeg';
import img1 from '../assets/images/singlepro2.jpeg';
import img2 from '../assets/images/singlepro3.jpeg';
import img3 from '../assets/images/singlepro7.jpeg';
import img4 from '../assets/images/singlepro5.jpeg';
import img5 from '../assets/images/singlepro6.jpeg';
import img11 from '../assets/images/singlepro11.jpeg';
import shoes from '../assets/images/abcs.jpeg';
import shoes1 from '../assets/images/shoes4.jpeg';
import shoes2 from '../assets/images/shoes3.jpeg';
import shoes3 from '../assets/images/shoes22.jpeg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Row,Col,Container,Form,} from 'react-bootstrap';
import { base_url,image_url } from './config';

export default class  extends React.Component {
    constructor() {
        super();
        this.state = {product: {
            "id":4,
            "uuid":"8bdab2a1-21db-485b-803c-fa73a8b96505",
            "user_id":1,
            "cate_id":2,
            "sub_cate_id":5,
            "sub_child_cate_id":9,
            "brand_id":1,
            "product_name":"Donna",
            "product_uri":"Donna-1612269713",
            "description":"Gold juttis, highlighted with hand-embroidered, tone-on-tone sequin and zari work. The base of these juttis features, a dull-gold silk fabric. This pair has a minimalist aesthetic with an abstract design, making it the perfect shoe that would go with almost anything and everything.\r\n\r\n \r\n\r\nStyle Tip: Wear our Donna juttis with any of your bright coloured outfits to soften the whole look a bit. Add a gold clutch and complete the look.\r\n\r\nOuter Materials : Silk\r\n\r\nInner Materials : Genuine Leather\r\nColor : Gold\r\nCare : Dry Clean only.If the shoe gets wet, remember to first dry in the sun before putting it back in the closet.\r\nType of Work: Zari & Sequin Work \r\n\r\nShipping:This product will ship in 3-5 days\r\n\r\nAdditional Comment: Each pair is uniquely handcrafted hence no 2 shoes will be 100% alike. Embellishments are delicate and may fall off with wear & tear.\r\n\r\nAll Coral Haze designs are created from scratch with the utmost originality, authenticity and love. Imitations are unavoidable, but also a form of flattery.",
            "image":"",
            "image_path":"",
            "tags":"[\"punjabijutti\",\"traditional\"]",
            "model_number":"212",
            "logistics":566,
            "product_type":"footwear",
            "created_at":"2021-02-02T12:34:01.000000Z",
            "updated_at":"2021-02-02T12:41:53.000000Z",
            "isActive":1,
            "sgst":10,
            "cgst":10,
            "deleted_at":null,
            "price":2200,
            "selling_price":1800,
            "base_price":0,
            "isFeatured":0,
            "isHotDeal":0,
            "isDealOfTheDay":0,"images_details":[
{
"id":1,
"uuid":"0c499648-659a-4b74-98ce-0f7717b5fd6a",
"product_id":1,
"image":"productsImages\/ke3nb0Zh4VqVIozLhQG4QCPqiuQFICbxT8MZym2W.jpg",
"created_at":"2021-02-02T10:13:57.000000Z",
"updated_at":"2021-02-02T12:36:46.000000Z"
},
{
"id":2,
"uuid":"5fbc6e91-8138-4890-b425-93d01762de26",
"product_id":1,
"image":"productsImages\/wmbnhk27Cb2aTWCAh47BVmNPu2BpZoxZlt9UaS1A.jpg",
"created_at":"2021-02-02T10:13:57.000000Z",
"updated_at":"2021-02-02T10:13:57.000000Z"
},
{
"id":3,
"uuid":"1ee3111e-d27c-434f-82b4-0a9009766164",
"product_id":1,
"image":"productsImages\/FiIqWkXQ5JW4WcKjGUSIZoHptDlhlr6m8d9IOhxT.jpg",
"created_at":"2021-02-02T10:33:15.000000Z",
"updated_at":"2021-02-02T10:33:15.000000Z"
}
],
            "product_details":[
            {
            "id":3,
            "product_id":4,
            "qty":13,
            "color":"[\"1\",\"2\",\"3\",\"4\",\"5\",\"6\"]",
            "size":"5",
            "isStock":1,
            "created_at":"2021-01-29T07:23:48.000000Z",
            "updated_at":"2021-01-29T07:23:48.000000Z"
            },
            {
            "id":55,
            "product_id":4,
            "qty":10,
            "color":"[\"3\"]",
            "size":"10",
            "isStock":1,
            "created_at":"2021-02-02T12:34:01.000000Z",
            "updated_at":"2021-02-02T12:41:53.000000Z"
            }
            ],
            "category_details":[
            {
            "id":2,
            "uuid":"2c17d218-6c9e-4561-b432-9bb2c471eb27",
            "p_category_id":0,
            "p_sub_category_id":0,
            "level":1,
            "title":"womens",
            "product_uri":"womens-1612261672",
            "image":"categoryImages\/82QJXXOSud9TPz2rsNElhAREV6sfkFFMHtnmxy4t.png",
            "isActive":1,
            "created_at":"2021-02-02T10:27:52.000000Z",
            "updated_at":"2021-02-02T10:27:52.000000Z",
            "deleted_at":null
            }
            ],
            "brand_details":[
            {
            "id":1,
            "uuid":"310b8f4b-5655-4c49-9a8c-8ac83ecab661",
            "title":"Jutti",
            "isActive":1,
            "created_at":"2021-01-29T07:18:17.000000Z",
            "updated_at":"2021-01-29T07:18:17.000000Z"
            }
            ]
            } };
    }
    componentDidMount() {
        fetch(base_url + 'api/v1/products_view/'+this.props.match.params.id, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'GET',
          }).then(response => response.json()).then(response => { 
              this.setState({ product : response.data });
              console.log(this.state.product)
          })
          .catch(err => console.log(err))
    }
    render(){
        const settings = {
            arrows:false,
            infinite:true,
            slidesToShow: 5,
            slidesToScroll: 1,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                      slidesToShow: 5,
                      slidesToScroll: 1
                    }
                  },
                  {
                    breakpoint: 1000,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll: 1
                    }
                  },
                {
                breakpoint: 800,
                settings: {
                  arrows:false,
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows:false,
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <>
                <div className="main-outer pb-5">    
                    <Container>
                        <div className="singlepro-main-outer">
                            <div className="singlepro-main bg-white">
                                <Row>
                                    <Col xs={1}>
                                        <div className="single-proimg sidebar">
                                            <div className="bg-img-outer">
                                                <div className="top-img-1 side-img text-center"></div>
                                                {this.state.product.images_details.map((image, i) => { 
                                                    return <div className="side-img text-center" style={{background : `url(`+image_url + image.image+`)`}}></div>
                                                })}  
                                                {/* <div className="top-img-2 side-img text-center"></div> */}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={4}>
                                        <div className="product-fullimg">
                                            <img src={image_url + this.state.product.images_details[0].image} className=" img-fluid full-img" id="myimage" alt=""/>
                                        </div>
                                    </Col>
                                    
                                    <Col xs={7}>
                                        <div className="right-outer p-5">
                                            <div className="right-top1">
                                                <div class="zoom1 d-none">
                                                    <div id="myresult" class="img-zoom-result"></div>
                                                </div>
                                                <div className="brand-name text-capitalize">
                                                    <div className="category-name">
                                                        <h5 className="brand-name text-muted text-capitalize">{this.state.product.product_name}</h5>
                                                        <span className="shoes-type text-capitalize">casual for men</span>
                                                    </div>
                                                    <div className="category-price">
                                                        <div className="price-top">
                                                            <span className="price-top-text text-success">special price</span>
                                                        </div>
                                                        <div className="price-bottom">
                                                            <span className="price-number">₹{this.state.product.selling_price}<del className="old-price text-muted">₹{this.state.product.price}</del></span>
                                                            <span className="off-on-price text-success">45% off</span>
                                                        </div>
                                                    </div>
                                                    <Form>
                                                        <div className="product-color mt-5">
                                                            <h4 className=" text-capitalize text-muted p-3"><h2>{this.props.match.params.id}</h2>select color</h4>
                                                            <div class="color-type">
                                                                <div class="pro-colors d-flex px-3">
                                                                {this.state.product.product_details.map((color, i) => { 
                                                                    return <div class="color-1 pcolor mr-3">
                                                                                <a href="" style={{color:color.color_code}}>
                                                                                    <div class="color-name1"></div>
                                                                                </a>
                                                                                <div class="color__name mt-1 pt-1">
                                                                                    <span>{color.color_string}</span>
                                                                                </div>
                                                                            </div>
                                                                    })}  
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                </div>
                                                
                                            </div>
                                        </div>

                                    </Col>
                                </Row>
                                 <Row>         
                                    <Col xs={5}>
                                        <div className="shoping-button d-flex py-3 text-uppercase">
                                            <div className="left-button w-50 p-1">
                                                <button className="btn btn-danger text-uppercase p-3 w-100">add to cart</button>
                                            </div>
                                            <div className="right-button w-50 p-1">
                                                <button className=" btn btn-warning text-uppercase text-white p-3 w-100">buy now</button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={7}>
                                    <p>{this.state.product.description}</p> 
                                    </Col>
                                </Row>         {/*buttons  html end */}
                            </div>
                        </div>    
                    </Container>
                    <div className="related-product">
                        <Container>    
                            <div className="related-product-inner bg-white mt-5 px-3 pt-3 pb-5">
                                <div className="rp-text">
                                    <h3 className="text-capatilize">Similar Products</h3>
                                </div>
                                <div className="main-top-slider">
                                    <Slider {...settings}>
                                        <div className="slider-item my-3" >
                                            <img height={150} width={150} className="slider-img mx-auto" src={shoes3} />
                                            <div className="d-block text-center">
                                                <div class="pro-cat pro-des mb-1">men shoes</div>
                                                <div class="pro-des pro-prize-range text-success pt-1">starting from 1200</div>
                                                <div class="pro-des pro-brand text-muted pt-1">punjabi jutti</div>
                                            </div>
                                        </div>
                                        <div className="slider-item my-3 " >
                                            <img height={150} width={150} className="slider-img mx-auto" src={shoes1} />
                                            <div className="d-block text-center">
                                                <div class="pro-cat pro-des mb-1">men shoes</div>
                                                <div class="pro-des pro-prize-range text-success pt-1">starting from 1200</div>
                                                <div class="pro-des pro-brand text-muted pt-1">punjabi jutti</div>
                                            </div>
                                        </div>
                                        <div className="slider-item my-3  ">
                                            <img height={150} width={150} className="slider-img mx-auto" src={shoes2} />
                                            <div className="d-block text-center">
                                                <div class="pro-cat pro-des mb-1">men shoes</div>
                                                <div class="pro-des pro-prize-range text-success pt-1">starting from 1200</div>
                                                <div class="pro-des pro-brand text-muted pt-1">punjabi jutti</div>
                                            </div>
                                        </div>
                                        <div className="slider-item my-3 ">
                                            <img height={150} width={150} className="slider-img mx-auto" src={shoes} />
                                            <div className="d-block text-center">
                                                <div class="pro-cat pro-des mb-1">men shoes</div>
                                                <div class="pro-des pro-prize-range text-success pt-1">starting from 1200</div>
                                                <div class="pro-des pro-brand text-muted pt-1">punjabi jutti</div>
                                            </div>
                                        </div>
                                        <div className="slider-item my-3 ">
                                            <img height={150} width={150} className="slider-img mx-auto" src={shoes1} />
                                            <div className="d-block text-center">
                                                <div class="pro-cat pro-des mb-1">men shoes</div>
                                                <div class="pro-des pro-prize-range text-success pt-1">starting from 1200</div>
                                                <div class="pro-des pro-brand text-muted pt-1">punjabi jutti</div>
                                            </div>
                                        </div>
                                        <div className="slider-item my-3">
                                            <img height={150} width={150} className="slider-img mx-auto" src={shoes2} />
                                            <div className="d-block text-center">
                                                <div class="pro-cat pro-des mb-1">men shoes</div>
                                                <div class="pro-des pro-prize-range text-success pt-1">starting from 1200</div>
                                                <div class="pro-des pro-brand text-muted pt-1">punjabi jutti</div>
                                            </div>
                                        </div>
                                        <div className="slider-item my-3">
                                            <img height={150} width={150} className="slider-img mx-auto" src={shoes} />
                                            <div className="d-block text-center">
                                                <div class="pro-cat pro-des mb-1">men shoes</div>
                                                <div class="pro-des pro-prize-range text-success pt-1">starting from 1200</div>
                                                <div class="pro-des pro-brand text-muted pt-1">punjabi jutti</div>
                                            </div>
                                        </div>
                                        <div className="slider-item my-3">
                                            <img height={150} width={150} className="slider-img mx-auto" src={shoes1} />
                                            <div className="d-block text-center">
                                                <div class="pro-cat pro-des mb-1">men shoes</div>
                                                <div class="pro-des pro-prize-range text-success pt-1">starting from 1200</div>
                                                <div class="pro-des pro-brand text-muted pt-1">punjabi jutti</div>
                                            </div>
                                        </div>
                                        <div className="slider-item my-3">
                                            <img height={150} width={150} className="slider-img mx-auto" src={shoes2} />
                                            <div className="d-block text-center">
                                                <div class="pro-cat pro-des mb-1">men shoes</div>
                                                <div class="pro-des pro-prize-range text-success pt-1">starting from 1200</div>
                                                <div class="pro-des pro-brand text-muted pt-1">punjabi jutti</div>
                                            </div>
                                        </div>
                                        <div className="slider-item my-3">
                                            <img height={150} width={150} className="slider-img mx-auto" src={shoes} />
                                            <div className="d-block text-center">
                                                <div class="pro-cat pro-des mb-1">men shoes</div>
                                                <div class="pro-des pro-prize-range text-success pt-1">starting from 1200</div>
                                                <div class="pro-des pro-brand text-muted pt-1">punjabi jutti</div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>

            </>
        )
    }
}