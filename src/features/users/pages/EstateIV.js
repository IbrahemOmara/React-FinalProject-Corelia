import IVstyles from  './EstateIV.module.css'
import PieChart from "../components/PieChart";
import ProgressBars from "../components/ProgressBars";
import Header from '../../../shared/components/Header'

export default function EstateIV(){
    return(
        <div className={IVstyles.container}>
            <Header />
            <div className={IVstyles["sub-header"]}>
                <div className={IVstyles.tabs}>
                <a href="/" className={IVstyles.active}>Installed Versions </a>
                <a href="/">Disk Usage</a>
                <a href="/">Backups</a>
                <a href="/">SQL Agent Jobs</a>
                <a href="/">SQL Agent Licensing</a>
                </div>
            </div>

            <div className={IVstyles.content}>
                <div className={IVstyles["Installed-Versions"]}>
                <h3>Installed Versions</h3>
                <div className={IVstyles["select-box"]}>
                    <select>
                    <option value="0">All groups</option>
                    </select>
                    <select>
                    <option value="0">Filter</option>
                    </select>
                    <select>
                    <option value="0">All versions</option>
                    </select>
                    <select>
                    <option value="0">All statues</option>
                    </select>
                </div>
                </div>

                <div className={IVstyles.Summery}>
                <h3>Summery</h3>
                <div className={IVstyles.chart}>
                    <PieChart />
                    <ProgressBars />

                    <div className={IVstyles["Lasted-update"]}>
                    <h4>Lasted update</h4>
                    <span>RTM CU10</span>
                    <span>RTM CU10</span>
                    <span>RTM CU10</span>
                    <span>RTM CU10</span>
                    <span>RTM CU10</span>
                    </div>

                    <div className={IVstyles["Release-date"]}>
                    <h4>Release date</h4>
                    <span>06 Apr 2016</span>
                    <span>06 Apr 2016</span>
                    <span>06 Apr 2016</span>
                    <span>06 Apr 2016</span>
                    <span>06 Apr 2016</span>
                    </div>
                </div>
                </div>

                <h3>Instances</h3>
                <div className={IVstyles.Instances}>
                <div className={IVstyles["show-groups"]}>
                    <div className={IVstyles.togel}>
                    <div className={IVstyles.dot}></div>
                    </div>
                    <span>show groups</span>
                </div>
                <button>Export</button>
                </div>
            </div>

            <div className={IVstyles["Data-Table"]}>
                <table className={IVstyles.IVtable}>
                <tr>
                    <th>Name</th>
                    <th>Versions</th>
                    <th>Statues</th>
                    <th>Lasted available update</th>
                    <th>End of mainstream support</th>
                </tr>
                <tr>
                    <td>ssc-db-n1\(local)</td>
                    <td>SQL server 2017</td>
                    <td>RTM CU23</td>
                    <td>
                    <span>RTM CU23</span>
                    <br />
                    Released 2 months ago on 24 Feb 2021
                    </td>
                    <td>11 oct 2022</td>
                </tr>
                <tr>
                    <td>ssc-db-n1\(local)</td>
                    <td>SQL server 2017</td>
                    <td>RTM CU23</td>
                    <td>
                    <span>RTM CU23</span>
                    <br />
                    Released 2 months ago on 24 Feb 2021
                    </td>
                    <td>11 oct 2022</td>
                </tr>
                <tr>
                    <td>ssc-db-n1\(local)</td>
                    <td>SQL server 2017</td>
                    <td>RTM CU23</td>
                    <td>
                    <span>RTM CU23</span>
                    <br />
                    Released 2 months ago on 24 Feb 2021
                    </td>
                    <td>11 oct 2022</td>
                </tr>
                <tr>
                    <td>ssc-db-n1\(local)</td>
                    <td>SQL server 2017</td>
                    <td>RTM CU23</td>
                    <td>
                    <span>RTM CU23</span>
                    <br />
                    Released 2 months ago on 24 Feb 2021
                    </td>
                    <td>11 oct 2022</td>
                </tr>
                <tr>
                    <td>ssc-db-n1\(local)</td>
                    <td>SQL server 2017</td>
                    <td>RTM CU23</td>
                    <td>
                    <span>RTM CU23</span>
                    <br />
                    Released 2 months ago on 24 Feb 2021
                    </td>
                    <td>11 oct 2022</td>
                </tr>
                <tr>
                    <td>ssc-db-n1\(local)</td>
                    <td>SQL server 2017</td>
                    <td>RTM CU23</td>
                    <td>
                    <span>RTM CU23</span>
                    <br />
                    Released 2 months ago on 24 Feb 2021
                    </td>
                    <td>11 oct 2022</td>
                </tr>
                </table>
            </div>
            </div>
    )
}