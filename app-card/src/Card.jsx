import profPic from './assets/snapshotex.png'

function Card() {
    return(
        <div className="card">
            <img src={profPic} alt="profile picture"></img>
            <h2>Jake Elbirt</h2>
            <p>Software Developer and Data Analyst</p>
        </div>
    );
}

export default Card