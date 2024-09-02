
function Card(props){
    return (
        <li className="card_list">
            <div className="card_img">
                <img src={props.mimg} alt={props.mtit} />
            </div>
            <div>
                <span className="card_age">{props.mage}</span>
                <h3 className="card_tit">{props.mtit}</h3>
            </div>
            <div>
                <span className="card_rate">예매율{props.mrate}%</span>
                <span className="card_point">평점{props.mpoint}%</span>
                <br></br>
                <span className="card_date">{props.mdate}개봉</span>
            </div>
            <div className="card_btn">
                <a href="#">예매</a>
            </div>
        </li>
    );
}