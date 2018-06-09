import * as React from 'react';

export interface NavigationProps {
    navigationItems: NavigationItem[];
    selectedId: string;

    onSelectedChanged(selectedId);
}

export interface NavigationItem {
    name: string;
    id: string;
}

export interface NavigationItemProps {
    item: NavigationItem;
    isSelected: boolean;
    onClicked(id: string);
}

export class Navigation extends React.PureComponent<NavigationProps, never> {
    public render(): JSX.Element {
        return (
            <div style={{display: "flex"}}>
                {this.props.navigationItems.map((x, i) => (
                    <NavigationItemComponent
                        item={x}
                        onClicked={this.props.onSelectedChanged}
                        key={i}
                        isSelected={x.id === this.props.selectedId}
                    />
                ))}
            </div>
        );
    }
}

export class NavigationItemComponent extends React.PureComponent<NavigationItemProps, never>  {

    private onClicked = () => {
        this.props.onClicked(this.props.item.id);
    }

    public render() {
        return (
            <div onClick={this.onClicked} style={{marginLeft:'5px', cursor:'pointer', color: 'blue'}}>
                {this.props.item.name}
            </div>
        );
    }
}