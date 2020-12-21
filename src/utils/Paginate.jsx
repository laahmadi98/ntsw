import React, { Component } from 'react';
import { TablePagination } from 'react-pagination-table';
// https://github.com/miteshtagadiya/react-responsive-data-table

class Paginate extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() { 
        return ( 
            <div>
                 <TablePagination
                                // title="TablePagination"
                                // subTitle="Sub Title"
                                headers={this.props.Header}
                                data={this.props.data}
                                columns={this.props.col}
                                perPageItemCount={5}
                                totalCount={this.props.data.length}
                                arrayOption={[["size", 'all', ' ']]} />
            </div>
         );
    }
}
 
export default Paginate;