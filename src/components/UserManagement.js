// import React, { useState, useEffect, useContext } from 'react';
// import { Button, Card, CardContent, TextField, Grid, Typography, IconButton, Box } from '@mui/material';
// import { UserContext } from '../context/UserContext';
// import { fetchUsers, addUser, updateUser, deleteUser } from '../mockApi';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

// function UserManagement() {
//   const { users, setUsers } = useContext(UserContext);
//   const [newUser, setNewUser] = useState({ name: '', role: '', status: 'Active' });

//   useEffect(() => {
//     fetchUsers().then(setUsers);
//   }, [setUsers]);

//   const handleAddUser = () => {
//     addUser(newUser).then(user => setUsers([...users, user]));
//   };

//   const handleUpdateUser = (updatedUser) => {
//     updateUser(updatedUser).then(user => {
//       setUsers(users.map(u => (u.id === user.id ? user : u)));
//     });
//   };

//   const handleDeleteUser = (id) => {
//     deleteUser(id).then(() => {
//       setUsers(users.filter(user => user.id !== id));
//     });
//   };

//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h6">User Management</Typography>
//         <Box sx={{ marginBottom: 2 }}>
//           <TextField
//             label="Name"
//             variant="outlined"
//             fullWidth
//             value={newUser.name}
//             onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//           />
//           <TextField
//             label="Role"
//             variant="outlined"
//             fullWidth
//             value={newUser.role}
//             onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
//             sx={{ marginTop: 2 }}
//           />
//           <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }} onClick={handleAddUser}>
//             Add User
//           </Button>
//         </Box>
//         <Grid container spacing={2}>
//           {users.map(user => (
//             <Grid item xs={12} sm={6} md={4} key={user.id}>
//               <Card sx={{ padding: 2 }}>
//                 <Typography variant="body1">
//                   {user.name} ({user.role}) - {user.status}
//                 </Typography>
//                 <Box sx={{ marginTop: 1 }}>
//                   <IconButton onClick={() => handleUpdateUser({ ...user, status: 'Inactive' })} color="primary">
//                     <EditIcon />
//                   </IconButton>
//                   <IconButton onClick={() => handleDeleteUser(user.id)} color="error">
//                     <DeleteIcon />
//                   </IconButton>
//                 </Box>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// }

// export default UserManagement;


import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import '../styles.css';

const UserManagement = () => {
  const { users, setUsers } = useContext(UserContext);
  const [newUser, setNewUser] = useState({ name: '', role: '', status: '' });

  const addUser = () => {
    axios.post('http://localhost:5000/users', newUser)
      .then(res => setUsers([...users, res.data]))
      .catch(err => console.log(err));
  }

  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(err => console.log(err));
  }

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-user-form">
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={e => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          value={newUser.role}
          onChange={e => setNewUser({ ...newUser, role: e.target.value })}
        />
        <input
          type="text"
          placeholder="Status"
          value={newUser.status}
          onChange={e => setNewUser({ ...newUser, status: e.target.value })}
        />
        <button onClick={addUser}>Add User</button>
      </div>
    </div>
  );
}

export default UserManagement;
