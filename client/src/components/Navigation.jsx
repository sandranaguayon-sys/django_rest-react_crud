//import { Link, useLocation } from 'react-router-dom';

/*export function Navigation() {
    return (
        <div className='flex justify-between py-3'>
            <Link to='/tasks'>
                <h1 className='font-bold text-3xl mb-4'>Tasks App</h1>
            </Link>

            {// solo muestra el botón si NO estás en /task-create }
      {location.pathname !== '/task-create' && (
        <button className='bg-indigo-500 px-3 py-1 rounded-lg'>
          <Link to='/task-create'>Create Task</Link>
        </button>
      )}


        </div>
    )
}*/

import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <div className='flex justify-between py-3'>
      <NavLink to='/tasks'>
        <h1 className='font-bold text-3xl mb-4'>Tasks App</h1>
      </NavLink>

      <NavLink
        to='/task-create'
        className={({ isActive }) =>
          isActive ? 'hidden' : 'bg-indigo-500 px-3 py-1 rounded-lg flex items-center justify-center text-white'
        }
      >
        Create Task
      </NavLink>
    </div>
  );
}
