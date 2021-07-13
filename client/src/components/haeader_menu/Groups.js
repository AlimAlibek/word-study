import MenuItem from "./MenuItem";
import Modal from "./MenuModal";

function Groups(props) {
    const groupNames = Object.keys(props.words);
    return (
        <div>
            
            <MenuItem onClick={props.onGroupsClick}>
                groups
            </MenuItem>

            {(props.isGroupsList && props.isMenuModalShown) &&
                <Modal>
                    <ul className="group-list">
                        {groupNames.length 
                        ?
                          groupNames.map(groupName => {
                            return <li  key={groupName}>
                                <label className="group-name">
                                    <input 
                                      type="radio" 
                                      name="group" 
                                      checked={props.currentGroup === groupName}
                                      onChange={() => props.onChooseGroupe(groupName)}
                                    />
                                    <div>
                                        <p>{groupName}</p>
                                        <p style={{textAlign: "end", color: "gray"}}>
                                            <small>{props.words[groupName].length} words</small>
                                        </p>
                                    </div>
                
                                </label>
                            </li>
                          })
                        :
                          <div>There are no groups created. Click "create group" to create a group.</div>
                        }
                        
                    </ul>
                </Modal>
            }
        </div>
    )
}

export default Groups;