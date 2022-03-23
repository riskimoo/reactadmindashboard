import { KeyboardArrowDown, MoreVert } from '@mui/icons-material';
import { CircularProgressbar } from 'react-circular-progressbar';
import './featured.scss';
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVert fontSize='small' />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text="70%" strokeWidth={5} />
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$500</p>
                <p className="desc">This sales made for today we earn</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult">
                            <KeyboardArrowDown fontSize='small' />
                            <div className="resultAmount">$12.5K</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDown fontSize='small' />
                            <div className="resultAmount">$12.5K</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <KeyboardArrowDown fontSize='small' />
                            <div className="resultAmount">$12.5K</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured