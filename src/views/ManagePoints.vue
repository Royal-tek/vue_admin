<template>
    <div id="main-content">
        <div class="container-fluid">
            <div class="block-header">
                <div class="row">
                    <div class="col-lg-5 col-md-8 col-sm-12">                        
                        <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i class="fa fa-arrow-left"></i></a> Manage Points</h2>
                       
                    </div>   

                    <div class="col-md-12 mt-5">
                    <div class="card">
                        <div class="header">
                            <h2>Player Points</h2>

                            

                            <ul class="header-dropdown" style="display: flex;">
                                <div></div>
                                
                                <input type="search" class="form-control" placeholder="Search Player">
                            </ul>
                        </div>
                        <div class="body">
                            <div class="table-responsive">
                                <table class="table center-aligned-table">
                                    <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th> Department</th>
                                        <th>Number</th>
                                        <th>Week</th>

                                        <th> Weekly Point</th>
                                        <th>Total Points</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>Afonime Royal</td>
                                        <td>Computer Science</td>
                                        <td>17</td>
                                        <td>Credit card</td>
                                        <td> <label class="badge">2</label></td>
                                        <td> 25</td>
                                        <td> 40</td>
                                    </tr>

                                    <tr>
                                        <td>Afonime Royal</td>
                                        <td>Computer Science</td>
                                        <td>17</td>
                                        <td>Credit card</td>
                                        <td> <label class="badge">2</label></td>
                                        <td> 25</td>
                                        <td> 40</td>
                                    </tr>

                                    <tr>
                                        <td>Afonime Royal</td>
                                        <td>Computer Science</td>
                                        <td>17</td>
                                        <td>Credit card</td>
                                        <td> <label class="badge">2</label></td>
                                        <td> 25</td>
                                        <td> 40</td>
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
        name : 'ManagePoints'
    }

</script>