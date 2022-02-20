import classes from "../../styles/fragments/profile-photo.module.scss"

const ProfilePhoto = ({mini = false}) => {
  return (
    <div className={classes.photo + (mini ? ` ${classes.mini}` : "")}>
      <span className={classes.text}>h</span>
    </div>
  )
}

export default ProfilePhoto
