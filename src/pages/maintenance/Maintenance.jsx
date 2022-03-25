import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Unavailable from "../../components/unavailable/Unavailable"
import "./maintenance.scss"

const Maintenance = () => {
    return (
        <div className="maintenance">
            <Sidebar />
            <div className="maintenanceContainer">
                <Navbar />
                <Unavailable />
            </div>
        </div>
    )
}

export default Maintenance