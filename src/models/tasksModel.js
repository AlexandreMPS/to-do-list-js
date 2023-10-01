const connection = require('./connection');

const getAll = async ()  => {
    const [tasks] = await connection.execute('query a ser executada');
    return tasks;
};

const createTask = async (task) => {
    const {title} = task;

    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)';

    const [createdTask] = await connection.execute(query, [title, 'pendente', 'data']);

    return {insertId: createdTask.insertId};
};

const deleteTask = async (id) => {
    const [removeTask] = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return removeTask;
};

const updateTask = async (id, task) => {

    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id= ?';

    const {title, status} = task;
    
    const [updatedTask] = await connection.execute( query, [title, status, id]);
    return removeTask;
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};