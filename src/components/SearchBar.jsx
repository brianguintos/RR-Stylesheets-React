export default function SearchBar () {

const SearchBarStyle = {
    width: "30%",
    height: "40px",
    borderRadius: "50px",
    border: "2px solid black",
    padding: "0px 15px"
}

    return (
        <div>
            <input style={SearchBarStyle} type="text" placeholder="Search for users" />
        </div>
    )
}