function Employee(props) {
    return (
        <div className="card w-96 glass">
            <figure><img src={props.img} alt="car!"/></figure>
            <div className="card-body">
                <h2 className="card-title">{props.name}</h2>
                <p>{props.role ? props.role : 'Developer'}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    )
}
export default Employee;