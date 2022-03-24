import Chart from "../../components/chart/Chart"
import Featured from "../../components/featured/Featured"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Table from "../../components/table/Table"
import Widget from "../../components/widget/Widget"
import "./home.scss"

const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earnings" />
                    <Widget type="balance" />
                </div>

                <div className="charts">
                    <Featured />
                    <Chart aspect={3 / 1} title="Last 6 Month (Revenue)" />
                </div>

                <div className="listContainer">
                    <div className="listTitle">Lastest transactions</div>
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Home