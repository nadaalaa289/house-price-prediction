import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '60px' }}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Link to="/">Go back to home</Link>
        </div>
    );
};

export default NotFoundPage;