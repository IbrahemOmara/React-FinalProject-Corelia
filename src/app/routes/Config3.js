import style from '../routes/config3.module.css'
import Header from '../../shared/components/Header'
export default function Config3(){

    return(
        <div className={style.container}>
            <Header />
            <div className={style.C3container}>
                <div className={style['top-btn']}>
                    <a href='/'>Add SQL Server</a>
                    <a href='/'>Add Amazon RDS SQL Server</a>
                    <a href='/'>Add Azure SQL Database</a>
                    <a href='/'>Add Azure SQL Managed Instance</a>
                    <a href='/' className={style.disable}>Import SQL Server</a>
                    <a href='/' className={style.disable}>Select  v </a>
                </div>
                <div className={style['Data-Table']}>
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