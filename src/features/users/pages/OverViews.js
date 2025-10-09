import Header from '../../../shared/components/Header'

export default function Overviews() {
    return(
        <div className='container'>
            <Header />
            <div className='overview-content'>
                <div className='ins'>
                    <p>Instances</p>
                    <select><option>All status</option></select>
                    <select><option>All groups</option></select>
                    <select><option>All base monitors</option></select>
                </div>
                <div className='filter'>
                    <p><span>Group by</span> <span>Server group</span><span>Health status</span></p>
                    <p><span>Order by</span> <span>Name</span><span>Severity</span></p>
                    <button className='btn-green'>Add monitored server</button>
                </div>
                <hr></hr>
                <div className='alert-popup'><i className="fa-solid fa-triangle-exclamation"></i>7095 active alerts on the dashboard are now over a week old .</div>
            </div>
        </div>
    )
}