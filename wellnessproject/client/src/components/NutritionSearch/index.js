import React from "react";
import IndexPageOne from "../SearchIndexOne";
import IndexPageTwo from "../SearchIndexTwo";
import IndexPageThree from "../SearchIndexThree";
import NutritionStart from "../NutritionStart";
import "./style.css"

function NutritionBegin(){
    return(
        <div className="main">
            <div className="row areaone">
                <div className="col-md-12">
                    <h1>Hello</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <NutritionStart/>
                </div>
                <div className="col-md-3">
                    <IndexPageTwo/>
                </div>
                <div className="col-md-9">
                    <IndexPageThree/>
                    <IndexPageOne/>
                </div>
            </div>
        </div>
  


    )
}

export default NutritionBegin;