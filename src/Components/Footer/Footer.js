import React from 'react'
import '../Style.css';



const Footer = () => {
    return (
        <>
            <section className="full-footer">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="media-icon flex footer-flex">
                                <div className="bx border">
                                    <span className='fa fa-facebook'></span>
                                </div>
                                <div className="bx border">
                                    <span className='fa fa-twitter'></span>
                                </div>
                                <div className="bx border">
                                    <span className='fa fa-youtube'></span>
                                </div>
                                <div className="bx border">
                                    <span className='fa fa-google-plus'></span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 my-4">
                            <p className='copyright'>Copyright &copy; 2022 Ex admin <br />
                                All Rights Reserved.</p>
                            <span>Terms and Conditions | Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer