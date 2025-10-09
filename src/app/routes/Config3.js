import './config3.css'
import Header from '../../shared/components/Header'
export default function Config3(){

    return(
        <div className='container'>
            <Header />
            <div className='C3container'>
                <div className='top-btn'>
                    <a href='/'>Add SQL Server</a>
                    <a href='/'>Add Amazon RDS SQL Server</a>
                    <a href='/'>Add Azure SQL Database</a>
                    <a href='/'>Add Azure SQL Managed Instance</a>
                    <a href='/' className='disable'>Import SQL Server</a>
                    <a href='/' className='disable'>Select  v </a>
                </div>
                <div className='Data-Table'>
                    <table>
                        <tr>
                            <th>Server</th>
                            <th>Alias</th>
                            <th>Status</th>
                            <th>Credentials</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <td>sm-dc2</td>
                            <td></td>
                            <td>Monitoring<span><br></br>Connected</span></td>
                            <td>Administrator@smdemo.local</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>sm-dc2</td>
                            <td></td>
                            <td>Monitoring<span><br></br>Connected</span></td>
                            <td>Administrator@smdemo.local</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>sm-dc2</td>
                            <td></td>
                            <td>Monitoring<span><br></br>Connected</span></td>
                            <td>Administrator@smdemo.local</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>sm-dc2</td>
                            <td></td>
                            <td>Monitoring<span><br></br>Connected</span></td>
                            <td>Administrator@smdemo.local</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>sm-dc2</td>
                            <td></td>
                            <td>Monitoring<span><br></br>Connected</span></td>
                            <td>Administrator@smdemo.local</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>sm-dc2</td>
                            <td></td>
                            <td>Monitoring<span><br></br>Connected</span></td>
                            <td>Administrator@smdemo.local</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>sm-dc2</td>
                            <td></td>
                            <td>Monitoring<span><br></br>Connected</span></td>
                            <td>Administrator@smdemo.local</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>sm-dc2</td>
                            <td></td>
                            <td>Monitoring<span><br></br>Connected</span></td>
                            <td>Administrator@smdemo.local</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}