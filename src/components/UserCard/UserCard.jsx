import './UserCard.css'

export default function UserCard () {
    return (
        <div className="card">
            <img src='http://placekitten.com/g/200/300' style={{width: "250px", borderRadius: "50%"}} alt='Profile' />
            <p className="user-bio">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi dolore, saepe iste libero veniam animi nesciunt qui quas, deserunt voluptate non culpa quae harum cum. Numquam consequuntur dolorum soluta. Possimus.
            </p>
        </div>
    )
}