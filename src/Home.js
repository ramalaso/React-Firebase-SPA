import React, { Component } from 'react'

export class Home extends Component {
   
    render() {
        const { user } = this.props;
        return (
            <div>
                <div className="container text-center">
                    <div className="row justify-content-center">
                        Hello {user}
                        <div className="col-10 col-md-10 col-lg-8 col-xl-7">
                        <div className="display-4 text-primary mt-3 mb-2" >
                            Meeting Log
                        </div>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore commodi accusamus, recusandae consequatur incidunt quo beatae ducimus quidem ab unde officiis voluptate! Enim laborum, quo consequuntur eos eum eligendi dolorem quaerat aut magni reprehenderit quas ex. A veritatis maxime repellat! Reprehenderit sit dicta voluptate, nihil sequi vel laborum temporibus aliquam minima non ex quaerat deleniti animi ea molestias consectetur doloremque neque nulla et error! Facere obcaecati nostrum aut, laboriosam alias quae corporis quasi ea repellat repellendus explicabo voluptatum odit impedit sunt nihil consequuntur ex numquam maiores, officiis id maxime quos inventore? Temporibus deleniti officia cupiditate, labore dolor in tempora. It is a practical way to learn React with Firebase
                        </p>
                        {
                            user == null && (
                                <span>
                                    <a href="/register" className="btn btn-outline-primary mr-2 px-5">Register</a>
                                    <a href="/login" className="btn btn-outline-primary mr-2 px-5">Login</a>
                                </span>
                            )
                        }
                        {
                            user && (
                                <a href="/meetings" className="btn btn-primary px-5">Meetings</a>
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
