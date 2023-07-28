import './ErrorModal.css'

const ErrorModal = (props) => {
    return (
        <div>
            <div className="backdrop"></div>
            <div className="modal">
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="actions">
                <button onClick = {props.errorHandler} type="button">Okay</button>
            </footer>
            </div>
        </div>
    )
}

export default ErrorModal;