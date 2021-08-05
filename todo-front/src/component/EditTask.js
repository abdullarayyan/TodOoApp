import React, { useState, useEffect } from "react";
import SlidingPane from "react-sliding-pane"
import "./add.css"
import { withRouter } from "react-router";
import { Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const EditTask = (props) => {
  console.warn("props", props.match.params.id)
  const [data, setData] = useState([])
  useEffect(async () => {
    let result = await fetch("http://127.0.0.1:8000/api/task/" + props.match.params.id)
    result = await result.json();
    setData(result)
  })
  const history = useHistory();

  function onEdit() {
    history.push('/');

  }

  const [state, setState] = useState({
    isPaneOpen: true,
    isPaneOpenLeft: true,
  });

  return (
    <div>
      <span className="edit" onClick={() => setState({ isPaneOpenLeft: true })}>
        Edit
      </span>
      <SlidingPane


        isOpen={state.isPaneOpenLeft}
        title="Update Taskiee!"
        from="right"
        width="100%"
        onRequestClose={() => setState({ isPaneOpenLeft: true })}

      >
        <div className="form1">
          <Nav className="card1">
            <h1 id="h">Add Task</h1>
          </Nav>
          <div className="card2">
            <div className="form">
              <input className={'title'}
                id='txtTitle'
                placeholder={'Title'}
                type={'text'}
                defaultValue={data.title}
              // onChange={(e) => setTitle(e.target.value)}
              />

              <div className={"col"}>
                <input className={'desc'}
                  id='txtDesc'
                  placeholder={'Description'}
                  type={'text'}
                  defaultValue={data.description}

                // onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="col">
                <select id={"selPriority"} className={'form-in'}
                  defaultValue={data.priority}

                // onChange={(e) => setPriority(e.target.value)}
                >
                  <option value={'High'}>High</option>
                  <option value={'Medium'}>Medium</option>
                  <option value={'Low'}>Low</option>
                </select>
              </div>
              <div className={"col"}>
                <button
                  className={'button'}
                  // onSubmit={  onEdit() }
                  onChange={onEdit}
                >Edit</button>
              </div>
            </div>

          </div>
        </div>
      </SlidingPane>
    </div>
  );

}

export default withRouter(EditTask)