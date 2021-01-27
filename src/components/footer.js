import React from 'react'
export default class Footer extends React.Component {
    // constructor() {
    //     var noti = document.querySelecter('li');
    //     var select = document.querySelecter('.select');
    //     var button = document.getElementsByTagName('button');
    //     for(but of button){
    //         but.addEventListner('click',(e)=>{ 
    //             var  add = Number(noti.getAttribute('data-count')||0);
    //             noti.setAttribute('data-count',add + 1)
    //             noti .classList.add('zero');
    //             var parent = e.target.parentNode;
    //             var clone = parent .clone(true);
    //             select.appendChild.innerText = "Buy-now";
    //             if(clone){
    //                 noti.onclick = ()=>{
    //                     select.classList.toggle('display');
    //                 }
    //             }
    //             var image = e.target.parentNode.querySelecter('image');
    //             var span = e.target.parentNode.querySelecter('span');
    //             var S_image = image.cloneNode(false);
    //             span.appendChild(S_image);
    //             span.classList.add('active');
    //             setTimeout(()=>{
    //                 span.removeChild(s_image);
    //                 span.classList.remove('active');
    //             },500);
    //         })
    //     }
    //   }
    render(){
        return (
            <footer className="section-footer mt-5">
                <div className="container">
                    <p className="text-center"> 
                        &copy; Copyright 2021 All rights reserved
                    </p>
                </div>
            </footer>
        )
    }
}