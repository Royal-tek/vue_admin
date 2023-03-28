<template>
    <div id="main-content">
        <div class="container-fluid">
            <div class="block-header">
                <div class="row">
                    <div class="col-lg-5 col-md-8 col-sm-12">                        
                        <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i class="fa fa-arrow-left"></i></a> Manage Players</h2>
                       
                    </div>   

                    <div class="col-md-12 mt-5">
                    <div class="card">
                        <div class="header">
                            <h2>Player List</h2>

                            <ul class="header-dropdown">
                                <input type="search" class="form-control" placeholder="Search Player">
                            </ul>
                        </div>
                        <div class="body">
                            <div class="table-responsive">
                                <table class="table center-aligned-table">
                                    <thead>
                                    <tr>
                                        <th>Order No</th>
                                        <th>Player Name</th>
                                        <th> Department</th>
                                        <th>Number</th>
                                        <th> Player Image</th>
                                        <th> Status</th>
                                        <th>Action</th>
                                        <th>Delete Player</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Q01</td>
                                        <td>Afonime Royal</td>
                                        <td>Computer Science</td>
                                        <td>17</td>
                                        <td>Credit card</td>
                                        <td><label class="badge">Awaiting Approval</label></td>
                                        <td><a href="javascript:void(0);" class="btn btn-success btn-sm">Approve Player</a></td>
                                        <td><button class="btn btn-danger btn-sm"><i class="icon-trash"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td>Q02</td>
                                        <td>Galaxy S8</td>
                                        <td>18 Jan 2018</td>
                                        <td>Dispatched</td>
                                        <td>Internet banking</td>
                                        <td><label class="badge">Approved</label></td>
                                        <td><a href="javascript:void(0);" style="cursor: not-allowed;" class="btn btn-success btn-sm"> Approved</a></td>
                                        <td><button class="btn btn-danger btn-sm"><i class="icon-trash"></i></button></td>
                                    </tr>
                                   
                                    <tr>
                                        <td>Q05</td>
                                        <td>Mac Mini</td>
                                        <td>8 March 2018</td>
                                        <td>Dispatched</td>
                                        <td>Debit card</td>
                                        <td><label class="badge">Approved</label></td>
                                        <td><a href="javascript:void(0);" class="btn btn-success btn-sm">View Order</a></td>
                                        <td><button class="btn btn-danger btn-sm"><i class="icon-trash"></i></button></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'ManagePlayers'
    }

</script>