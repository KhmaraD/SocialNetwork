import React from "react";
import styles from "./Preloader.module.css"
import preloader from "./../../../assets/images/preloader.svg"

let Preloader = (props) => {
    return (
        <div>
            <img src={preloader} />
        </div>
    )
}

export default Preloader;