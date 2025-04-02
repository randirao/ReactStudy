function AlertBotton(props){
    return(
        <div>
            <h1><button onClick={()=>alert(props.message)}>나를 누르거라</button></h1>
        </div>
    );
}

export default AlertBotton