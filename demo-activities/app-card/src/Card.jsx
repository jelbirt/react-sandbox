import profPic from './assets/snapshotex.png'

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={profPic} alt="profile picture"></img>
            <h2 className = "card-title"> Jake Elbirt</h2>
            <p className = "card-text">Software Developer and Data Analyst</p>
        </div>
    );
}

export default Card