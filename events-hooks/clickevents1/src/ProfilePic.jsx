
function ProfilePic() {

    const imageUrl = './src/assets/snapshotex.png';

    // makes image disappear when clicked on
    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} src={imageUrl}></img>);

}

export default ProfilePic