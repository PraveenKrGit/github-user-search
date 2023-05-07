/* eslint-disable react/prop-types */
const User = ({ avatar, url, username }) => {
  return (
    <a className="user" href={url} target="_blank" rel="noopener noreferrer">
      <img src={avatar} alt="Profile" width="50" height="50" />
      <a href={url} target="_blank" rel="noopener noreferrer">
        {username}
      </a>
    </a>
  )
}

export default User
