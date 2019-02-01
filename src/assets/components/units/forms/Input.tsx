import * as React from 'react';

interface IPropInput{
    inputType: string;
    plholder: string;
    formField: string;
    required: boolean
}
class Input extends React.Component<IPropInput> {

    public render(){
        return(
            <div className="input-wrap">
                <input
                    className="input-ctrl"
                    name={this.props.formField}
                    type={this.props.inputType}
                    placeholder={this.props.plholder}
                    required={this.props.required}
                />
            </div>
        )
    }
}


export default Input;