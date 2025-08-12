const UserCard = ({user, groupName, timeLeft}) => {
  return (
    <div>
    UserName: {user.name}
    Group: {groupName}
    Time Left: {timeLeft}
    </div>
  );
}

export default UserCard;