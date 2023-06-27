import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabItem, activeTabBtnItem} = props
  const {tabId, displayText} = tabDetails

  const functionClick = () => {
    updateTabItem(tabId)
  }
  const activeTabBtn = activeTabBtnItem ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabBtn}`}
        onClick={functionClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
