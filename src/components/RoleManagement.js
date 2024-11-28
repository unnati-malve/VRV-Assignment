// import React, { useState, useEffect, useContext } from 'react';
// import { Button, Card, CardContent, TextField, Grid, Typography, IconButton, Box } from '@mui/material';
// import { RoleContext } from '../context/RoleContext';
// import { fetchRoles, addRole, updateRole, deleteRole } from '../mockApi';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';

// function RoleManagement() {
//   const { roles, setRoles } = useContext(RoleContext);
//   const [newRole, setNewRole] = useState({ name: '', permissions: [] });

//   useEffect(() => {
//     fetchRoles().then(setRoles);
//   }, [setRoles]);

//   const handleAddRole = () => {
//     addRole(newRole).then(role => setRoles([...roles, role]));
//   };

//   const handleUpdateRole = (updatedRole) => {
//     updateRole(updatedRole).then(role => {
//       setRoles(roles.map(r => (r.id === role.id ? role : r)));
//     });
//   };

//   const handleDeleteRole = (id) => {
//     deleteRole(id).then(() => {
//       setRoles(roles.filter(role => role.id !== id));
//     });
//   };

//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h6">Role Management</Typography>
//         <Box sx={{ marginBottom: 2 }}>
//           <TextField
//             label="Role Name"
//             variant="outlined"
//             fullWidth
//             value={newRole.name}
//             onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
//           />
//           <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }} onClick={handleAddRole}>
//             Add Role
//           </Button>
//         </Box>
//         <Grid container spacing={2}>
//           {roles.map(role => (
//             <Grid item xs={12} sm={6} md={4} key={role.id}>
//               <Card sx={{ padding: 2 }}>
//                 <Typography variant="body1">
//                   {role.name} - {role.permissions.join(', ')}
//                 </Typography>
//                 <Box sx={{ marginTop: 1 }}>
//                   <IconButton onClick={() => handleUpdateRole({ ...role, permissions: ['read'] })} color="primary">
//                     <EditIcon />
//                   </IconButton>
//                   <IconButton onClick={() => handleDeleteRole(role.id)} color="error">
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

// export default RoleManagement;



import React, { useContext, useState } from 'react';
import { RoleContext } from '../context/RoleContext';
import axios from 'axios';
import '../styles.css';

const RoleManagement = () => {
  const { roles, setRoles } = useContext(RoleContext);
  const [newRole, setNewRole] = useState({ name: '', permissions: [] });

  const addRole = () => {
    axios.post('http://localhost:5000/roles', newRole)
      .then(res => setRoles([...roles, res.data]))
      .catch(err => console.log(err));
  }

  const deleteRole = (id) => {
    axios.delete(`http://localhost:5000/roles/${id}`)
      .then(() => setRoles(roles.filter(role => role.id !== id)))
      .catch(err => console.log(err));
  }

  return (
    <div className="role-management">
      <h2>Role Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(', ')}</td>
              <td>
                <button onClick={() => deleteRole(role.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-role-form">
        <input
          type="text"
          placeholder="Role Name"
          value={newRole.name}
          onChange={e => setNewRole({ ...newRole, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Permissions (comma separated)"
          value={newRole.permissions}
          onChange={e => setNewRole({ ...newRole, permissions: e.target.value.split(',') })}
        />
        <button onClick={addRole}>Add Role</button>
      </div>
    </div>
  );
}

export default RoleManagement;
