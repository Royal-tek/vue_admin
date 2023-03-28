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
                            <h2>Coach List</h2>
                        </div>
                        <div class="body">
                            <div class="table-responsive">
                                <table class="table center-aligned-table">
                                    <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th> Last Name</th>
                                        <th> Team</th>
                                        <th>Delete Coach</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td> Royal</td>
                                        <td>Afonime</td>
                                        <td><label class="badge">Computer Science</label></td>
                                        <td><button class="btn btn-danger btn-sm"><i class="icon-trash"></i></button></td>
                                    </tr>

                                    <tr>
                                        <td> Noble</td>
                                        <td>Afonime</td>
                                        <td><label class="badge">Computer Science</label></td>
                                        <td><button class="btn btn-danger btn-sm"><i class="icon-trash"></i></button></td>
                                    </tr>

                                    <tr>
                                        <td> Excel</td>
                                        <td>Afonime</td>
                                        <td><label class="badge">Computer Science</label></td>
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
        name : 'ManageCoaches'
    }

</script>