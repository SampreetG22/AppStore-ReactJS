import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="indAppContainer">
      <img src={imageUrl} className="appImage" alt={appName} />
      <p className="appNameCSS">{appName}</p>
    </li>
  )
}

export default AppItem
