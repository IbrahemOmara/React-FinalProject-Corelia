import './config1.css'
import Header from '../../shared/components/Header'
export default function Config1(){
    return(
        <div className='container'>
            <Header />
            <div className='C1container'>
                <h1>Configuration</h1>
                <div className='data'>
                    <div className='data-L'>
                        <h3>Monitoring</h3>
                            <a href='/'> <span>improved</span>Monitored servers</a>
                                <p>Add servers to monitor, edit connection credentials, remove or suspend monitored servers, configure maintenance windows</p>
                            <a href='/'>VMware hosts</a>
                                <p>Configure Vitware hosts for monitoring</p>
                            <a href='/'>Trace</a>
                                <p>Enable or disable Profile: trace on selected servers.</p>
                            <a href='/'>Extended Events</a>
                                <p>Enable or disable estended events for advanced alerting</p>
                            <a href='/'>Groups</a>
                                <p>Organize your monitored servers into groups.</p>
                            <h3>Application options</h3>
                            <a href='/'>Authentication settings</a>
                                <p>Set authentication proterences for SQL Monitor</p>
                            <a href='/'>Monage users</a>
                                <p>Manage users, roles and permissione</p>
                            <a href='/'>Base monitor connections</a>
                                <p>View details of your base munitior connections, connect in different base mumders</p>
                            <a href='/'>Display settings</a>
                                <p>Get user display retorences for SOL Menitor</p>
                    </div>
                    <div className='data-R'>
                        <h3>Alerts and metrics</h3>
                            <a href='/'>Alert settings</a>
                                <p>Enable and disable alert types, change alert thresholds and levels</p>
                            <a href='/'>Notification settings</a>
                                <p>Set up and manage notificabees for alerts (mail/Slack/SNMP/Webhook/LvmiLog)</p>
                            <a href='/'>Custom metrics</a>
                                <p>Create and managa custom metrics and custom alerts</p>
                            <a href='/'>Alert suppression</a>
                                <p>Create scheduled or one-off afert suppression windows (formerly maintenance windows)</p>
                        <h3>Data Management</h3>
                            <a href='/'> <span>improved</span>Data settings</a>
                            <p>Specify how long SOL Monitor keeps historic data in its Data Repository</p>
                        <h3>Licensing</h3>
                            <a href='/'>Licensing</a>
                            <p>Apply serial keys and allocate licenses to your servers.</p>
                        <h3>About</h3>
                            <a href='/'>About</a>
                            <p>View information about SOL Monitor components</p>
                    </div>
                </div>
            </div>
        </div>
    )
}