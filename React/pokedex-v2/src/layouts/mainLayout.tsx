import { FC } from 'react';
import '../styles/mainLayout.css';

interface MainLayoutProps {
    title?: string;
}

//Desestructuramos los props para obtener el title
export const MainLayout: FC<MainLayoutProps> = ({ 
    title = "Pokédex v2",
    children
}) => {
    return (
        <div>
            <h1>[title]</h1>
            <hr />
                <main className="pokemon-container">
                    {children}
                </main>
                <div id="spinner" className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li id="previous" className="page-item"><a className="page-link" href="#">Previous</a></li>
                        <li id="next" className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
        </div>
    )
}
