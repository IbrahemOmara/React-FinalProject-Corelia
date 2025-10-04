import style from './config2.module.css'
import Header from '../../shared/components/Header'
export default function config2(){

    return(
        <div className={style.container}>
            <Header />
            <div className={style.Compression}>
                <h3>Compression</h3>
                <p>Enabling Compression saves disk space by over fifty percent on average , reduces memory usage, and improves performance.</p>
                <div className={style['top-btn']}>
                    <a href='/' className={style.disable}>Estimate data compression savings</a>
                    <a href='/' >Enable data compression </a>
                </div>
            </div>

            <div className={style.Performance}>
                <h3>Performance</h3>
                <p>Enabling SQL Server features can improve speed and responsiveness.</p>
                <div className={style['checklist-all']}>
                    <label className={style.checklist}>Delayed durability
                        <input type="checkbox" ></input>
                        <span className={style.checkmark}></span>
                    </label>

                    <label className={style.checklist}>Query optimizer hotfixes
                        <input type="checkbox"></input>
                        <span className={style.checkmark}></span>
                    </label>

                    <label className={style.checklist}>Automatic query tuning
                        <input type="checkbox"></input>
                        <span className={style.checkmark}></span>
                    </label>

                    <label className={style.checklist}>Batch mode for rowstore
                        <input type="checkbox"></input>
                        <span className={style.checkmark}></span>
                    </label>
                </div>
            </div>

            <div className={style['Data-retention']}>
                <h3>Data retention</h3>
                <p>Adjusting how long historical data is retained for will affect the total data size.</p>
                <div className={style.warning}>
                    <i className={style["fa-solid fa-circle-exclamation fa-xl"]} style={{color: '#374af9'}}></i>
                    <p>Only select “ indefinitely “ if you’re sure you have enough disk space to store all collection data.<span>Total size on disk: 6.87 GB</span></p>
                </div>
            </div>

            <div className={style['Data-Table']}>
                <h3>Trend data</h3>
                <p>Data used to analyze long term performance and provide performance baselines.</p>
                <table>
                    <tr>
                        <th>Dta type</th>
                        <th>What data is included?</th>
                        <th>Where is this data display?</th>
                        <th>Retain for</th>
                        <th>Size on disk</th>
                    </tr>
                    <tr>
                        <th>Alert data </th>
                        <td>Basic alert data, current alert status, comments and severity history</td>
                        <td>Basic alert data, current alert status, comments and severity history</td>
                        <td>
                            <select>
                                <option value="0">Select data:</option>
                                <option value="1">2 month</option>
                                <option value="2">3 month</option>
                            </select>
                        </td>
                        <td>50 MB</td>
                    </tr>
                    <tr>
                        <th>Alert data </th>
                        <td>Basic alert data, current alert status, comments and severity history</td>
                        <td>Basic alert data, current alert status, comments and severity history</td>
                        <td>
                            <select>
                                <option value="0">Select data:</option>
                                <option value="1">2 month</option>
                                <option value="2">3 month</option>
                            </select>
                        </td>
                        <td>50 MB</td>
                    </tr>
                    <tr>
                        <th>Alert data </th>
                        <td>Basic alert data, current alert status, comments and severity history</td>
                        <td>Basic alert data, current alert status, comments and severity history</td>
                        <td>
                            <select>
                                <option value="0">Select data:</option>
                                <option value="1">2 month</option>
                                <option value="2">3 month</option>
                            </select>
                        </td>
                        <td>50 MB</td>
                    </tr>
                    <tr>
                        <th>Alert data </th>
                        <td>Basic alert data, current alert status, comments and severity history</td>
                        <td>Basic alert data, current alert status, comments and severity history</td>
                        <td>
                            <select>
                                <option value="0">Select data:</option>
                                <option value="1">2 month</option>
                                <option value="2">3 month</option>
                            </select>
                        </td>
                        <td>50 MB</td>
                    </tr>
                    <tr>
                        <th>Alert data </th>
                        <td>Basic alert data, current alert status, comments and severity history</td>
                        <td>Basic alert data, current alert status, comments and severity history</td>
                        <td>
                            <select>
                                <option value="0">Select data:</option>
                                <option value="1">2 month</option>
                                <option value="2">3 month</option>
                            </select>
                        </td>
                        <td>50 MB</td>
                    </tr>
                    <tr>
                        <th>Alert data </th>
                        <td>Basic alert data, current alert status, comments and severity history</td>
                        <td>Basic alert data, current alert status, comments and severity history</td>
                        <td>
                            <select>
                                <option value="0">Select data:</option>
                                <option value="1">2 month</option>
                                <option value="2">3 month</option>
                            </select>
                        </td>
                        <td>50 MB</td>
                    </tr>
                    <tr>
                        <th>Alert data </th>
                        <td>Basic alert data, current alert status, comments and severity history</td>
                        <td>Basic alert data, current alert status, comments and severity history</td>
                        <td>
                            <select>
                                <option value="0">Select data:</option>
                                <option value="1">2 month</option>
                                <option value="2">3 month</option>
                            </select>
                        </td>
                        <td>50 MB</td>
                    </tr>
                    <tr>
                        <th>Alert data </th>
                        <td>Basic alert data, current alert status, comments and severity history</td>
                        <td>Basic alert data, current alert status, comments and severity history</td>
                        <td>
                            <select>
                                <option value="0">Select data:</option>
                                <option value="1">2 month</option>
                                <option value="2">3 month</option>
                            </select>
                        </td>
                        <td>50 MB</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}