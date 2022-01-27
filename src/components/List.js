import ListItem from './ListItem';
import './List.css';

const List = ({data, setDone, deleteItem}) => {

    const renderData = data.map(item => <ListItem deleteItem={deleteItem} setDone={setDone} item={item}/>)

    return (
        <div className="list">
            {renderData}
        </div>
    )
}

export default List;