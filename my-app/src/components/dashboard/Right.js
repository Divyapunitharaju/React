import React from React;

class Right extends React.Component{
    constructor(props){
        super();
    }


    render(){
        let a=10;
        let b=20;
        const ans=()=>{
            return a+b;
        }
        return <div>
            Right page:{this.props.name}
            {a}+{b}={ans()}
        </div>
    }
}

export default Right;
