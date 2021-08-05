import React from "react";
import "../index.css";
import "./add.css";
import { Link } from "react-router-dom";

function TasksList({ data }) {
    return (
        <div className="box_invoice">
            <div className="block_invoice">
                <div className="field">TITLE</div>
                <div className="field">DESCRIPTION</div>
                <div className="field1">PRIORITY</div>
                <div className="field">STATUS</div>
            </div>

            {data.map((value, key) => {
                return getList(value, key);
            })}
        </div>
    );
}



const getList = (value, key) => {

    function handleSubmit(id) {

        let result = fetch('http://127.0.0.1:8000/api/delete/' + id, {
            method: "DELETE"
        })
        console.warn(result)

    }
    return (
        <div key={key} className="data">
            <div className="data-invoices data-date">{value.title}</div>
            <div className="data-invoices">{value.description}</div>
            {value.priority === "Low" && (
                <React.Fragment>
                    <div className="data-invoices" id="low">${value.priority}</div>

                </React.Fragment>
            )}

            {value.priority === "High" && (
                <React.Fragment>
                    <div className="data-invoices" id="hi">${value.priority}</div>

                </React.Fragment>
            )}

            {value.priority === "Medium" && (
                <React.Fragment>
                    <div className="data-invoices" id="med">${value.priority}</div>

                </React.Fragment>
            )}
            <div className="data-details">

                <div className="data-invoices" id="btn_">  <Link to={"edit/" + value.id}><span className="edit">EDIT</span></Link></div>

                <dive className="view"><span onClick={() => handleSubmit(value.id)} className={"delete"}
                >DELETE!</span></dive>



            </div>

        </div>
    );
};


export default TasksList;
