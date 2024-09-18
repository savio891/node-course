import React from "react";
import { Link } from "react-router-dom";

export default props =>
    <div>
         <Link to={props.link}>
            <i className={`fa fa-${props.icon}`}></i> {props.content}
        </Link>
    </div>