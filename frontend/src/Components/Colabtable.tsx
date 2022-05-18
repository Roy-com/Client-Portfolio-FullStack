import React, {useEffect} from 'react'
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import API from '../api'
import {ImgUrl} from './type'
export interface url{
    url: string;
}
export default function Colabtable() {
    const [data,setData] = useState([[]])
    useEffect(() => {
        API.get('/collab/all').then((res: any )=> {
            console.log(res.data)
                setData(res.data);
                // do whatever
            })
    }, [])
    const [isEditing, setIsEditing] = useState(false);
    const [isAdding, setIsAdding]   = useState(false);
    const [addData, setAddData] = useState<url>({url: ''});
    const [editingStudent, setEditingStudent] = useState<ImgUrl>({
        __v: 0,
        _id: "",
        url: "",
    });
    const columns = [
      {
        key: "1",
        title: "ID",
        dataIndex: "_id",
      },
      {
        key: "2",
        title: "URL",
        dataIndex: "url",
      },
    //   {
    //     key: "3",
    //     title: "Email",
    //     dataIndex: "email",
    //   },
    //   {
    //     key: "4",
    //     title: "Address",
    //     dataIndex: "address",
    //   },
      {
        key: "3",
        title: "Actions",
        render: (record: any) => {
          return (
            <>
              <EditOutlined
                onClick={() => {
                  onEditStudent(record);
                }}
              />
              <DeleteOutlined
                onClick={() => {
                  onDeleteStudent(record);
                }}
                style={{ color: "red", marginLeft: 12 }}
              />
            </>
          );
        },
      },
    ];
    const onAddStudent = () => {
        setIsAdding(true);
        // const randomNumber = parseInt(Math.random() * 1000);
        // const newStudent = {
        //   id: randomNumber,
        //   name: "Name " + randomNumber,
        //   email: randomNumber + "@gmail.com",
        //   address: "Address " + randomNumber,
        // };
        // setDataSource((pre) => {
        //   return [...pre, newStudent];
        // });
      };
      const onDeleteStudent = (record: any) => {
        Modal.confirm({
          title: "Are you sure, you want to delete this url record?",
          okText: "Yes",
          okType: "danger",
          onOk: () => {
                API.delete(`/collab/del/${record._id}`).then((res: any) => {
                    setData(res.data.data)
                })
          },
        });
      };
      const onEditStudent = (record: any) => {
        setIsEditing(true);
        setEditingStudent({ ...record });
      };
      const resetAdding = () => {
        setIsAdding(false);
        setAddData({url: ""});
      };
      const resetEditing = () => {
        setIsEditing(false);
        setEditingStudent({
            __v: 0,
            _id: "",
            url: "",
        });
      };
  return (
      <>
    <Button onClick={onAddStudent}>Add a new URL</Button>
        <Table columns={columns} dataSource={data}></Table>
        <Modal
          title={isEditing?"Edit url":"Add a new URL"}
          visible={isEditing||isAdding}
          okText="Save"
          onCancel={() => {
            isEditing? resetEditing(): resetAdding();
          }}
          onOk={() => {
              if(isEditing){
                    API.put('/collab/update',editingStudent).then((res: any) => {
                        setData(res.data.data)
                    })
              }
              else{
                API.post('/collab/add',addData).then((res: any) => {
                    setData(res.data.data)
                })
           }
            // setDataSource((pre) => {
            //   return pre.map((student) => {
            //     if (student.id === editingStudent!.id) {
            //       return editingStudent;
            //     } else {
            //       return student;
            //     }
            //   });
            // });
            isEditing? resetEditing(): resetAdding();
          }}
        >
          {isEditing&&<Input
            value={editingStudent?._id}
            disabled
            // onChange={(e) => {
            //   setEditingStudent((pre) => {
            //     return { ...pre, name: e.target.value };
            //   });
            // }}
          />}
          <Input
            value={isEditing?editingStudent?.url:addData.url}
            placeholder="Enter url"
            onChange={(e) => {
              isEditing? setEditingStudent((pre) => {
                return { ...pre, url: e.target.value };
              }): setAddData({url: e.target.value})
            }}
          />
          {/* <Input
            value={editingStudent?.address}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, address: e.target.value };
              });
            }}
          /> */}
        </Modal>
        </>
  )
}
