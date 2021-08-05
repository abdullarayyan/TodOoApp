import Header from "./Header";
import React, { useEffect } from "react";
import "../index.css";
import "./add.css";
import { Nav, Table } from "react-bootstrap";
import { useState } from "react";
import TasksList from "./TasksList";
import { useHistory, useParams } from "react-router-dom";
import { Search } from "react-bootstrap-icons";

const AddTask = ({ data }) => {
    const history = useHistory();

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("High")

    const [dd, setData] = useState([])

    const getData = async () => {
        let result = await fetch('http://127.0.0.1:8000/api/list/');
        result = await result.json();
        setData(result)
    }
    console.warn("result", dd)

    useEffect(() => {
        getData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataTask = { title, description, priority };

        fetch('http://127.0.0.1:8000/api/add/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataTask)
        }).then(() => {
            localStorage.setItem("user-info", JSON.stringify(dataTask))
            getData()
            history.push('/');
        })

        //   console.log(data,"adkjkjafjkf")


    }
    const [info, setInfo] = useState([])

    async function search(key) {
        console.warn(key)
        let result = await fetch("http://127.0.0.1:8000/api/search/" + key);
        result = await result.json();
        setInfo(result)

    }



    return (
        <React.Fragment>
            <Header />
            <div className="form1">
                <Nav className="card1">
                    <div className="search">
                        <h1 id="h">Add Task</h1>
                        <input className={'desc1'}
                            id='txtDesc'
                            placeholder={'Search'}
                            type={'text'}
                            onChange={(e) => search(e.target.value)}
                        />
                        <div className="ic"><Search /></div>


                    </div>
                    <div>
                    </div>

                </Nav>

                <div className="box_invoice">
                    <div className="block_invoice">
                        {/* <div className="field">TITLE</div>
                        <div className="field">DESCRIPTION</div>
                        <div className="field1">PRIORITY</div>
                        <div className="field">STATUS</div> */}
                    </div>

                    {info.map((value, key) => {
                        return getList(value, key);
                    })}
                </div>

                <div className="card2">
                    <div className="form">
                        <input className={'title'}
                            id='txtTitle'
                            placeholder={'Title'}
                            type={'text'}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <div className={"col"}>
                            <input className={'desc'}
                                id='txtDesc'
                                placeholder={'Description'}
                                type={'text'}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="col">
                            <select id={"selPriority"} className={'form-in'}
                                onChange={(e) => setPriority(e.target.value)}
                            >
                                <option value={'High'}>High</option>
                                <option value={'Medium'}>Medium</option>
                                <option value={'Low'}>Low</option>
                            </select>
                        </div>
                        <div className={"col"}>
                            <button
                                className={'button'}
                                onClick={handleSubmit}
                            >Add Task</button>
                        </div>
                    </div>

                </div>
                <TasksList data={data} />



            </div>



        </React.Fragment>
    );
}

const getList = (value, key) => {

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

        </div>
    );
};


export default AddTask;