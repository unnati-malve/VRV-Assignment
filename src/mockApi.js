const users = [
    { id: 1, name: 'Alice', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Bob', role: 'User', status: 'Inactive' },
  ];
  
  const roles = [
    { id: 1, name: 'Admin', permissions: ['read', 'write', 'delete'] },
    { id: 2, name: 'User', permissions: ['read'] },
  ];
  
  export const fetchUsers = () => Promise.resolve(users);
  export const fetchRoles = () => Promise.resolve(roles);
  export const addUser = (user) => {
    users.push(user);
    return Promise.resolve(user);
  };
  export const updateUser = (updatedUser) => {
    const index = users.findIndex(user => user.id === updatedUser.id);
    users[index] = updatedUser;
    return Promise.resolve(updatedUser);
  };
  export const deleteUser = (id) => {
    const index = users.findIndex(user => user.id === id);
    users.splice(index, 1);
    return Promise.resolve(id);
  };
  export const addRole = (role) => {
    roles.push(role);
    return Promise.resolve(role);
  };
  export const updateRole = (updatedRole) => {
    const index = roles.findIndex(role => role.id === updatedRole.id);
    roles[index] = updatedRole;
    return Promise.resolve(updatedRole);
  };
  export const deleteRole = (id) => {
    const index = roles.findIndex(role => role.id === id);
    roles.splice(index, 1);
    return Promise.resolve(id);
  };
  