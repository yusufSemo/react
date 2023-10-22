import PropTypes from 'prop-types'
function Employee(props){
    return(
        <div className = "employes">
     <h3>Employee {props.name}</h3>
     <p>Age: {props.age}</p>
     <p>{props.role}</p>
     </div>
    );

}
Employee.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    role: PropTypes.string,
}
Employee.defaultProps = {
    name: "Guest",
    age: 18,
    role: "none",
}

export default Employee;