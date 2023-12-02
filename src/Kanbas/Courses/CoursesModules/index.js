import { Dropdown } from 'react-bootstrap';
import { FaCircleCheck, FaEllipsisVertical, FaPlus } from 'react-icons/fa6';
import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from './modulesReducer';
import * as client from "./client";
import {
  findModulesForCourse,
  createModule,
  removeModule,
  editModule,
} from './client';

const CoursesModules = () => {
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const { courseId } = useParams();

  useEffect(() => {
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  return (
    <div class="flex-grow-1" style={{ margin: '20px 30px' }}>
      <div class="d-flex float-end main-content-control">
        <button class="btn" style={{ background: '#eeeeee' }}>
          Collapse All
        </button>
        <button class="btn" style={{ background: '#eeeeee' }}>
          View Progress
        </button>

        <Dropdown>
          <Dropdown.Toggle
            style={{
              background: '#eeeeee',
              color: 'black',
              borderStyle: 'none',
            }}
            id="dropdown-basic"
          >
            <FaCircleCheck
              style={{
                marginRight: '5px',
                color: 'green',
              }}
            ></FaCircleCheck>
            Publish All
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Publish All</Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Publish all items and modules
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">UnPublish</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <button class="btn btn-danger">
          <FaPlus style={{ marginRight: '3px' }}></FaPlus>Module
        </button>
        <button class="btn" style={{ background: '#eeeeee', height: '38px' }}>
          <FaEllipsisVertical></FaEllipsisVertical>
        </button>
      </div>
      <br />
      <hr />
      <h4>Add/Update a Module</h4>
      <div className="row">
        <div className="col">
          <input
            value={module.name}
            placeholder="Enter the Module Name"
            className="form-control"
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <textarea
            value={module.description}
            placeholder="Enter the Module Description"
            className="form-control"
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </div>
      </div>
      <div style={{ marginTop: '5px' }}>
        <button
          className="btn btn-success"
          onClick={handleAddModule}
          style={{ marginRight: '5px' }}
        >
          Add
        </button>
        <button
          className="btn btn-primary"
          onClick={handleUpdateModule(module)}
        >
          Update
        </button>
      </div>

      <br />

      <ul className="list-group module-list">
        {modules.map((module, index) => (
          <div key={index}>
            <li className="list-group-item" style={{ height: '100px' }}>
              <div className="flex-container">
                <div className="float-end">
                  <button
                    className="btn btn-warning"
                    onClick={() => dispatch(setModule(module))}
                    style={{ marginLeft: '10px' }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDeleteModule(module._id)}
                    className="btn btn-danger"
                    style={{ marginLeft: '10px' }}
                  >
                    Delete
                  </button>
                </div>
                {module.name}
                <p>{module.description}</p>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CoursesModules;