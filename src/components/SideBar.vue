<template>
  <!-- NAVIGATION -->
  <div id="left-sidebar" class="sidebar">
        <div class="">
            <div class="user-account">
                <div class="dropdown">
                    <span>Welcome,</span>
                    <a href="javascript:void(0);" class="dropdown-toggle user-name" data-toggle="dropdown"><strong>Afonime Royal</strong></a>
                    <ul class="dropdown-menu dropdown-menu-right account">
                        <li><a href="page-profile2.html"><i class="icon-user"></i>My Profile</a></li>
                        <li class="divider"></li>
                        <li><a href="page-login.html"><i class="icon-power"></i>Logout</a></li>
                    </ul>
                </div>
                <hr>
                
            </div>
            <!-- Nav tabs -->
            <ul class="nav nav-tabs">
                <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="/">PFL</a></li>
                             
            </ul>
                
            <!-- Tab panes -->
            <div class="tab-content p-l-0 p-r-0">
                <div class="tab-pane active" id="menu">
                    <nav id="left-sidebar-nav" class="sidebar-nav">
                        <ul id="main-menu" class="metismenu">
                            <li class="active">
                                <a href="/"><i class="icon-home"></i> <span>Dashboard</span></a>
                               
                            </li>
                            <li>
                                <a href="#App" class="has-arrow"><i class="icon-grid"></i> <span>Players</span></a>
                                <ul>
                                    <li><router-link to="/manage-players" href="app-inbox.html">Manage players</router-link></li>
                                    <li><router-link to="/" href="app-inbox.html">Edit players</router-link></li>

                                </ul>
                            </li>
                            
                            <li>
                                <a href="#Blog" class="has-arrow"><i class="icon-globe"></i> <span>Team</span></a>
                                <ul>                                    
                                    <li><router-link  to="/create-team">Create Team</router-link></li>
                                    <li><a href="blog-post.html">New Post</a></li>
                                    <li><a href="blog-list.html">Blog List</a></li>
                                    <li><a href="blog-details.html">Blog Detail</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="#FileManager" class="has-arrow"><i class="icon-folder"></i> <span>Coaches</span></a>
                                <ul>                                    
                                    <li><router-link to="/manage-coaches">Manage Coaches</router-link></li>
                               
                                </ul>
                            </li>
                           
                            <li>
                                <a href="#FileManager" class="has-arrow"><i class="icon-folder"></i> <span>Points</span></a>
                                <ul>                                    
                                    <li><router-link to="/assign-points">Award Points</router-link></li>
                                    <li><router-link to="/manage-points">Manage Points</router-link></li>
                               
                                </ul>
                            </li>
                           
                        </ul>
                    </nav>
                </div>
                 
            </div>          
        </div>
    </div>
</template>

<script>
export default {
  name: 'SideBar',
 
}
</script>

