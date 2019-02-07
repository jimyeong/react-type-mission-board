import * as React from 'react';

interface IpropsData{

}



class Modal extends React.Component{

    public render(){
        return(

            <div className="modal">
                <div className="modal-inner">
                    <div className="title-area clearfix">
                        <h3 className="user-tit">asd</h3>
                        <div className="close-wrap">
                            <button className="btn-close" id="closebtn">
                                <span className="close-stick"/>
                                <span className="close-stick"/>
                            </button>
                        </div>
                    </div>
                        <p className="user-phone">asd</p>
                        <p className="user-position">asdd</p>
                        <p className="user-position">asd</p>
                </div>
            </div>
        )
    }
}


export default Modal;