import DUstyles from "./EstateDU.module.css"
import MyLineChart from '../components/MyLineChart'
import Header from '../../../shared/components/Header'

export default function EstateDU(){
    return(
        <div className={DUstyles.container}>
            <Header />
            <div className={DUstyles["sub-header"]}>
                <div className={DUstyles.tabs}>
                <a href="/" >Installed Versions </a>
                <a href="/" className={DUstyles.active}>Disk Usage</a>
                <a href="/">Backups</a>
                <a href="/">SQL Agent Jobs</a>
                <a href="/">SQL Agent Licensing</a>
                </div>
            </div>

            <div className={DUstyles.content}>
                <div className={DUstyles["Installed-Versions"]}>
                <h3>Installed Versions</h3>
                <div className={DUstyles["select-box"]}>
                    <select>
                    <option value="0">All groups</option>
                    </select>
                    <select>
                    <option value="0">Filter</option>
                    </select>
                    <select>
                    <option value="0">All disks</option>
                    </select>
                    
                </div>
                </div>

                <div className={DUstyles.Summery}>
                    <h3>Summery</h3>
                    <div className={DUstyles.chart}>
                        <MyLineChart />
                        <div className={DUstyles.Data}>
                            <h4>Estate Summary</h4>
                            <p>This is a summary of all the servers in your estate </p>
                            <div style={{display:"flex"}}>
                                <div className={DUstyles["Lasted-update"]}>
                                
                                <span>Current space used</span>
                                <span>Current capacity</span>
                                <span>Projected space used in one year</span>
                                <span>Projected change</span>
                                </div>

                                <div className={DUstyles["Release-date"]}>
                                
                                <span>47.98 Tb (30%)</span>
                                <span>160.73 Tb</span>
                                <span>172.82 Tb (108%)</span>
                                
                                <span>+124.89 Tb</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>Instances</h3>
                <div className={DUstyles.Instances}>
                <div className={DUstyles["show-groups"]}>
                    <div className={DUstyles.togel}>
                    <div className={DUstyles.dot}></div>
                    </div>
                    <span>show groups</span>
                </div>
                <button>Export</button>
                </div>
            </div>

            <div className={DUstyles["Data-Table"]}>
                <table className={DUstyles.DUtable}>
                <tr>
                    <th>Server name</th>
                    <th>Disk</th>
                    <th>Space used</th>
                    <th>Capacity</th>
                    <th>Percentage used</th>
                    <th>Projected space used in one year</th>
                    <th>Projected change</th>
                    <th>Time until full</th>
                </tr>
                <tr>
                    <td>ssc-db-n</td>
                    <td>C:</td>
                    <td>26.16 GB</td>
                    <td>39.51 GB</td>
                    <td>66%</td>
                    <td>30.29 GB</td>
                    <td>+4.10 GB</td>
                    <td>1year</td>
                </tr>
                <tr>
                    <td>ssc-db-n</td>
                    <td>C:</td>
                    <td>26.16 GB</td>
                    <td>39.51 GB</td>
                    <td>66%</td>
                    <td>30.29 GB</td>
                    <td>+4.10 GB</td>
                    <td>1year</td>
                </tr>
                <tr>
                    <td>ssc-db-n</td>
                    <td>C:</td>
                    <td>26.16 GB</td>
                    <td>39.51 GB</td>
                    <td>66%</td>
                    <td>30.29 GB</td>
                    <td>+4.10 GB</td>
                    <td>1year</td>
                </tr>
                <tr>
                    <td>ssc-db-n</td>
                    <td>C:</td>
                    <td>26.16 GB</td>
                    <td>39.51 GB</td>
                    <td>66%</td>
                    <td>30.29 GB</td>
                    <td>+4.10 GB</td>
                    <td>1year</td>
                </tr>
                <tr>
                    <td>ssc-db-n</td>
                    <td>C:</td>
                    <td>26.16 GB</td>
                    <td>39.51 GB</td>
                    <td>66%</td>
                    <td>30.29 GB</td>
                    <td>+4.10 GB</td>
                    <td>1year</td>
                </tr>
                </table>
            </div>
        </div>
    )
}