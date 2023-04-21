import EditEmployee from "./EditEmployee";

function Employee ()  {
    return(
        <div className="card w-96 glass py-8 px-8 max-w-sm mx-auto space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <div className="card w-96 glass shadow-lg">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>

                    </div>
                    <EditEmployee />
                </div>
            </div>
        </div>
    )
}
export default Employee;