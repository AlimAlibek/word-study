import MenuItem from "./MenuItem";
import Modal from "./MenuModal";

function Search(props) {

    function handleInputChange(e) {
        const value = e.target.value;
        props.onSearchInputChange(value.trim()); 
        
    }
    function handleResetClick(e) {
        props.onSearchInputChange('');
        props.closeModal();
    }

    return (
        <div >
            
            <MenuItem onClick={props.onSearchClick}>
                search word
            </MenuItem>
            {
                props.searchText &&
                <small style={{position: "absolute", color: "red", top: "40px"}}>
                    {props.searchText}
                </small>
                
            }

            {(props.isSearchInput && props.isMenuModalShown) &&
                <Modal >
                    <div>
                        <p><small>search</small></p>
                        <input 
                            placeholder="search word in this group..." 
                            value={props.searchText} 
                            onChange={handleInputChange} 
                        />                       
                    </div>
                    <div className="modal-button-container">
                        <button onClick={handleResetClick}>reset</button>
                    </div>
                    
                </Modal>
            }

        </div>

    )
}

export default Search;