import React, {Component} from 'react';


class ProductCategoryRow extends Component {
    render() {
        return (
            <tr>
                <th colSpan="3">
                    {this.props.category}
                </th>
            </tr>
        )
    }
}

class ProductRow extends Component {
    render() {
        // var name = this.props.product.stocked ?
        //                     this.props.product.name :
        //                     <span style={{color: 'red'}}>
        //                         {this.props.product.name}
        //                     </span>;
        // var Chinese = this.props.product.stocked ?
        //                     this.props.product.name_zh :
        //                     <span style={{color: 'red'}}>
        //                         {this.props.product.name_zh}
        //                     </span>;

        if (!this.props.product.stocked) {
            return (
                <tr>
                    <td style={{color: 'red'}}>{this.props.product.name}</td>
                    <td style={{color: 'red'}}>{this.props.product.name_zh}</td>
                    <td style={{color: 'red'}}>{this.props.product.price}</td>
                </tr>
            );
        }
        else {
            return (
                <tr>
                    <td>{this.props.product.name}</td>
                    <td>{this.props.product.name_zh}</td>
                    <td>{this.props.product.price}</td>
                </tr>
            );
        }

    }
}

class ProductTable extends Component {
    render() {
        var rows = [];
        var lastCategory = null;
        this.props.tableProducts.forEach((product) => {
            if (product.name.indexOf(this.props.filterText) === -1 ||
                (!product.stocked && this.props.stockOnly)) {
                return ;
            }

            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
            }
            rows.push(<ProductRow product={product} key={product.name}/>);
            lastCategory = product.category;
        });
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Chinese Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleFilterText = this.handleFilterText.bind(this);
        this.handleStockOnly = this.handleStockOnly.bind(this);
    }

    handleFilterText(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleStockOnly(e) {
        this.props.onStockOnlyChange(e.target.checked);
    }

    render() {
        return (
            <form className="form-top">
                <input type="text"
                       placeholder="input search name"
                       value={this.props.filterText}
                       onChange={this.handleFilterText}/>
                <label>
                    <input type="checkbox"
                           checked={this.props.stockOnly}
                           onChange={this.handleStockOnly}/>
                    {' '}
                    仅展示有库存产品
                </label>
            </form>
        )
    }
}

class SingleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            stockOnly: false
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleStockOnlyChange = this.handleStockOnlyChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        })
    }

    handleStockOnlyChange(stockOnly) {
        this.setState({
            stockOnly:stockOnly
        })
    }

    render() {
        return (
            <div className="form">
                <SearchBar
                    filterText={this.state.filterText}
                    stockOnly={this.state.stockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onStockOnlyChange={this.handleStockOnlyChange}/>
                <ProductTable
                    tableProducts={this.props.products}
                    filterText={this.state.filterText}
                    stockOnly={this.state.stockOnly}/>
            </div>
        )
    }
}

export default SingleForm;