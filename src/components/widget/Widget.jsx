import { AccountBalanceWalletOutlined, KeyboardArrowUpOutlined, MonetizationOnOutlined, PersonOutlineOutlined, ShoppingCartCheckoutOutlined } from "@mui/icons-material"
import "./widget.scss"

const Widget = ({ type }) => {
    let data;

    //temporary
    const amount = 100
    const diff = 20

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlineOutlined className="icon" />,
            };

            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartCheckoutOutlined className="icon" />,
            };
            break;
        case "earnings":
            data = {
                title: "USERS",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlined className="icon" />,
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: false,
                link: "See all users",
                icon: <AccountBalanceWalletOutlined className="icon" />,
            };
            break;
        default:
            break;
    }
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage negative">
                    <KeyboardArrowUpOutlined />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget