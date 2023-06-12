import React from 'react';
import './home.css'



const Login = () => {


    return (
        <div>
            <div className="container signin-container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label for="formFile" className="form-label">Main image</label>
                            <div className="uploaded-image"></div>
                        </div>
                        <div className="mb-3">
                            <input className="form-control" type="file" id="formFile" />
                        </div>

                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputDescription" className="form-label">Description</label>
                                <textarea className="form-control t-area" name="Message Body" rows="7" cols="30"
                                    placeholder="Description"></textarea>
                            </div>
                        </form>
                    </div>

                </div>
                <hr />
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2">
                        <button type="submit" className="btn btn-warning">Mint</button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Login;