import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getRandomGiphy } from './util/giphy.service';
import Lecture from './demo/lecture';
import { SearchComponent } from './components/searchComponent';
import { GiphyViewerComponent } from './components/giphyViewerComponent';
import { Navigation, NavigationItem } from './components/navigation';
import {  HistoryItem } from './components/history';
import { History } from './components/history';

interface IIndexState {
    url: string;
    selectedNavigationItem: string;
    historyItems: HistoryItem[];
}

class Index extends React.Component<{}, IIndexState> {

    constructor(state: IIndexState) {
        super(state);
        this.state = {
            url: '',
            selectedNavigationItem: "search",
            historyItems: []
        }
    }

    private searchGiphy = (query?: string) => {
        getRandomGiphy(query).then(gifSource => {
            this.setState({
                url: gifSource
            });
        });
    }

    private navigationItems: NavigationItem[] = [
        { name: "Search", id: "search" }, { name: "History", id: "history" }
    ]

    private onNavigationItemSelected = (selectedId: string) => {
        this.setState({
            selectedNavigationItem: selectedId
        });
    }

    private onSave = () => {
        const historyItem: HistoryItem = {
            url: this.state.url
        };

        const items = [...this.state.historyItems, historyItem];
        this.setState({
            historyItems: items
        });
    }

    public render(): JSX.Element {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Navigation navigationItems={this.navigationItems}
                    selectedId={this.state.selectedNavigationItem} onSelectedChanged={this.onNavigationItemSelected} />
                {this.state.selectedNavigationItem === 'search' &&
                    <>
                        <SearchComponent onSearch={this.searchGiphy} />
                        <GiphyViewerComponent url={this.state.url} onSave={this.onSave}/>
                    </>
                }
                {this.state.selectedNavigationItem === 'history' &&
                    <>
                        <History historyItems={this.state.historyItems} />
                    </>
                }
            </div>
        );
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));
