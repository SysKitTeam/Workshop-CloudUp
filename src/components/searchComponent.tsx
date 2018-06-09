import * as React from 'react';

interface ISearchState {
    inputValue: string;
}

interface ISearchProps {
    onSearch(value: string);
}

export class SearchComponent extends React.Component<ISearchProps, ISearchState> {

    constructor(props: ISearchProps) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }
    private _onInputChange = (e: any) => {
        this.setState(
            { inputValue: e.target.value });
    }

    private _onSearch = () => {
        this.props.onSearch(this.state.inputValue);
    }

    render() {
        return (
            <div>
                <input value={this.state.inputValue} onChange={this._onInputChange} />
                <button onClick={this._onSearch}>Search</button>
            </div>
        );
    }
}