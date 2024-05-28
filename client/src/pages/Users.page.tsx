import { useEffect, useState } from "react";
import {  Table } from "react-bootstrap";
import { fetchAPi } from "../app/api.service";
import EditUser from "../components/EditUser.component";

export interface IUser {
  _id: string,
  userType: string;
  username: string;
  password: string;
  email?: string;
  phone?: number;
};

function Users() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [userDetail, setUserDetail] = useState<IUser | null>(null)
  const [show, setShow] = useState<boolean>(false);
  
  const getUsers = async() => {
    try {
      const res = await fetchAPi('/auth/getUsers', 'GET', )
      if(res.success) {
        setUsers(res.data);
      }
    }catch (error) {
      console.log(error);
    } 
  }

  useEffect(() => {
    getUsers();
  },[]);

  const showDetails = (user: IUser) => {
    setShow(true);
    setUserDetail(user);
  };

  const showCreate = () => {
    setShow(true);
    setUserDetail(null);
  };

  const handleDelete = async(id: string) => {
    try {
      const res = await fetchAPi(`/auth/delete/${id}`, 'DELETE')
      if(res.success) {
        getUsers();
      }
    }catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <button onClick={showCreate}>Add</button>
      <Table responsive>
        <thead>
          <tr>
            <th></th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => 
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td><span onClick={() => showDetails(user)}>Edit</span><span onClick={() => handleDelete(user._id)}>delete</span></td>
            </tr>
          )}
        </tbody>
      </Table>
      { show && 
        <EditUser 
          show={show}
          setShow={setShow}
          data={userDetail}
          refreshData={getUsers}

        />
      }  
    </>
  )
}

export default Users;