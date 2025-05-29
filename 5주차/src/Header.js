import { NavLink, Outlet } from 'react-router-dom';
import categories from './data/categories';

const Header = () => {
    return (
        <div style={{ backgroundColor: '#f0f0f0', padding: '1rem 2rem' }}>
            <h1>📰 News Site</h1>
            <nav style={{ marginBottom: '1rem' }}>
                {categories.map((c) => (
                    <NavLink
                        key={c.name}
                        to={c.name === 'all' ? '/' : `/category/${c.name}`}
                        style={({ isActive }) => ({
                            marginRight: '1rem',
                            padding: '6px 12px',
                            borderRadius: '5px',
                            textDecoration: 'none',
                            color: isActive ? 'red' : 'black',
                            backgroundColor: 'transparent',
                            transition: 'color 0.2s ease, background-color 0.2s ease',
                            cursor: 'pointer',
                        })}
                        onMouseEnter={e => {
                            if (!e.currentTarget.style.color.includes('red')) {
                                e.currentTarget.style.color = '#555';
                            }
                        }}
                        onMouseLeave={e => {
                            if (!e.currentTarget.style.color.includes('red')) {
                                e.currentTarget.style.color = 'black';
                            }
                        }}
                    >
                        {c.text}
                    </NavLink>
                ))}
            </nav>

            <Outlet />
        </div>
    );
};

export default Header;
