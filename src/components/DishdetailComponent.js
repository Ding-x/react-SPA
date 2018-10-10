import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';


function RenderComment({comments}){
    console.log(comments);
      
        if (comments != null)
            return(
                    <div  className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {comments.map((comment)=>{
                            return(
                                <div key={comment.id} className="container">
                                    <div>{comment.comment}</div>
                                    <p><span>--{comment.author},</span><span>{comment.date}</span></p>   
                                </div>
                            )
                        })}
                    </div>
            );
        else
            return(
                <div></div>
            );
    }


    function RenderDish({dish}) {
        if (dish != null)
            return(
                    <div  className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
            );
        else
            return(
                <div></div>
            );
    }

    const Dishdetail = (props) => {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComment comments={props.comments}/>
                </div>
            </div>
        );
    }
export default Dishdetail;