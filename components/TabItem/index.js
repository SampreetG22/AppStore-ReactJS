import './index.css'

const TabItem = props => {
  const {tabClick, tabDetails, isActive} = props
  const {tabId, displayText} = tabDetails
  const ClassName = isActive ? 'tabItemCSSHighlighted' : 'tabItemCSSNormal'
  const tabClickFunc = () => {
    tabClick(tabId)
  }
  return (
    <li className="tab-item">
      <button type="button" onClick={tabClickFunc} className={ClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
