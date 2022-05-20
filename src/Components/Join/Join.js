import React from 'react'

const join = () => {
    return (
        <div>
            <div className="join__wrap">
            <div className="container join-text mb-5">
                <p className='join-heading text-center p-4' >To provide your support to our mission of a secular.</p>
            </div>
            <form className='container joinForm'>
                <div class="row container">
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="First Name*" />
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Last Name*" />
                    </div>
                </div>
                <div class="row container">
                    <div class="col-md-6 flex">
                        <div className=" col-md-10 mx-0 p-0">
                            <input type="number" class="form-control" placeholder="Phone No*" />
                        </div>
                        <div className="col-xs-col-md-2">
                            <button className='btn btn-submit'>Verify</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <input type="number" class="form-control" placeholder="Enter OTP*" />
                    </div>
                </div>
                <div class="row container mb-5">
                    <div class="col-md-6">
                        <input type="email" class="form-control" placeholder="Email*" />
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Pin Code*" />
                    </div>
                </div>
                <div class="row container mb-5">
                    <textarea name="Message" id='' placeholder="What's in your Mind..." class="form-control mx-2 message" rows="1"></textarea>
                </div>
                <div className="row container mx-1">
                <input type="checkBox" name="" value='' id="" /> <span className='checktext'>Yes, I would like to receive messages.</span>
                </div>
                <div className="send__btn">
                <button type='submit' className='mx-3 btn btn-primary mb-5 my-3'>Submit</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default join