import { useEffect } from 'react';
import axios from 'axios';

const Todos = () => {
    useEffect(() => {
        axios.get("https://gorest.co.in/public/v2/todos").then((res) => {
            document.querySelector("tbody").innerHTML = "";
            res.data.forEach(function (todo) {
                document.querySelector("tbody").innerHTML += `
                    <tr>
                        <td>${todo.id}</td>
                        <td>${todo.user_id}</td>
                        <td>${todo.title}</td>
                        <td>${todo.due_on}</td>
                        <td>${todo.status}</td>
                    </tr>`;
            })
        })
    }, []);

    return (
        <div className='p-3 m-5'>
            <h1 className="text-center p-5 text-muted">Todos</h1>
            <div>
                <table className='border border-primary text-center'>
                    <thead className='m-2 bg-primary'>
                        <tr className='border border-primary'>
                            <th className='p-2'>Todo_Id</th>
                            <th>User_Id</th>
                            <th>Title</th>
                            <th>Due_On</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className='border border-primary text-black-70'>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Todos;