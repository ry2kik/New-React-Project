export const Shimmer = () => {
    return (
        <>
            <div className="container shimmer-container">
                {
                    Array(10).fill('').map((e, index) => <div className="card shimmer-card" key={index}></div>)
                }
            </div>

        </>
    )
}