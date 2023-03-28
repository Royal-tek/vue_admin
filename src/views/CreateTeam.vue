<template>
    <div id="main-content">
        <div class="container-fluid">
            <div class="block-header">
                <div class="row">
                    <div class="col-lg-5 col-md-8 col-sm-12">                        
                        <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i class="fa fa-arrow-left"></i></a> Create Team</h2>
                       
                    </div>            
                    
                </div>
            </div>

            <div class="row clearfix">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="header">
                            <h2>User List</h2>
                            <ul class="header-dropdown">
                                <input type="search" class="form-control" placeholder="Search User">
                                <!-- <li><a href="javascript:void(0);" data-toggle="modal" data-target="#addcontact"><i class="icon-plus"></i></a></li> -->
                            </ul>
                        </div>
                        <div class="body table-responsive">
                            <table class="table table-hover m-b-0 c_list">
                                <thead>
                                    <tr>
                                        
                                        <th>Name</th>                                    
                                        <th>Email</th>                                    
                                        <th>Address</th>
                                        <th>Verified</th>
                                        <th>Appoint</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                    <tr>
                                        
                                        <td>
                                            <img src="/assets/images/xs/avatar1.jpg" class="rounded-circle avatar" alt="">
                                            <p class="c_name">Afonime Royal</p>
                                        </td>
                                        <td>
                                            <span class="phone"><i class="zmdi zmdi-phone m-r-10"></i>afonimeroyal@gmail.com</span>
                                        </td>                                   
                                        <td>
                                            <address><i class="zmdi zmdi-pin"></i>123 6th St. Melbourne, FL 32904</address>
                                        </td>
                                        <td>                                            
                                            <button type="button" class="btn btn-info" title="Edit"><i class="fa fa-check"></i></button>
                                          
                                        </td>
                                        <td>                                            
                                            <button type="button" class="btn btn-info" title="Edit"><i class="fa fa-edit"></i></button>
                                          
                                        </td>
                                    </tr>
                                    <tr>
                                        
                                        <td>
                                            <img src="/assets/images/xs/avatar3.jpg" class="rounded-circle avatar" alt="">
                                            <p class="c_name">Afonime Noble  </p>
                                        </td>
                                        <td>
                                            <span class="phone"><i class="zmdi zmdi-phone m-r-10"></i>afonimenoble@gmail.com</span>
                                        </td>                                    
                                        <td>
                                            <address><i class="zmdi zmdi-pin"></i>44 Shirley Ave. West Chicago, IL 60185</address>
                                        </td>
                                        <td>
                                            <button type="button" class="btn btn-info" title="Edit"><i class="fa fa-times"></i></button>
                                            
                                        </td>
                                        <td>
                                            <button type="button" class="btn btn-info" title="Edit"><i class="fa fa-edit"></i></button>
                                            
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'CreateTeam'
    }

</script>