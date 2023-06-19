import './Student.css';
const Student = (props) => {
    
    const {studentName, classCode, math, phy, chem } = props || {}
    return (
        <div className ="student">
            <h6>{studentName}</h6>
            <p>
                <strong>Lop: </strong> 
                {classCode}
            </p>
            <ul>
                <li>
                    <strong>Toan:</strong>
                    {math}
                </li>
                <li>
                    <strong>Li:</strong>
                    {phy}
                </li>
                <li>
                    <strong>Hoa:</strong>
                    {chem}
                </li>
            </ul>
        </div>
    );
}

export default Student