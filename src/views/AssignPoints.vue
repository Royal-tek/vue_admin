<template>
    
    <div id="main-content" style="position: relative;">
        <PointModal v-if="showModal" v-on:close-modal="closeModal"/>
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
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Q01</td>
                                        <td>Afonime Royal</td>
                                        <td>Computer Science</td>
                                        <td>17</td>
                                        <td>Credit card</td>
                                        <td><a style="text-decoration: none; color: #fff;" @click="assignPoint(player)" class="btn btn-success btn-sm">Assign Point</a></td>
                                    </tr>
                                    <tr>
                                        <td>Q01</td>
                                        <td>Afonime Royal</td>
                                        <td>Computer Science</td>
                                        <td>17</td>
                                        <td>Credit card</td>
                                        <td><a href="javascript:void(0);" class="btn btn-success btn-sm">Assign Point</a></td>
                                    </tr>
                                    <tr>
                                        <td>Q01</td>
                                        <td>Afonime Royal</td>
                                        <td>Computer Science</td>
                                        <td>17</td>
                                        <td>Credit card</td>
                                        <td><a href="javascript:void(0);" class="btn btn-success btn-sm">Assign Point</a></td>
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
import PointModal from '../components/PointModal.vue';
    export default {
        name : 'AssignPoints',
        data(){
            return{
                showModal : false,
                player : ''
            }
        },
        components : {
            PointModal
        },
        methods : {
            assignPoint(){
                this.showModal = true
            },
            closeModal(){
                this.showModal = false
            }
        }
    }

</script>