
export const Avatar = (props) => {
    return (
        <img
            src={props.avatarURL}
            alt={`Avatar of ${props.altName}`}
            className='avatar'
        />
    )
}