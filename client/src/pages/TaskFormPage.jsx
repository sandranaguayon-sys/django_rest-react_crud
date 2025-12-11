import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createTask, deleteTask, getTask, updateTask } from "../api/tasks.api";
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function TaskFormPage() {
    const { register, handleSubmit, formState: {
        errors
    }, setValue, reset } = useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        let res = [];

        if (params.id) {
            res = await updateTask(params.id, data);
            toast.success('Task updated!',
                {
                    position: 'bottom-right',
                    style: {
                        background: '#000',
                        color: '#fff'
                    }
                }
            );
        } else {
            res = await createTask(data);
            toast.success('Task created!',
                {
                    position: 'bottom-right',
                    style: {
                        background: '#000',
                        color: '#fff'
                    }
                }
            );
        }

        console.log(res);

        if (res.statusText == 'Created' || res.statusText == 'OK') {
            navigate('/tasks');
        }
    });

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                /*1er forma
                const res = await getTask(params.id);
                setValue('title', res.data.title);
                setValue('description', res.data.description);*/

                /*2da forma
                const {data} = await getTask(params.id);
                setValue('title', data.title);
                setValue('description', data.description);*/

                //3er forma
                const { data: { title, description } } = await getTask(params.id);
                setValue('title', title);
                setValue('description', description);

            } else {
                // limpia todos los campos
                reset({
                    title: "",
                    description: "",
                });

            }
        }

        loadTask();

    }, [params.id, setValue, reset]);

    return (
        <div className='max-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="title" id="title"
                    {...register("title", { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' />
                {errors.title && <span>This field is required!</span>}

                <textarea rows="3" placeholder="description"
                    {...register("description", { required: true })}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'></textarea>
                {errors.description && <span>This field is required!</span>}

                <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3 hover:cursor-pointer'>Save</button>

            </form>

            {params.id && (
                <div className='flex justify-end'>

                    <button
                        className='bg-red-500 p-3 rounded-lg w-48 mt-3 hover:cursor-pointer'
                        onClick={async () => {
                            const accepted = window.confirm('Are you sure?');
                            if (accepted) {
                                await deleteTask(params.id);
                                toast.success('Task deleted!',
                                    {
                                        position: 'bottom-right',
                                        style: {
                                            background: '#000',
                                            color: '#fff'
                                        }
                                    }
                                );
                                navigate('/tasks');
                            }
                        }}>Delete</button>

                </div>
            )}

        </div>
    )
}