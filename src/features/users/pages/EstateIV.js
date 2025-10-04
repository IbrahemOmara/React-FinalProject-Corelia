import styles from  './EstateIV.module.css'
import PieChart from "../components/PieChart";
import ProgressBars from "../components/ProgressBars";
import Header from '../../../shared/components/Header'

export default function EstateIV(){
    return(
        <div className={styles.container}>
            <Header />
            <div className={styles["sub-header"]}>
                <div className={styles.tabs}>
                <a href="/" className={styles.active}>Installed Versions </a>
                <a href="/">Disk Usage</a>
                <a href="/">Backups</a>
                <a href="/">SQL Agent Jobs</a>
                <a href="/">SQL Agent Licensing</a>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles["Installed-Versions"]}>
                <h3>Installed Versions</h3>
                <div className={styles["select-box"]}>
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

                <div className={styles.Summery}>
                <h3>Summery</h3>
                <div className={styles.chart}>
                    <PieChart />
                    <ProgressBars />

                    <div className={styles["Lasted-update"]}>
                    <h4>Lasted update</h4>
                    <span>RTM CU10</span>
                    <span>RTM CU10</span>
                    <span>RTM CU10</span>
                    <span>RTM CU10</span>
                    <span>RTM CU10</span>
                    </div>

                    <div className={styles["Release-date"]}>
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
                <div className={styles.Instances}>
                <div className={styles["show-groups"]}>
                    <div className={styles.togel}>
                    <div className={styles.dot}></div>
                    </div>
                    <span>show groups</span>
                </div>
                <button>Export</button>
                </div>
            </div>

            <div className={styles["Data-Table"]}>
                <table>
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